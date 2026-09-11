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
    <footer className="w-full bg-[#0e0e0f] border-t border-[#4d4635]/30 pt-16 pb-32 sm:pb-16 text-[#d0c5af]">
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
              <div className="p-3.5 bg-[#1a1712] border border-[#f2ca50]/60 text-[#f2ca50] flex items-center gap-2.5 text-[12.5px] rounded-lg shadow-inner">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Executive Gazette dispatched. Email authenticated.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center bg-[#14120f] border border-[#3e3422] rounded-lg p-1 focus-within:border-[#f2ca50] transition-colors shadow-inner">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 text-[12.5px] text-[#e5e2e3] placeholder:text-[#8c826e] focus:outline-none"
                  placeholder="Enter institutional or diplomatic email"
                  type="email"
                  required
                />
                <button
                  className="px-3.5 py-2 bg-gradient-to-r from-[#d4af37] to-[#f2ca50] hover:from-[#ffe088] text-[#141002] rounded-md font-['Montserrat'] text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all shadow-xs flex items-center justify-center shrink-0"
                  type="submit"
                  aria-label="Subscribe to Gazette"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Diplomatic Transmission Channels */}
            <div className="flex items-center gap-2.5 pt-2 text-[#d0c5af]">
              {[
                { icon: Globe, label: 'Global Chancery', href: '#globe' },
                { icon: Send, label: 'Encrypted Telegram', href: '#telegram' },
                { icon: Radio, label: 'Diplomatic Announcements', href: '#announcements' },
                { icon: Podcast, label: 'Diplomatic Broadcasts', href: '#podcasts' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    title={item.label}
                    className="w-8 h-8 rounded-lg bg-[#161410] border border-[#362e1d] hover:border-[#f2ca50] flex items-center justify-center text-[#c8beaa] hover:text-[#f2ca50] hover:bg-[#201c15] transition-all shadow-xs"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Flawless Responsive Alignment on all screens */}
        <div className="pt-8 border-t border-[#3e3422]/60 flex flex-col md:flex-row items-center justify-between gap-5 font-['Montserrat'] text-[12px] pb-6 sm:pb-0">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3 text-[#b5aa96]">
            <span className="flex items-center gap-1.5 text-[#d4af37] font-semibold text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#f2ca50] shrink-0" />
              256-Bit TLS Diplomatic Encryption
            </span>
            <span className="hidden sm:inline text-[#4d4635]">•</span>
            <span className="text-[11.5px] text-[#9e9482]">Office of Zeenat Kureshi © 2026. All Rights Reserved.</span>
          </div>

          {/* Legal Protocol Links - Symmetrical, never awkward wrapping */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-['Montserrat'] text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase">
            <button
              onClick={() => setActiveModal('privacy')}
              className="px-2.5 py-1 rounded bg-[#161410] sm:bg-transparent border border-[#3e3422] sm:border-transparent text-[#c8beaa] hover:text-[#f2ca50] transition-colors cursor-pointer whitespace-nowrap"
            >
              Protocol &amp; Privacy
            </button>
            <span className="hidden sm:inline text-[#3e3422]">•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="px-2.5 py-1 rounded bg-[#161410] sm:bg-transparent border border-[#3e3422] sm:border-transparent text-[#c8beaa] hover:text-[#f2ca50] transition-colors cursor-pointer whitespace-nowrap"
            >
              Terms of Mandate
            </button>
            <span className="hidden sm:inline text-[#3e3422]">•</span>
            <button
              onClick={() => setActiveModal('accreditations')}
              className="px-2.5 py-1 rounded bg-[#161410] sm:bg-transparent border border-[#3e3422] sm:border-transparent text-[#c8beaa] hover:text-[#f2ca50] transition-colors cursor-pointer whitespace-nowrap"
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
