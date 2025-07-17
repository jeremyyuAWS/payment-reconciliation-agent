import React, { useState, useEffect } from 'react';
import { AdvancedAnalyticsDashboard } from '../components/AdvancedAnalytics';
import { generateSampleAnalyticsData } from '../utils/sampleAnalyticsData';
import { ReconciliationResult } from '../types';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Analytics: React.FC = () => {
  const navigate = useNavigate();
  const [analyticsData, setAnalyticsData] = useState<ReconciliationResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading analytics data with a slight delay for realism
    setIsLoading(true);
    
    const generateDataWithDelay = async () => {
      // Simulate server processing time
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Generate rich data set for analytics
      const richData = generateSampleAnalyticsData();
      setAnalyticsData(richData);
      setIsLoading(false);
    };
    
    generateDataWithDelay();
  }, []);
  
  const handleBack = () => {
    navigate('/');
  };

  // Show loading state while generating data
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <Brain className="h-12 w-12 text-indigo-500 animate-pulse" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Advanced Analytics</h2>
          <p className="text-gray-600 mb-4">
            Processing data and generating insights. This may take a moment...
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full animate-pulse" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Advanced Analytics</h1>
        <p className="text-gray-600 mb-4">
          Gain deeper insights into your reconciliation data with AI-powered analytics and visualizations.
          Explore customer payment patterns, detect anomalies, and visualize relationships between financial entities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-medium text-blue-800 mb-2">Time Series Analysis</h2>
            <p className="text-sm text-blue-600">
              Visualize payment and reconciliation trends over time to identify seasonal patterns and performance improvements.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h2 className="font-medium text-purple-800 mb-2">Relationship Mapping</h2>
            <p className="text-sm text-purple-600">
              Understand the connections between payments, invoices, and ledger entries with interactive flow diagrams.
            </p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h2 className="font-medium text-amber-800 mb-2">Anomaly Detection</h2>
            <p className="text-sm text-amber-600">
              Automatically identify unusual patterns and potential issues in your financial data.
            </p>
          </div>
        </div>
      </div>
      <AdvancedAnalyticsDashboard results={analyticsData} onBack={handleBack} />
    </div>
  );
};

export default Analytics;