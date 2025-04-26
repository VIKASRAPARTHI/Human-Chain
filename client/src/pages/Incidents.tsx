import { useIncidents } from '@/contexts/IncidentContext';
import IncidentList from '@/components/IncidentList';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import NewIncidentDialog from '@/components/NewIncidentDialog';
import { Plus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Incidents() {
  const { isAuthenticated } = useAuth();
  const [isNewIncidentDialogOpen, setIsNewIncidentDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="incidents-page">
          <div className="flex flex-col space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Incident Reports</h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Browse, filter, and manage AI safety incidents</p>
              </div>
              <div className="mt-4 md:mt-0">
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

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Incident Management</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                All incidents are logged with timestamps and severity levels. Use the filters to narrow down results by severity or date.
                Click on any incident to view its details.
              </p>
              
              <IncidentList />
            </div>
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