import React, { useState } from 'react';
import { DEFECTS_REGISTRY } from '../data/defects';
import { CheckCircle2, Copy, ExternalLink, ShieldCheck } from 'lucide-react';


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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 max-w-full">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-emerald-900/40 bg-gradient-to-r from-emerald-950/40 via-gray-900 to-indigo-950/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">CONTROLLED QA TARGET — RETEST VERIFIED</span>
                <h1 className="text-2xl font-extrabold text-white">Baseline Defects Specification & Resolution Log</h1>
              </div>
            </div>
            <p className="text-sm text-gray-300 max-w-3xl">
              This website serves as the Retest target for validating UIProof AI fix verification. All 4 controlled baseline defects have been resolved.
            </p>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-gray-900 border border-gray-800 text-center shrink-0">
            <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Verified Resolved Fixtures</span>
            <span className="text-3xl font-black text-emerald-400">{DEFECTS_REGISTRY.length} / {DEFECTS_REGISTRY.length}</span>
          </div>
        </div>
      </div>

      {/* Defects List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DEFECTS_REGISTRY.map((defect) => (
          <div
            key={defect.id}
            id={`defect-card-${defect.id}`}
            className="glass-card rounded-2xl p-6 border border-gray-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors group"
          >
            <div className="space-y-4">
              {/* Card Top Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm font-black text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-800/60">
                    {defect.id}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg border bg-emerald-500/20 text-emerald-300 border-emerald-500/40">
                    Resolved
                  </span>
                </div>
                <span className="text-xs font-medium text-emerald-300 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-800/40">
                  {defect.expectedCategory}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
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
                    className="font-mono text-emerald-300 hover:text-emerald-200 flex items-center space-x-1.5 bg-gray-900 px-2 py-0.5 rounded border border-gray-800 hover:border-gray-700 transition-colors"
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

              {/* Resolution Info */}
              <div className="space-y-2 text-xs">
                <div className="bg-gray-900/90 p-3 rounded-xl border border-gray-800">
                  <strong className="text-gray-300 block mb-1">Baseline State:</strong>
                  <span className="text-gray-400 font-mono">{defect.howCreated}</span>
                </div>
                <div className="bg-emerald-950/20 p-3 rounded-xl border border-emerald-900/30">
                  <strong className="text-emerald-300 block mb-1">Retest Resolution:</strong>
                  <span className="text-emerald-200">{defect.expectedFix}</span>
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
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 transition-colors"
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
