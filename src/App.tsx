import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthenticator } from "@aws-amplify/ui-react";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HowTo from "./pages/HowTo";
import NotFound from "./pages/NotFound";
import ModelTraining from "./pages/ModelTraining";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
  const { authStatus } = useAuthenticator();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                authStatus === "authenticated" ? <Dashboard /> : <Login />
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/how-to"
              element={
                <ProtectedRoute>
                  <HowTo />
                </ProtectedRoute>
              }
            />
            <Route
              path="/model-training"
              element={
                <ProtectedRoute>
                  <ModelTraining />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
