import React from 'react';
import TestingDashboard from '../components/Testing/TestingDashboard';

const Testing: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Testing & Quality Assurance</h1>
        <p className="text-gray-600 mb-4">
          The Testing Dashboard provides comprehensive tools for validating application functionality and ensuring data integrity.
          Run unit tests, end-to-end tests, and performance benchmarks to maintain high-quality reconciliation results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-medium text-blue-800 mb-2">Unit Testing</h2>
            <p className="text-sm text-blue-600">
              Validate individual components and functions with automated tests to ensure accurate calculations and proper business logic implementation.
            </p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h2 className="font-medium text-amber-800 mb-2">End-to-End Testing</h2>
            <p className="text-sm text-amber-600">
              Test complete user workflows from data import to reconciliation to ensure the entire system functions correctly across all browsers.
            </p>
          </div>
        </div>
      </div>
      <TestingDashboard onBack={() => {}} />
    </div>
  );
};

export default Testing;