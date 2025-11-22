# Supabase Setup Instructions

Your Supabase credentials are configured. Now create the `visitors` table:

## Step 1: Open Supabase Dashboard
Go to: https://app.supabase.com

## Step 2: Open SQL Editor
Click "SQL Editor" in the left sidebar

## Step 3: Run This SQL

Copy and paste the following SQL in the SQL editor and click "Run":

```sql
CREATE TABLE IF NOT EXISTS visitors (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(255),
  plan_id VARCHAR(50),
  plan_name VARCHAR(100),
  amount TEXT,
  user_agent TEXT,
  referrer TEXT,
  timestamp TIMESTAMP DEFAULT NOW(),
  ip_address VARCHAR(50)
);

-- Create an index for faster queries
CREATE INDEX IF NOT EXISTS idx_visitors_session_id ON visitors(session_id);
CREATE INDEX IF NOT EXISTS idx_visitors_plan_id ON visitors(plan_id);
CREATE INDEX IF NOT EXISTS idx_visitors_timestamp ON visitors(timestamp);
```

## Step 4: Enable RLS (Optional but Recommended)

In the Supabase dashboard:
1. Go to Authentication > Policies
2. Click on the "visitors" table
3. Enable "Row Level Security" if desired

## Done!
Your visitor tracking is now live. Every time someone visits a payment page, their session will be logged to Supabase.

## Verification
Visit any payment plan page (e.g., `/plan/mater9692`) and check the Supabase "visitors" table to see the logged visits.
