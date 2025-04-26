import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useIncidents } from '@/contexts/IncidentContext';
import Navbar from './Navbar';
import StatsOverview from './StatsOverview';
import IncidentList from './IncidentList';
import NewIncidentDialog from './NewIncidentDialog';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Plus } from 'lucide-react';

interface DashboardProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

export default function Dashboard({ toggleTheme, theme }: DashboardProps) {
  const { isAuthenticated } = useAuth();
  const [isNewIncidentDialogOpen, setIsNewIncidentDialogOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="dashboard">
          <div className="flex flex-col space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">AI Safety Incident Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Monitor, track, and report AI safety incidents</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="h-5 w-5 mr-2" />
                      <span>Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun className="h-5 w-5 mr-2" />
                      <span>Light Mode</span>
                    </>
                  )}
                </Button>
                
                <Button 
                  onClick={() => setIsNewIncidentDialogOpen(true)}
                  disabled={!isAuthenticated}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-600"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Report Incident
                </Button>
              </div>
            </div>

            <StatsOverview />
            <IncidentList />
          </div>
        </div>
      </main>

      <NewIncidentDialog 
        isOpen={isNewIncidentDialogOpen} 
        onClose={() => setIsNewIncidentDialogOpen(false)} 
      />
    </div>
  );
}
