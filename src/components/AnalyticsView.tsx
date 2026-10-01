import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export const AnalyticsView: React.FC = () => {
  const [metrics, setMetrics] = useState([
    { label: 'Total Revenue', value: '$124,590.00', change: '+14.2%', isPositive: true },
    { label: 'Active Subscriptions', value: '1,420', change: '+8.1%', isPositive: true },
    { label: 'Average Order Value', value: '$87.50', change: '-2.4%', isPositive: false },
    { label: 'Conversion Rate', value: '3.42%', change: '+0.9%', isPositive: true },
  ]);

  const transactions = [
    {
      id: 'tx-1001',
      hash: '0x9481abf819028401928409182409182409',
      user: 'Sarah Jenkins (sarah.j@enterprise.io)',
      amount: '$1,299.00',
      status: 'Completed',
      date: '2026-10-01 18:32:11 UTC'
    },
    {
      id: 'tx-1002',
      hash: '0x3710491029481029481029481029481029',
      user: 'Alex Rivera (arivera@techcorp.net)',
      amount: '$599.99',
      status: 'Completed',
      date: '2026-10-01 17:45:00 UTC'
    },
    {
      id: 'tx-1003',
      hash: '0x8820194810294810294810294810294810',
      user: 'Michael Chen (mchen@devops.org)',
      amount: '$329.99',
      status: 'Processing',
      date: '2026-10-01 16:12:44 UTC'
    }
  ];

  const handleShuffleMetrics = () => {
    setMetrics([...metrics].reverse());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Analytics Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border border-gray-800">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight mb-1">
            Store Performance & Realtime Analytics
          </h1>
          <p className="text-sm text-gray-400">
            Realtime revenue streams, transaction hash verification, and key conversions.
          </p>
        </div>
        <button
          onClick={handleShuffleMetrics}
          aria-label="Refresh metric ordering"
          className="px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-gray-200 border border-gray-700 flex items-center space-x-2 transition-colors self-start md:self-auto"
        >
          <RefreshCw className="w-4 h-4 text-indigo-400" />
          <span>Refresh Metrics</span>
        </button>
      </div>

      {/* Metric Cards Grid - Restored unique key props (Fixes old DEF-007) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="glass-card p-5 rounded-2xl border border-gray-800 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {metric.label}
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                metric.isPositive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {metric.change}
              </span>
            </div>
            <div className="text-2xl font-black text-white">
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      {/* Transaction Log Table - Restored overflow-x-auto container (Fixes old DEF-006) */}
      <div className="glass-panel rounded-2xl p-6 border border-gray-800 space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white">Latest Transaction Log</h2>
          <p className="text-xs text-gray-400">Recent customer orders and settlement state.</p>
        </div>

        <div className="w-full overflow-x-auto">
          <table id="analytics-transaction-table" className="w-full text-left text-sm text-gray-300 min-w-[600px]">
            <thead className="bg-gray-900/90 text-xs font-semibold uppercase text-gray-400 border-b border-gray-800">
              <tr>
                <th className="py-3 px-4">Transaction ID</th>
                <th className="py-3 px-4">Transaction Hash</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-800/40">
                  <td className="py-3.5 px-4 font-mono text-xs font-bold text-indigo-400">{tx.id}</td>
                  <td className="py-3.5 px-4 font-mono text-xs text-gray-400">
                    {tx.hash}
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-gray-200">{tx.user}</td>
                  <td className="py-3.5 px-4 font-extrabold text-white">{tx.amount}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
