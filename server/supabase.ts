import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "Supabase credentials not configured. Visitor tracking will be disabled."
  );
}

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function logVisitor(data: {
  sessionId: string;
  planId: string;
  planName: string;
  amount: string;
  userAgent: string;
  referrer: string;
  ipAddress: string;
}) {
  if (!supabase) {
    console.warn("Supabase not configured, skipping visitor log");
    return null;
  }

  try {
    const { data: result, error } = await supabase
      .from("visitors")
      .insert([data])
      .select();

    if (error) {
      console.error("Error logging visitor:", error);
      return null;
    }

    return result?.[0] || null;
  } catch (err) {
    console.error("Exception logging visitor:", err);
    return null;
  }
}
