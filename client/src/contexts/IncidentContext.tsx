import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Incident, Severity, SortOption } from '@/types';

interface IncidentContextType {
  incidents: Incident[];
  filteredIncidents: Incident[];
  addIncident: (title: string, description: string, severity: Severity) => void;
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
  currentSort: SortOption;
  setCurrentSort: (sort: SortOption) => void;
  toggleIncidentDetails: (id: number) => void;
  expandedIncidents: Set<number>;
  stats: {
    total: number;
    high: number;
    medium: number;
    low: number;
  };
}

const initialIncidents: Incident[] = [
  {
    id: 1, 
    title: "Biased Recommendation Algorithm", 
    description: "Algorithm consistently favored certain demographics in job recommendations, creating an unfair advantage. Investigation revealed training data was not properly balanced across different demographic groups. Mitigation involved retraining with balanced data and implementing fairness metrics.", 
    severity: "Medium", 
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2, 
    title: "LLM Hallucination in Critical Info", 
    description: "LLM provided incorrect safety procedure information during an emergency response simulation. The model confidently presented fabricated steps that would have endangered lives in a real scenario. Root cause was insufficient guardrails for safety-critical domains and lack of fact verification.", 
    severity: "High", 
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3, 
    title: "Minor Data Leak via Chatbot", 
    description: "Chatbot inadvertently exposed non-sensitive user metadata through conversation logs that were supposed to be anonymized. While no PII was compromised, the incident revealed a gap in the data sanitization pipeline that needed to be addressed.", 
    severity: "Low", 
    reported_at: "2025-03-20T09:15:00Z"
  }
];

const IncidentContext = createContext<IncidentContextType | undefined>(undefined);

export function IncidentProvider({ children }: { children: ReactNode }) {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [expandedIncidents, setExpandedIncidents] = useState<Set<number>>(new Set());
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [currentSort, setCurrentSort] = useState<SortOption>('newest');

  useEffect(() => {
    // Load incidents from localStorage or use initialIncidents if none exist
    const savedIncidents = localStorage.getItem('incidents');
    if (savedIncidents) {
      setIncidents(JSON.parse(savedIncidents));
    } else {
      setIncidents(initialIncidents);
    }
  }, []);

  useEffect(() => {
    // Save incidents to localStorage whenever they change
    localStorage.setItem('incidents', JSON.stringify(incidents));
  }, [incidents]);

  const addIncident = (title: string, description: string, severity: Severity) => {
    const newId = incidents.length > 0 ? Math.max(...incidents.map(inc => inc.id)) + 1 : 1;
    const newIncident: Incident = {
      id: newId,
      title,
      description,
      severity,
      reported_at: new Date().toISOString()
    };
    
    setIncidents(prevIncidents => [...prevIncidents, newIncident]);
  };

  const toggleIncidentDetails = (id: number) => {
    setExpandedIncidents(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(id)) {
        newExpanded.delete(id);
      } else {
        newExpanded.add(id);
      }
      return newExpanded;
    });
  };

  // Calculate statistics for incidents
  const stats = {
    total: incidents.length,
    high: incidents.filter(inc => inc.severity === 'High').length,
    medium: incidents.filter(inc => inc.severity === 'Medium').length,
    low: incidents.filter(inc => inc.severity === 'Low').length,
  };

  // Apply filtering and sorting to incidents
  const filteredIncidents = incidents
    .filter(incident => currentFilter === 'all' || incident.severity === currentFilter)
    .sort((a, b) => {
      const dateA = new Date(a.reported_at);
      const dateB = new Date(b.reported_at);
      return currentSort === 'newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });

  return (
    <IncidentContext.Provider 
      value={{ 
        incidents, 
        filteredIncidents,
        addIncident, 
        currentFilter, 
        setCurrentFilter,
        currentSort,
        setCurrentSort,
        toggleIncidentDetails,
        expandedIncidents,
        stats
      }}
    >
      {children}
    </IncidentContext.Provider>
  );
}

export function useIncidents() {
  const context = useContext(IncidentContext);
  if (context === undefined) {
    throw new Error('useIncidents must be used within an IncidentProvider');
  }
  return context;
}
