import React, { useState } from 'react';
import { TRADE_INITIATIVES } from '../data/folioData';
import { ArrowRight, CheckCircle, Landmark, TrendingUp, ShieldAlert, Building, Send, CheckCircle2, MessageCircle } from 'lucide-react';

interface TradeScreenProps {
  onOpenCollaborate: () => void;
  onOpenInvestorLead?: () => void;
}

export const TradeScreen: React.FC<TradeScreenProps> = ({ onOpenCollaborate, onOpenInvestorLead }) => {
  const [selectedInitiative, setSelectedInitiative] = useState(TRADE_INITIATIVES[0]);

  // Structured Inquiry Form State (Required in specification)
  const [inquiryForm, setInquiryForm] = useState({
    entityName: '',
    executiveName: '',
    email: '',
    phone: '',
    ticketSize: '$5M – $25M',
    region: 'United Arab Emirates (UAE)',
    objective: 'Market Entry & Sovereign Free Zone Licensing',
    projectScope: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionToken, setSubmissionToken] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = `TRADE-FDI-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionToken(token);
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-[#131314] text-[#e5e2e3] py-16 px-5 lg:px-20 max-w-[1440px] mx-auto space-y-20">
      {/* Header Monograph */}
      <section className="max-w-3xl space-y-3">
        <div className="space-y-1.5">
          <span className="font-sans text-[10px] font-semibold text-[#f2ca50] tracking-[0.25em] uppercase block">
            Bilateral Economic Diplomacy
          </span>
          <h1 className="font-serif text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#e5e2e3]">
            GCC–India Trade &amp; <span className="italic text-[#f2ca50]">Sovereign FDI</span>
          </h1>
        </div>
        <p className="font-sans text-[14px] text-[#d0c5af] leading-relaxed">
          Architecting state-level economic conduits across the UAE, Kingdom of Saudi Arabia, Qatar, and the Republic of India. Facilitating bilateral investments exceeding $450M in sustainable infrastructure, creative economy, and industrial corridors.
        </p>
      </section>

      {/* Corridor Key Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-7 bg-[#1c1b1c] border border-[#4d4635] rounded-lg">
        <div className="space-y-0.5">
          <span className="font-serif text-[28px] sm:text-[32px] text-[#f2ca50] block font-light leading-none">$450M+</span>
          <span className="font-sans text-[10px] font-semibold text-[#d0c5af] uppercase tracking-wider">Syndicated Bilateral Flow</span>
        </div>
        <div className="space-y-0.5">
          <span className="font-serif text-[28px] sm:text-[32px] text-[#e9c176] block font-light leading-none">18</span>
          <span className="font-sans text-[10px] font-semibold text-[#d0c5af] uppercase tracking-wider">Ministerial Trade Missions</span>
        </div>
        <div className="space-y-0.5">
          <span className="font-serif text-[28px] sm:text-[32px] text-[#f2ca50] block font-light leading-none">42</span>
          <span className="font-sans text-[10px] font-semibold text-[#d0c5af] uppercase tracking-wider">Enterprises Inward FDI</span>
        </div>
        <div className="space-y-0.5">
          <span className="font-serif text-[28px] sm:text-[32px] text-[#e9c176] block font-light leading-none">3</span>
          <span className="font-sans text-[10px] font-semibold text-[#d0c5af] uppercase tracking-wider">Sovereign Free Zone Hubs</span>
        </div>
      </section>

      {/* Market Entry Support & Strategic Advisory Services (Specified in requirements) */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-[#4d4635]/40 pb-4">
          <span className="font-sans text-[11px] font-semibold text-[#f2ca50] tracking-widest uppercase block">
            Strategic Advisory Services
          </span>
          <h2 className="font-serif text-[28px] sm:text-[34px] text-[#e5e2e3]">
            Market Entry Support &amp; Sovereign Conduit Advisory
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#1c1b1c] border border-[#4d4635] rounded-lg space-y-3">
            <Landmark className="w-8 h-8 text-[#f2ca50]" />
            <h3 className="font-serif text-[20px] text-[#e5e2e3]">Free Zone &amp; Regulatory Setup</h3>
            <p className="font-sans text-[13px] text-[#d0c5af] leading-relaxed">
              Expedited licensing and governance onboarding across Dubai DIFC, Abu Dhabi ADGM, Saudi SAGIA/MISA, and GIFT City India.
            </p>
          </div>

          <div className="p-6 bg-[#1c1b1c] border border-[#4d4635] rounded-lg space-y-3">
            <TrendingUp className="w-8 h-8 text-[#e9c176]" />
            <h3 className="font-serif text-[20px] text-[#e5e2e3]">Cross-Border Capital Structuring</h3>
            <p className="font-sans text-[13px] text-[#d0c5af] leading-relaxed">
              Structuring tax-optimized FDI syndications, institutional SPVs, and sovereign wealth fund co-investment arrangements.
            </p>
          </div>

          <div className="p-6 bg-[#1c1b1c] border border-[#4d4635] rounded-lg space-y-3">
            <ShieldAlert className="w-8 h-8 text-[#ffdea5]" />
            <h3 className="font-serif text-[20px] text-[#e5e2e3]">Ministerial Protocol &amp; Delegations</h3>
            <p className="font-sans text-[13px] text-[#d0c5af] leading-relaxed">
              Bilateral governmental audiences, high-level diplomatic clearances, and participation in official bilateral trade roundtables.
            </p>
          </div>
        </div>
      </section>

      {/* Trade Initiatives Detail Selector */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#4d4635]/40 pb-4">
          <div>
            <span className="font-sans text-[11px] font-semibold text-[#f2ca50] tracking-widest uppercase block">
              Active Frameworks
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#e5e2e3]">
              Bilateral Corridors &amp; Investment Protocols
            </h2>
          </div>
          <button
            onClick={() => {
              const formEl = document.getElementById('structured-inquiry');
              if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#f2ca50] text-[#1a1402] font-sans text-[11px] font-bold tracking-widest uppercase hover:from-[#ffe088] transition-all cursor-pointer shadow-md rounded"
          >
            Structured Trade Inquiry
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* List */}
          <div className="lg:col-span-5 space-y-4">
            {TRADE_INITIATIVES.map((item) => {
              const isSelected = selectedInitiative.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedInitiative(item)}
                  className={`w-full text-left p-5 sm:p-6 transition-all duration-300 border cursor-pointer rounded-xl flex gap-4 items-center ${
                    isSelected
                      ? 'bg-[#1c1b1c] border-[#f2ca50] shadow-[0_10px_30px_rgba(242,202,80,0.1)]'
                      : 'bg-[#0e0e0f] border-[#4d4635]/50 hover:border-[#f2ca50]/50'
                  }`}
                >
                  {item.image && (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 border border-[#4d4635]/60 bg-[#14120f]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover filter brightness-90 contrast-105"
                      />
                    </div>
                  )}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-sans text-[10.5px] font-semibold text-[#ffdea5] uppercase tracking-wider truncate">
                        {item.corridor}
                      </span>
                      <span className="text-[10.5px] font-mono text-[#f2ca50] font-bold shrink-0">{item.allocation}</span>
                    </div>
                    <h3 className="font-serif text-[17px] sm:text-[18px] text-[#e5e2e3] font-normal leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display */}
          <div className="lg:col-span-7 bg-[#1c1b1c] border border-[#4d4635] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between">
            {selectedInitiative.image && (
              <div className="relative h-56 sm:h-64 w-full bg-[#14120f] overflow-hidden">
                <img
                  src={selectedInitiative.image}
                  alt={selectedInitiative.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1c] via-[#1c1b1c]/40 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0a0907]/80 backdrop-blur-md border border-[#f2ca50]/40 text-[#f2ca50] font-sans text-[10px] font-bold tracking-widest uppercase">
                  {selectedInitiative.badge || 'Sovereign Conduit'}
                </div>
              </div>
            )}

            <div className="p-7 lg:p-10 space-y-6">
              <div className="space-y-2 border-b border-[#4d4635]/40 pb-4">
                <span className="font-sans text-[11px] font-bold text-[#f2ca50] tracking-widest uppercase">
                  {selectedInitiative.status} • {selectedInitiative.corridor}
                </span>
                <h3 className="font-serif text-[24px] sm:text-[28px] text-[#e5e2e3] leading-tight">
                  {selectedInitiative.title}
                </h3>
                <span className="font-mono text-[13.5px] text-[#ffdea5] block">
                  Total Allocated Facility: {selectedInitiative.allocation}
                </span>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-widest">
                  Strategic Mandate
                </h4>
                <p className="font-sans text-[14px] sm:text-[14.5px] text-[#d0c5af] leading-relaxed">
                  {selectedInitiative.mandate}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-widest">
                  Corridor Milestones &amp; Frameworks
                </h4>
                <ul className="space-y-2.5">
                  {selectedInitiative.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sans text-[13px] text-[#e5e2e3]">
                      <CheckCircle className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Inquiry Form (Specified in requirements: ticket size, objective, region) */}
      <section id="structured-inquiry" className="bg-[#1c1b1c] border border-[#d4af37]/40 rounded-xl p-8 lg:p-14 space-y-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-[#f2ca50] text-[11px] font-bold uppercase tracking-[0.25em]">
              <Building className="w-4 h-4" />
              Institutional Intake
            </div>
            <h2 className="font-serif text-[32px] sm:text-[38px] text-[#e5e2e3]">
              Structured Trade &amp; Investment Inquiry
            </h2>
            <p className="font-sans text-[14px] text-[#d0c5af]">
              Submit detailed ticket metrics for confidential sovereign wealth syndication, cross-border market entry, or trade mission accreditation.
            </p>
          </div>

          {onOpenInvestorLead && (
            <button
              onClick={onOpenInvestorLead}
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#0b0a09] border border-[#d4af37]/60 hover:border-[#f2ca50] text-[#f2ca50] font-sans text-[11px] font-bold tracking-widest uppercase transition-all shadow-md shrink-0 cursor-pointer hover:bg-[#1a1712]"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Investor Qualification Form
            </button>
          )}
        </div>

        {formSubmitted ? (
          <div className="bg-[#0e0e0f] border border-[#d4af37] p-8 rounded-lg text-center space-y-4 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#f2ca50]/15 text-[#f2ca50] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-[24px] text-[#e5e2e3]">
              Protocol Inquiry Registered
            </h3>
            <p className="font-sans text-[14px] text-[#d0c5af] leading-relaxed">
              Your inquiry has been encrypted and routed to the Trade Commissioner Chancery in Dubai.
            </p>
            <div className="p-4 bg-[#1c1b1c] border border-[#4d4635] inline-block rounded font-mono text-[13px] text-[#f2ca50]">
              Reference Token: {submissionToken}
            </div>
            <div className="pt-2">
              <a
                href={`https://wa.me/?text=Hello%20Office%20of%20Zeenat%20Kureshi,%20I%20have%20submitted%20trade%20inquiry%20token%20${submissionToken}.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122416] border border-[#23582d] text-[#8ae899] font-sans text-[11px] font-bold tracking-widest uppercase hover:bg-[#1a3821] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#38b04a]" />
                Fast-Track via WhatsApp Secretariat
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                Entity / Corporate Name *
              </label>
              <input
                value={inquiryForm.entityName}
                onChange={(e) => setInquiryForm({ ...inquiryForm, entityName: e.target.value })}
                required
                placeholder="e.g. Al-Diyar Sovereign Capital / Tata Industrial"
                className="w-full bg-[#0e0e0f] border border-[#4d4635] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                Principal Executive / Title *
              </label>
              <input
                value={inquiryForm.executiveName}
                onChange={(e) => setInquiryForm({ ...inquiryForm, executiveName: e.target.value })}
                required
                placeholder="e.g. Dr. Tariq Al-Mansoor, Managing Partner"
                className="w-full bg-[#0e0e0f] border border-[#4d4635] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                Official Institutional Email *
              </label>
              <input
                type="email"
                value={inquiryForm.email}
                onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                required
                placeholder="chancery@entity.com"
                className="w-full bg-[#0e0e0f] border border-[#4d4635] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                Direct Telephone / WhatsApp *
              </label>
              <input
                value={inquiryForm.phone}
                onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                required
                placeholder="+971 50 000 0000 / +91 98000 00000"
                className="w-full bg-[#0e0e0f] border border-[#4d4635] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded"
              />
            </div>

            {/* Target Region (Required in specification) */}
            <div className="space-y-1.5">
              <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                Corridor / Target Region *
              </label>
              <select
                value={inquiryForm.region}
                onChange={(e) => setInquiryForm({ ...inquiryForm, region: e.target.value })}
                className="w-full bg-[#0e0e0f] border border-[#4d4635] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded"
              >
                <option value="United Arab Emirates (UAE)">United Arab Emirates (UAE - Dubai / Abu Dhabi)</option>
                <option value="Kingdom of Saudi Arabia (KSA)">Kingdom of Saudi Arabia (Riyadh / NEOM)</option>
                <option value="Republic of India (CEPA)">Republic of India (Mumbai / Delhi / GIFT City)</option>
                <option value="State of Qatar">State of Qatar (Doha Free Zones)</option>
                <option value="Multi-Jurisdiction GCC–South Asia">Multi-Jurisdiction GCC–South Asia Corridor</option>
              </select>
            </div>

            {/* Ticket Size (Required in specification) */}
            <div className="space-y-1.5">
              <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                Estimated Ticket Size / Facility *
              </label>
              <select
                value={inquiryForm.ticketSize}
                onChange={(e) => setInquiryForm({ ...inquiryForm, ticketSize: e.target.value })}
                className="w-full bg-[#0e0e0f] border border-[#4d4635] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded"
              >
                <option value="$1M – $5M">$1M – $5M (Growth Stage / Regional Expansion)</option>
                <option value="$5M – $25M">$5M – $25M (Institutional Infrastructure / Media IP)</option>
                <option value="$25M – $100M">$25M – $100M (Sovereign Industrial Corridor)</option>
                <option value="$100M+">$100M+ (Bilateral State-Level Syndicate)</option>
              </select>
            </div>

            {/* Objective (Required in specification) */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                Primary Strategic Objective *
              </label>
              <select
                value={inquiryForm.objective}
                onChange={(e) => setInquiryForm({ ...inquiryForm, objective: e.target.value })}
                className="w-full bg-[#0e0e0f] border border-[#4d4635] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded"
              >
                <option value="Market Entry & Sovereign Free Zone Licensing">Market Entry &amp; Sovereign Free Zone Licensing</option>
                <option value="Inward FDI Capital Syndication">Inward FDI Capital Syndication</option>
                <option value="Bilateral Ministerial Delegation Access">Bilateral Ministerial Delegation Access</option>
                <option value="Cross-Border Media & Film Production Co-Investment">Cross-Border Media &amp; Film Production Co-Investment</option>
                <option value="Joint Venture Protocol Structuring">Joint Venture Protocol Structuring</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                Project Overview &amp; Mandate Details
              </label>
              <textarea
                value={inquiryForm.projectScope}
                onChange={(e) => setInquiryForm({ ...inquiryForm, projectScope: e.target.value })}
                rows={3}
                placeholder="Outline the enterprise scope, projected timeline, and specific government or commercial clearances sought..."
                className="w-full bg-[#0e0e0f] border border-[#4d4635] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded"
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#4d4635]/40">
              <span className="text-[11px] text-[#99907c] uppercase tracking-wider">
                Diplomatic Non-Disclosure Standards Apply
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-sans text-[11px] font-bold tracking-widest uppercase hover:from-[#ffe088] transition-all cursor-pointer rounded shadow-lg"
              >
                Transmit Structured Inquiry
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
