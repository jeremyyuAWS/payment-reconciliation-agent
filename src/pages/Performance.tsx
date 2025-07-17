import React from 'react';
import PerformanceMonitorPanel from '../components/PerformanceOptimization/PerformanceMonitorPanel';

const Performance: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Performance Monitoring</h1>
        <p className="text-gray-600 mb-4">
          The Performance Monitoring dashboard provides real-time insights into system performance metrics and optimization opportunities.
          Monitor resource utilization, track application responsiveness, and identify performance bottlenecks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h2 className="font-medium text-indigo-800 mb-2">Cache Analytics</h2>
            <p className="text-sm text-indigo-600">
              View cache hit rates, memory usage statistics, and optimize data retrieval performance.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="font-medium text-green-800 mb-2">Background Tasks</h2>
            <p className="text-sm text-green-600">
              Monitor asynchronous processing jobs, task queue status, and execution metrics.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h2 className="font-medium text-purple-800 mb-2">Resource Utilization</h2>
            <p className="text-sm text-purple-600">
              Track CPU, memory, and network usage to ensure optimal application performance.
            </p>
          </div>
        </div>
      </div>
      <PerformanceMonitorPanel onBack={() => {}} />
    </div>
  );
};

export default Performance;