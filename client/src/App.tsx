import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PaymentPlanPage from "@/pages/PaymentPlan";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Redirect root to basic plan */}
      <Route path="/">
        <Redirect to="/plan/basic" />
      </Route>
      
      {/* Payment Plan Routes */}
      <Route path="/plan/basic">
        <PaymentPlanPage planId="basic" />
      </Route>
      <Route path="/plan/standard">
        <PaymentPlanPage planId="standard" />
      </Route>
      <Route path="/plan/pro">
        <PaymentPlanPage planId="pro" />
      </Route>
      <Route path="/plan/premium">
        <PaymentPlanPage planId="premium" />
      </Route>
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
