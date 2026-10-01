import React, { useState } from 'react';
import { CreditCard, Download, CheckCircle2 } from 'lucide-react';

export const ProfileView: React.FC = () => {
  const [fullName, setFullName] = useState('Alex Taylor');
  const [email, setEmail] = useState('alex.taylor@enterprise.io');
  const [company, setCompany] = useState('Apex Technologies');
  const [address, setAddress] = useState('100 Innovation Way, Suite 400');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);

  const isFormValid = fullName.trim() !== '' && email.trim() !== '' && address.trim() !== '';

  // Restored normal validation logic (Fixes old DEF-008)
  const isSaveButtonDisabled = !isFormValid;

  const handleDownloadInvoice = () => {
    // Restored clean safe handler (Fixes old DEF-009)
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  const handleSaveBilling = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Profile Header */}
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-purple-600/30">
            AT
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-white">Alex Taylor</h1>
            <p className="text-xs text-gray-400">Enterprise Account Member • ID #USR-88492</p>
          </div>
        </div>

        <button
          id="download-invoice-btn"
          onClick={handleDownloadInvoice}
          aria-label="Download PDF Invoice"
          className="px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/40 text-xs font-bold flex items-center space-x-2 transition-colors"
        >
          <Download className="w-4 h-4 text-indigo-400" />
          <span>Download PDF Invoice</span>
        </button>
      </div>

      {downloadNotice && (
        <div className="p-4 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-xs text-indigo-300 flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>PDF Invoice generation initiated for account #USR-88492.</span>
        </div>
      )}

      {/* Billing Information Form */}
      <div className="glass-panel p-8 rounded-2xl border border-gray-800 space-y-6">
        <div className="border-b border-gray-800 pb-4">
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-indigo-400" />
            <span>Billing & Account Details</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Update billing name and primary address settings.
          </p>
        </div>

        <form onSubmit={handleSaveBilling} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="billing-full-name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                id="billing-full-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-100 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="billing-email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                id="billing-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-100 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="billing-company" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Organization / Company
              </label>
              <input
                id="billing-company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-100 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="billing-address" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Billing Address *
              </label>
              <input
                id="billing-address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-100 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>

          {savedSuccess && (
            <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Billing details successfully updated!</span>
            </div>
          )}

          <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
            <span className="text-xs text-gray-400">
              Form Status: <strong className={isFormValid ? "text-emerald-400" : "text-amber-400"}>{isFormValid ? "Complete & Valid" : "Incomplete"}</strong>
            </span>

            <button
              id="save-billing-btn"
              type="submit"
              disabled={isSaveButtonDisabled}
              aria-label="Save Billing Details"
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isSaveButtonDisabled
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
              }`}
            >
              <span>Save Billing Details</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
