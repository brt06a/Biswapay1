import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { users, subscriptions, payments, type User, type InsertUser, type Subscription, type InsertSubscription, type Payment, type InsertPayment } from "@shared/schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByTelegramId(telegramId: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPayment(payment: InsertPayment): Promise<Payment>;
  getPaymentsByUserId(userId: string): Promise<Payment[]>;
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getActiveSubscriptionByUserId(userId: string): Promise<Subscription | undefined>;
  getAllPayments(): Promise<Payment[]>;
  getAllSubscriptions(): Promise<Subscription[]>;
  updatePaymentStatus(paymentId: string, status: string, transactionRef?: string): Promise<Payment | undefined>;
}

export class DrizzleStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor() {
    const client = neon(process.env.DATABASE_URL!);
    this.db = drizzle(client);
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByTelegramId(telegramId: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.telegramId, telegramId));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const userId = randomUUID();
    const newUser: User = {
      id: userId,
      telegramId: insertUser.telegramId || null,
      email: insertUser.email || null,
      name: insertUser.name || null,
      createdAt: new Date(),
    };
    await this.db.insert(users).values(newUser);
    return newUser;
  }

  async createPayment(payment: InsertPayment): Promise<Payment> {
    const paymentId = randomUUID();
    const newPayment: Payment = {
      id: paymentId,
      ...payment,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await this.db.insert(payments).values(newPayment);
    return newPayment;
  }

  async getPaymentsByUserId(userId: string): Promise<Payment[]> {
    return this.db.select().from(payments).where(eq(payments.userId, userId));
  }

  async createSubscription(subscription: InsertSubscription): Promise<Subscription> {
    const subscriptionId = randomUUID();
    const newSubscription: Subscription = {
      id: subscriptionId,
      ...subscription,
      createdAt: new Date(),
    };
    await this.db.insert(subscriptions).values(newSubscription);
    return newSubscription;
  }

  async getActiveSubscriptionByUserId(userId: string): Promise<Subscription | undefined> {
    const result = await this.db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, userId));
    return result.find(s => s.status === 'active');
  }

  async getAllPayments(): Promise<Payment[]> {
    return this.db.select().from(payments);
  }

  async getAllSubscriptions(): Promise<Subscription[]> {
    return this.db.select().from(subscriptions);
  }

  async updatePaymentStatus(paymentId: string, status: string, transactionRef?: string): Promise<Payment | undefined> {
    await this.db.update(payments).set({
      status,
      transactionRef,
      updatedAt: new Date(),
    }).where(eq(payments.id, paymentId));
    return this.getPayment(paymentId);
  }

  private async getPayment(id: string): Promise<Payment | undefined> {
    const result = await this.db.select().from(payments).where(eq(payments.id, id));
    return result[0];
  }
}

export const storage = new DrizzleStorage();
