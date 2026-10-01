import React, { useState } from 'react';
import { DEFECTS_REGISTRY } from '../data/defects';
import { AlertTriangle, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import type { DefectItem } from '../types';

interface DefectsRegistryViewProps {
  onNavigateTab: (tab: 'store' | 'analytics' | 'profile') => void;
}

export const DefectsRegistryView: React.FC<DefectsRegistryViewProps> = ({ onNavigateTab }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopySelector = (selector: string, id: string) => {
    navigator.clipboard.writeText(selector);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getSeverityBadge = (severity: DefectItem['severity']) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'Major':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      case 'Minor':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-amber-900/40 bg-gradient-to-r from-amber-950/40 via-gray-900 to-indigo-950/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">CONTROLLED QA FIXTURE</span>
                <h1 className="text-2xl font-extrabold text-white">Baseline Defects Specification</h1>
              </div>
            </div>
            <p className="text-sm text-gray-300 max-w-3xl">
              This website intentionally contains known defects for validating UIProof AI.
              Each defect is structured to test specific deterministic audit categories.
            </p>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-gray-900 border border-gray-800 text-center shrink-0">
            <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Active Fixture Defects</span>
            <span className="text-3xl font-black text-amber-400">{DEFECTS_REGISTRY.length}</span>
          </div>
        </div>
      </div>

      {/* Defects List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DEFECTS_REGISTRY.map((defect) => (
          <div
            key={defect.id}
            id={`defect-card-${defect.id}`}
            className="glass-card rounded-2xl p-6 border border-gray-800 flex flex-col justify-between hover:border-indigo-500/40 transition-colors group"
          >
            <div className="space-y-4">
              {/* Card Top Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm font-black text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-800/60">
                    {defect.id}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${getSeverityBadge(defect.severity)}`}>
                    {defect.severity}
                  </span>
                </div>
                <span className="text-xs font-medium text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-800/40">
                  {defect.expectedCategory}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {defect.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {defect.description}
                </p>
              </div>

              {/* Details & Selector */}
              <div className="space-y-2 bg-gray-950/80 p-3.5 rounded-xl border border-gray-800/80 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-semibold">Location:</span>
                  <span className="text-gray-200 font-medium">{defect.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-semibold">Selector / Tag:</span>
                  <button
                    onClick={() => handleCopySelector(defect.selector, defect.id)}
                    aria-label={`Copy selector for ${defect.id}`}
                    className="font-mono text-indigo-300 hover:text-indigo-200 flex items-center space-x-1.5 bg-gray-900 px-2 py-0.5 rounded border border-gray-800 hover:border-gray-700 transition-colors"
                  >
                    <span>{defect.selector}</span>
                    {copiedId === defect.id ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* How Created & Expected Fix */}
              <div className="space-y-2 text-xs">
                <div className="bg-gray-900/90 p-3 rounded-xl border border-gray-800">
                  <strong className="text-gray-300 block mb-1">How Created:</strong>
                  <span className="text-gray-400 font-mono">{defect.howCreated}</span>
                </div>
                <div className="bg-indigo-950/20 p-3 rounded-xl border border-indigo-900/30">
                  <strong className="text-indigo-300 block mb-1">Expected AI Fix:</strong>
                  <span className="text-indigo-200">{defect.expectedFix}</span>
                </div>
              </div>
            </div>

            {/* Direct Navigation Button */}
            <div className="pt-4 border-t border-gray-800/80 mt-4 flex justify-end">
              <button
                onClick={() => {
                  if (defect.location.startsWith('Store')) onNavigateTab('store');
                  else if (defect.location.startsWith('Analytics')) onNavigateTab('analytics');
                  else if (defect.location.startsWith('Profile')) onNavigateTab('profile');
                  else onNavigateTab('store');
                }}
                aria-label={`Jump to location of ${defect.id}`}
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1 transition-colors"
              >
                <span>Jump to Location</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
