import { useIncidents } from '@/contexts/IncidentContext';
import Navbar from '@/components/Navbar';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  BarChart, 
  Bar, 
  Cell,
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  LineChart,
  Line,
  CartesianGrid
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, AlertTriangle, Info, TrendingUp } from 'lucide-react';

export default function Analytics() {
  const { incidents } = useIncidents();
  
  // Data for the severity distribution pie chart
  const severityData = [
    { name: 'High', value: incidents.filter(i => i.severity === 'High').length, color: '#f87171' },
    { name: 'Medium', value: incidents.filter(i => i.severity === 'Medium').length, color: '#fbbf24' },
    { name: 'Low', value: incidents.filter(i => i.severity === 'Low').length, color: '#34d399' },
  ];

  // Group incidents by month for the trend chart
  const getMonthData = () => {
    const monthMap = new Map();
    
    incidents.forEach(incident => {
      const date = new Date(incident.reported_at);
      const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
      
      if (!monthMap.has(monthYear)) {
        monthMap.set(monthYear, { 
          name: monthYear, 
          total: 0,
          high: 0,
          medium: 0,
          low: 0
        });
      }
      
      const monthData = monthMap.get(monthYear);
      monthData.total += 1;
      
      if (incident.severity === 'High') monthData.high += 1;
      else if (incident.severity === 'Medium') monthData.medium += 1;
      else if (incident.severity === 'Low') monthData.low += 1;
    });
    
    // Sort by date
    return Array.from(monthMap.values()).sort((a, b) => {
      const dateA = new Date(a.name);
      const dateB = new Date(b.name);
      return dateA.getTime() - dateB.getTime();
    });
  };

  const monthlyData = getMonthData();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="analytics-page">
          <div className="flex flex-col space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
                <TrendingUp className="mr-2 h-6 w-6 text-primary" />
                Analytics Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Visualize and analyze AI safety incident patterns and trends
              </p>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                    High Severity
                  </CardTitle>
                  <CardDescription>Critical incidents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-500">
                    {incidents.filter(i => i.severity === 'High').length}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {incidents.length > 0 ? Math.round((incidents.filter(i => i.severity === 'High').length / incidents.length) * 100) : 0}% of total incidents
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                    Medium Severity
                  </CardTitle>
                  <CardDescription>Concerning incidents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-500">
                    {incidents.filter(i => i.severity === 'Medium').length}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {incidents.length > 0 ? Math.round((incidents.filter(i => i.severity === 'Medium').length / incidents.length) * 100) : 0}% of total incidents
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Info className="mr-2 h-5 w-5 text-green-500" />
                    Low Severity
                  </CardTitle>
                  <CardDescription>Minor incidents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500">
                    {incidents.filter(i => i.severity === 'Low').length}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {incidents.length > 0 ? Math.round((incidents.filter(i => i.severity === 'Low').length / incidents.length) * 100) : 0}% of total incidents
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <Tabs defaultValue="distribution" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="distribution">Distribution</TabsTrigger>
                <TabsTrigger value="trend">Trend</TabsTrigger>
                <TabsTrigger value="comparison">Comparison</TabsTrigger>
              </TabsList>
              
              <TabsContent value="distribution" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Severity Distribution</CardTitle>
                    <CardDescription>Breakdown of incidents by severity level</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={severityData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {severityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="trend" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Incident Trend</CardTitle>
                    <CardDescription>Number of incidents reported over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={monthlyData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#6366f1" name="Total Incidents" strokeWidth={2} />
                        <Line type="monotone" dataKey="high" stroke="#f87171" name="High Severity" />
                        <Line type="monotone" dataKey="medium" stroke="#fbbf24" name="Medium Severity" />
                        <Line type="monotone" dataKey="low" stroke="#34d399" name="Low Severity" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="comparison" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Severity Comparison</CardTitle>
                    <CardDescription>Comparison of incident severity</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={severityData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" name="Number of Incidents">
                          {severityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}