
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Sun, Info, LogOut, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const NavigationBar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <motion.header 
      className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <Sun className="w-8 h-8 text-yellow-400 animate-spin-slow" />
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm opacity-30 animate-pulse"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">Solar Scheduler</span>
          </Link>
          
          <nav className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/" 
                  ? "text-solar-accent border-b-2 border-solar-accent" 
                  : "text-gray-600 hover:text-solar-accent"
              }`}
            >
              Dashboard
            </Link>
            
            <Link 
              to="/model-training" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/model-training" 
                  ? "text-solar-accent border-b-2 border-solar-accent" 
                  : "text-gray-600 hover:text-solar-accent"
              }`}
            >
              <span className="flex items-center">
                <Brain className="w-4 h-4 mr-1" />
                Train Model
              </span>
            </Link>
            
            <Link 
              to="/how-to" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/how-to" 
                  ? "text-solar-accent border-b-2 border-solar-accent" 
                  : "text-gray-600 hover:text-solar-accent"
              }`}
            >
              <span className="flex items-center">
                <Info className="w-4 h-4 mr-1" />
                How To
              </span>
            </Link>
            
            <div className="border-l border-gray-200 h-6 mx-2"></div>
            
            <Button 
              variant="ghost" 
              className="flex items-center text-gray-600 hover:text-solar-accent"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-1" />
              <span className="text-sm">Logout</span>
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default NavigationBar;
