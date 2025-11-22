import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/Home";
import PaymentPlanPage from "@/pages/PaymentPlan";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import TermsConditionsPage from "@/pages/TermsConditions";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Home page */}
      <Route path="/">
        <HomePage />
      </Route>

      {/* Policy Pages */}
      <Route path="/privacy">
        <PrivacyPolicyPage />
      </Route>
      <Route path="/terms">
        <TermsConditionsPage />
      </Route>
      
      {/* Payment Plan Routes with custom paths */}
      <Route path="/plan/mater9692">
        <PaymentPlanPage planId="basic" />
      </Route>
      <Route path="/plan/hiding8455">
        <PaymentPlanPage planId="standard" />
      </Route>
      <Route path="/plan/create9938">
        <PaymentPlanPage planId="pro" />
      </Route>
      <Route path="/plan/life9999">
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
