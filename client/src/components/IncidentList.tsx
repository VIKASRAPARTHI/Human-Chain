import { useIncidents } from '@/contexts/IncidentContext';
import { formatDate } from '@/utils/dateUtils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function IncidentList() {
  const { 
    filteredIncidents, 
    toggleIncidentDetails, 
    expandedIncidents,
    currentFilter,
    setCurrentFilter,
    currentSort,
    setCurrentSort
  } = useIncidents();

  function getSeverityColor(severity: string) {
    switch (severity) {
      case 'Low': return 'bg-green-500 bg-opacity-10 text-green-500';
      case 'Medium': return 'bg-amber-500 bg-opacity-10 text-amber-500';
      case 'High': return 'bg-red-500 bg-opacity-10 text-red-500';
      default: return 'bg-gray-500 bg-opacity-10 text-gray-500';
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Incident Reports</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">List of reported AI safety incidents.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          {/* Filter by Severity */}
          <Select
            value={currentFilter}
            onValueChange={setCurrentFilter}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Sort by Date */}
          <Select
            value={currentSort}
            onValueChange={(value) => setCurrentSort(value as 'newest' | 'oldest')}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredIncidents.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">No incidents found matching the current filters.</p>
            </div>
          ) : (
            filteredIncidents.map(incident => (
              <div key={incident.id} className="py-4 px-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{incident.title}</h4>
                    <div className="mt-1 flex items-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{formatDate(incident.reported_at)}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Button 
                      onClick={() => toggleIncidentDetails(incident.id)}
                      variant="outline"
                      size="sm"
                      className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <span>Details</span>
                      {expandedIncidents.has(incident.id) ? 
                        <ChevronUp className="ml-2 h-4 w-4" /> : 
                        <ChevronDown className="ml-2 h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
                
                {expandedIncidents.has(incident.id) && (
                  <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                    <p>{incident.description}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
