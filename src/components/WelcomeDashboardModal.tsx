import React from 'react';
import { Brain, X, Sparkles, Bot, Zap, ChevronRight, MessageSquare, PieChart, AlertTriangle } from 'lucide-react';

interface WelcomeDashboardModalProps {
  onClose: () => void;
}

const WelcomeDashboardModal: React.FC<WelcomeDashboardModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Welcome to Your AI Financial Assistant</h2>
                <p className="text-gray-500 mt-1">Discover the power of AI in financial reconciliation</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Main Content */}
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Core AI Features */}
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                <h3 className="text-lg font-semibold text-indigo-900 flex items-center mb-3">
                  <Bot className="h-5 w-5 mr-2" />
                  Core AI Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                    <div>
                      <span className="text-indigo-800 font-medium">Intelligent Payment Matching</span>
                      <p className="text-xs text-indigo-600 mt-1">Automatically matches payments to invoices with 95% accuracy using reference codes, amounts, and payer names. The system handles partial payments, overpayments, and slight variations in amounts.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                    <div>
                      <span className="text-indigo-800 font-medium">Natural Language Query Processing</span>
                      <p className="text-xs text-indigo-600 mt-1">Ask complex questions about your financial data in plain English. The AI understands context, entity relationships, and can extract meaningful insights about reconciliation status and issues.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                    <div>
                      <span className="text-indigo-800 font-medium">Anomaly Detection</span>
                      <p className="text-xs text-indigo-600 mt-1">Automatically identifies unusual patterns like duplicate payments, suspicious timing, or inconsistent payment behaviors that might indicate fraud or errors in your financial processes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PieChart className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                    <div>
                      <span className="text-indigo-800 font-medium">Advanced Analytics</span>
                      <p className="text-xs text-indigo-600 mt-1">Visualize reconciliation trends, customer payment behaviors, and issue patterns through interactive charts and dashboards. Gain deeper insights with time-series analysis and relationship flow mapping.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Advanced Capabilities */}
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <h3 className="text-lg font-semibold text-green-900 flex items-center mb-3">
                  <Zap className="h-5 w-5 mr-2" />
                  Advanced Capabilities
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-800 font-medium">1</span>
                    </div>
                    <div>
                      <span className="text-green-800 font-medium">Entity Resolution</span>
                      <p className="text-xs text-green-600 mt-1">Identifies when different company names refer to the same entity (e.g., "Acme Corp" vs "Acme Inc."). Maps parent-subsidiary relationships and handles various company name formats automatically.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-800 font-medium">2</span>
                    </div>
                    <div>
                      <span className="text-green-800 font-medium">Predictive Analytics</span>
                      <p className="text-xs text-green-600 mt-1">Forecasts future payment patterns, identifies customers likely to pay late, and predicts cash flow based on historical payment behaviors and seasonal trends.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-800 font-medium">3</span>
                    </div>
                    <div>
                      <span className="text-green-800 font-medium">Real-time Reconciliation</span>
                      <p className="text-xs text-green-600 mt-1">Continuously monitors payment streams and alerts you instantly to issues requiring attention. Provides explanations of discrepancies as they occur, rather than in batch processes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-800 font-medium">4</span>
                    </div>
                    <div>
                      <span className="text-green-800 font-medium">Customizable Rules Engine</span>
                      <p className="text-xs text-green-600 mt-1">Fine-tune the AI's matching behavior with configurable rules, thresholds, and weights. Create company-specific reconciliation policies and adapt the system to your unique business requirements.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Assistant Preview */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-3">
                <Bot className="h-5 w-5 mr-2" />
                Try These AI Queries
              </h3>
              <p className="text-gray-600 mb-3">
                Our natural language processing engine understands complex questions about your financial data. Here are some examples to get you started:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm font-medium text-gray-800 mb-1">"Show me all unreconciled payments"</p>
                  <p className="text-xs text-gray-500">Instantly identifies payments that require attention and displays them with their issues.</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm font-medium text-gray-800 mb-1">"Why wasn't invoice #1003 reconciled?"</p>
                  <p className="text-xs text-gray-500">Provides a detailed explanation of reconciliation failures with specific invoice analysis.</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm font-medium text-gray-800 mb-1">"Which customers made duplicate payments?"</p>
                  <p className="text-xs text-gray-500">Identifies customers with potential duplicate transactions and the affected invoices.</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-sm font-medium text-gray-800 mb-1">"Show me payments with amount mismatches"</p>
                  <p className="text-xs text-gray-500">Finds payments where the amount doesn't match the invoice, highlighting underpayments and overpayments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
            >
              Get Started
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDashboardModal;