import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Incidents from "@/pages/Incidents";
import Analytics from "@/pages/Analytics";
import Resources from "@/pages/Resources";
import { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { IncidentProvider } from "./contexts/IncidentContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/incidents" component={Incidents} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/resources" component={Resources} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <IncidentProvider>
          <TooltipProvider>
            <Toaster />
            <div className={theme}>
              <Router />
            </div>
            <div className="hidden">
              <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
          </TooltipProvider>
        </IncidentProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
