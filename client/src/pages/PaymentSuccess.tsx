import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import logoImage from "@assets/generated_images/biswa_tech_solutions_logo.png";

export default function PaymentSuccess() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userEmail = params.get("email") || "";
    const planId = params.get("plan") || "";
    const amount = params.get("amount") || "";

    setEmail(userEmail);

    if (userEmail && planId && amount) {
      localStorage.setItem("userEmail", userEmail);
      
      // Create subscription record
      fetch("/api/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          planId,
          amount: parseInt(amount),
        }),
      }).catch(console.error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4">
        <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-950/20">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 dark:bg-green-900 p-4">
                <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-background rounded-lg p-4 text-center space-y-2">
              <p className="text-sm text-muted-foreground">Your subscription is now active</p>
              {email && (
                <p className="text-sm font-semibold" data-testid="text-confirmation-email">
                  Confirmation sent to {email}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Link href="/dashboard">
                <Button size="lg" className="w-full" data-testid="button-view-dashboard">
                  View Dashboard
                </Button>
              </Link>
              <Link href="/plan/basic">
                <Button size="lg" variant="outline" className="w-full" data-testid="button-view-plans">
                  View All Plans
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <img src={logoImage} alt="Biswa Tech Solutions" className="h-8 w-auto mx-auto" />
              <p className="text-xs text-muted-foreground mt-2">Thank you for your subscription!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
