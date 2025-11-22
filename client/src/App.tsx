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
        <Redirect to="/plan/mater9692" />
      </Route>
      
      {/* Payment Plan Routes with custom paths */}
      <Route path="/plan/mater9692/:sessionId?">
        <PaymentPlanPage planId="basic" />
      </Route>
      <Route path="/plan/hiding8455/:sessionId?">
        <PaymentPlanPage planId="standard" />
      </Route>
      <Route path="/plan/create9938/:sessionId?">
        <PaymentPlanPage planId="pro" />
      </Route>
      <Route path="/plan/life9999/:sessionId?">
        <PaymentPlanPage planId="premium" />
      </Route>
      
      {/* Legacy routes redirect to new ones */}
      <Route path="/plan/basic">
        <Redirect to="/plan/mater9692" />
      </Route>
      <Route path="/plan/standard">
        <Redirect to="/plan/hiding8455" />
      </Route>
      <Route path="/plan/pro">
        <Redirect to="/plan/create9938" />
      </Route>
      <Route path="/plan/premium">
        <Redirect to="/plan/life9999" />
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
