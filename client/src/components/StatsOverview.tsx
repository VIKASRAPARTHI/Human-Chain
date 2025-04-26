import { useIncidents } from '@/contexts/IncidentContext';
import { 
  ShieldAlert, 
  AlertTriangle, 
  AlertCircle, 
  Info 
} from 'lucide-react';

export default function StatsOverview() {
  const { stats } = useIncidents();
  
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Incidents Card */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-md p-3">
              <ShieldAlert className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  Total Incidents
                </dt>
                <dd>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stats.total}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* High Severity Card */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 dark:bg-red-900 rounded-md p-3">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-300" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  High Severity
                </dt>
                <dd>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stats.high}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Medium Severity Card */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-900 rounded-md p-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-300" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  Medium Severity
                </dt>
                <dd>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stats.medium}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Low Severity Card */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 rounded-md p-3">
              <Info className="h-5 w-5 text-green-600 dark:text-green-300" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  Low Severity
                </dt>
                <dd>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stats.low}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
