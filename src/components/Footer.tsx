import React, { useState } from 'react';
import { TabId } from '../types';
import { ArrowRight, ShieldCheck, Globe, Send, Radio, Podcast, CheckCircle2, Lock, Sliders, TrendingUp, Download } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: TabId) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenAdminCms?: () => void;
  onOpenDesignMockups?: () => void;
  onOpenInvestorLead?: () => void;
  onOpenMediaKit?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenAdminCms,
  onOpenDesignMockups,
  onOpenInvestorLead,
  onOpenMediaKit,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="w-full bg-[#0e0e0f] border-t border-[#4d4635]/30 pt-16 pb-12 text-[#d0c5af]">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* Column 1: Sovereign Identity */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-[22px] font-medium text-[#e5e2e3] uppercase tracking-wider block">
              Zeenat Kureshi
            </span>
            <p className="font-sans text-[14px] font-light text-[#d0c5af] max-w-md leading-relaxed">
              Executive sovereign folio for global cinematic production, bilateral GCC–India trade corridors, and transformative socio-economic leadership.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1c1b1c] border border-[#4d4635]/40 text-[#e5e2e3] font-sans text-[11px] font-semibold tracking-widest uppercase">
                <span className="material-symbols-outlined text-sm text-[#f2ca50]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                Film Producer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1c1b1c] border border-[#4d4635]/40 text-[#e5e2e3] font-sans text-[11px] font-semibold tracking-widest uppercase">
                <span className="material-symbols-outlined text-sm text-[#f2ca50]">gavel</span>
                Trade Commissioner
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Folio */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-sans text-[11px] font-semibold text-[#e5e2e3] uppercase tracking-[0.18em]">
              Navigation Folio
            </h3>
            <ul className="space-y-2.5 font-sans text-[13px]">
              <li>
                <button
                  onClick={() => { onSelectTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Executive Monograph
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('about-zeenat'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Diplomatic Credentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('trade-investment'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  GCC–India Economic Bilateral
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('media-press'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Dispatches &amp; Press Communiqués
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('women-leadership'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Women Leadership Mandates
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Insights &amp; Monographs</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-[#f2ca50]/15 text-[#f2ca50] rounded">New</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left"
                >
                  Diplomatic Chancery Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional & Deliverables Suite */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-sans text-[11px] font-semibold text-[#e5e2e3] uppercase tracking-[0.18em]">
              Executive Suite
            </h3>
            <ul className="space-y-2.5 font-sans text-[13px]">
              {onOpenDesignMockups && (
                <li>
                  <button
                    onClick={onOpenDesignMockups}
                    className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span>3 Design Concepts</span>
                    <span className="text-[9px] px-1.5 py-0.5 bg-[#f2ca50]/15 text-[#f2ca50] rounded border border-[#f2ca50]/30">Dossier</span>
                  </button>
                </li>
              )}
              {onOpenAdminCms && (
                <li>
                  <button
                    onClick={onOpenAdminCms}
                    className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <Lock className="w-3 h-3 text-[#f2ca50]" />
                    <span>CMS Admin Portal</span>
                  </button>
                </li>
              )}
              {onOpenInvestorLead && (
                <li>
                  <button
                    onClick={onOpenInvestorLead}
                    className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <TrendingUp className="w-3 h-3 text-[#f2ca50]" />
                    <span>Investor Qualification</span>
                  </button>
                </li>
              )}
              {onOpenMediaKit && (
                <li>
                  <button
                    onClick={onOpenMediaKit}
                    className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <Download className="w-3 h-3 text-[#f2ca50]" />
                    <span>Download Media Kit</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Official Gazettes & Inquiries */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-[11px] font-semibold text-[#e5e2e3] uppercase tracking-[0.18em]">
              Official Gazettes &amp; Inquiries
            </h3>
            <p className="font-sans text-[13px] text-[#d0c5af] leading-relaxed">
              Receive confidential briefings, high-table summits, and executive communiqués.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#1c1b1c] border border-[#f2ca50]/50 text-[#f2ca50] flex items-center gap-2 text-[13px]">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Executive Gazette dispatched. Email authenticated.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-stretch border-b border-[#4d4635] focus-within:border-[#f2ca50] transition-colors">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent py-3 text-[13px] text-[#e5e2e3] placeholder:text-[#99907c] focus:outline-none"
                  placeholder="Enter institutional or diplomatic email"
                  type="email"
                  required
                />
                <button
                  className="px-4 py-3 text-[#f2ca50] hover:text-[#ffe088] uppercase font-sans text-[11px] font-semibold tracking-wider cursor-pointer"
                  type="submit"
                  aria-label="Subscribe to Gazette"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-4 pt-2 text-[#d0c5af]">
              <a href="#globe" title="Global Chancery" className="hover:text-[#f2ca50] transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#telegram" title="Encrypted Telegram" className="hover:text-[#f2ca50] transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#announcements" title="Diplomatic Announcements" className="hover:text-[#f2ca50] transition-colors">
                <Radio className="w-5 h-5" />
              </a>
              <a href="#podcasts" title="Diplomatic Broadcasts" className="hover:text-[#f2ca50] transition-colors">
                <Podcast className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4d4635]/20 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[13px]">
          <div className="flex flex-wrap items-center gap-3 text-[#d0c5af]">
            <span className="flex items-center gap-1.5 text-[#d0c5af]">
              <ShieldCheck className="w-4 h-4 text-[#f2ca50]" />
              256-Bit TLS Diplomatic Encryption Verified
            </span>
            <span>•</span>
            <span>Office of Zeenat Kureshi © 2026. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Protocol &amp; Privacy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Terms of Mandate
            </button>
            <button
              onClick={() => setActiveModal('accreditations')}
              className="hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Accreditations
            </button>
          </div>
        </div>
      </div>

      {/* Legal / Protocol Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1c1b1c] border border-[#4d4635] max-w-lg w-full p-6 space-y-4 relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-[#d0c5af] hover:text-[#f2ca50] text-sm uppercase tracking-widest cursor-pointer"
            >
              Close [×]
            </button>
            <h3 className="font-serif text-[22px] text-[#f2ca50] uppercase">
              {activeModal === 'privacy' && 'Diplomatic Protocol & Privacy Standard'}
              {activeModal === 'terms' && 'Terms of Bilateral Mandate'}
              {activeModal === 'accreditations' && 'Diplomatic Accreditations & Registry'}
            </h3>
            <div className="text-[14px] text-[#d0c5af] space-y-3 leading-relaxed">
              {activeModal === 'privacy' && (
                <p>
                  All transmissions handled by the Executive Protocol Desk adhere to international diplomatic secrecy standards, 256-bit TLS hardware-level encryption, and non-disclosure bilateral covenants. Ministerial data is never brokered to non-sovereign parties.
                </p>
              )}
              {activeModal === 'terms' && (
                <p>
                  Consultations, trade mandates, and co-production commitments are subject to ministerial ratification under GCC-India trade framework pacts and relevant national film commission co-production covenants.
                </p>
              )}
              {activeModal === 'accreditations' && (
                <p>
                  Apostille authenticated by the Office of the Trade Commissioner, registered with regional trade registries in Dubai (DIFC / Dubai Economy &amp; Tourism), New Delhi, and London Mayfair.
                </p>
              )}
            </div>
            <div className="pt-2">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 bg-[#f2ca50] text-[#3c2f00] font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-[#ffe088] transition-colors cursor-pointer"
              >
                Acknowledge &amp; Return
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
