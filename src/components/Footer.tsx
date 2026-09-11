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
    <footer className="w-full bg-[#0a0907] border-t border-[#2e2617] pt-12 sm:pt-16 pb-20 sm:pb-12 text-[#c8beaa]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-10 sm:mb-12">
          {/* Column 1: Sovereign Identity */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-['Bodoni_Moda'] text-[24px] sm:text-[26px] font-normal text-[#f4efe6] tracking-wide block">
                Zeenat <span className="italic gold-gradient-text">Kureshi</span>
              </span>
              <p className="font-['Montserrat'] text-[9.5px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-[#f2ca50]">
                Sovereign Chancery &amp; Cultural Statecraft
              </p>
            </div>

            <p className="font-['Montserrat'] text-[12.5px] sm:text-[13px] font-light text-[#b8ad96] max-w-sm leading-relaxed">
              Spearheading high-concept cinematic IP, architecting multi-billion dollar bilateral trade corridors between India and the GCC, and championing socioeconomic equity.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#14120e] border border-[#342b1a] rounded-md text-[#f4efe6] font-['Montserrat'] text-[10px] font-semibold tracking-widest uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]"></span>
                Film Producer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#14120e] border border-[#342b1a] rounded-md text-[#f4efe6] font-['Montserrat'] text-[10px] font-semibold tracking-widest uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]"></span>
                Trade Commissioner
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Folio */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-['Montserrat'] text-[10px] sm:text-[10.5px] font-bold text-[#f4efe6] uppercase tracking-[0.2em]">
              Navigation Folio
            </h3>
            <ul className="space-y-2 font-['Montserrat'] text-[12.5px] sm:text-[13px]">
              <li>
                <button
                  onClick={() => { onSelectTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left py-0.5"
                >
                  Executive Monograph
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('about-zeenat'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left py-0.5"
                >
                  Diplomatic Credentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('trade-investment'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left py-0.5"
                >
                  GCC–India Bilateral Trade
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('media-press'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left py-0.5"
                >
                  Cinema &amp; Press Communiqués
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('women-leadership'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left py-0.5"
                >
                  Women Leadership Mandates
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5 py-0.5"
                >
                  <span>Insights &amp; Gazettes</span>
                  <span className="text-[8.5px] px-1.5 py-0.2 bg-[#f2ca50]/15 text-[#f2ca50] rounded font-semibold">New</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left py-0.5 text-[#f2ca50]"
                >
                  Diplomatic Chancery Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional & Deliverables Suite */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-['Montserrat'] text-[10px] sm:text-[10.5px] font-bold text-[#f4efe6] uppercase tracking-[0.2em]">
              Executive Suite
            </h3>
            <ul className="space-y-2 font-['Montserrat'] text-[12.5px] sm:text-[13px]">
              {onOpenDesignMockups && (
                <li>
                  <button
                    onClick={onOpenDesignMockups}
                    className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5 py-0.5"
                  >
                    <span>3 Design Concepts</span>
                    <span className="text-[8.5px] px-1.5 py-0.5 bg-[#f2ca50]/15 text-[#f2ca50] rounded border border-[#f2ca50]/30 font-semibold">Dossier</span>
                  </button>
                </li>
              )}
              {onOpenAdminCms && (
                <li>
                  <button
                    onClick={onOpenAdminCms}
                    className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5 py-0.5"
                  >
                    <Lock className="w-3.5 h-3.5 text-[#f2ca50]" />
                    <span>CMS Admin Portal</span>
                  </button>
                </li>
              )}
              {onOpenInvestorLead && (
                <li>
                  <button
                    onClick={onOpenInvestorLead}
                    className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5 py-0.5"
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-[#e9c176]" />
                    <span>Investor Qualification</span>
                  </button>
                </li>
              )}
              {onOpenMediaKit && (
                <li>
                  <button
                    onClick={onOpenMediaKit}
                    className="hover:text-[#f2ca50] transition-colors cursor-pointer text-left flex items-center gap-1.5 py-0.5"
                  >
                    <Download className="w-3.5 h-3.5 text-[#f2ca50]" />
                    <span>Download Media Kit</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Official Gazettes & Inquiries */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3.5">
            <h3 className="font-['Montserrat'] text-[10px] sm:text-[10.5px] font-bold text-[#f4efe6] uppercase tracking-[0.2em]">
              Official Gazettes &amp; Inquiries
            </h3>
            <p className="font-['Montserrat'] text-[12px] sm:text-[12.5px] text-[#b8ad96] font-light leading-relaxed">
              Receive confidential briefings, high-table summits, and executive communiqués.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#171511] border border-[#f2ca50]/60 text-[#f2ca50] flex items-center gap-2 text-[12px] rounded-lg shadow-inner">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Executive Gazette dispatched.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center bg-[#14120e] border border-[#342b1a] rounded-lg p-1 focus-within:border-[#f2ca50] transition-all shadow-inner">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-3 py-1.5 font-['Montserrat'] text-[12px] text-[#f4efe6] placeholder:text-[#786e5c] focus:outline-none"
                  placeholder="Enter institutional email"
                  type="email"
                  required
                />
                <button
                  className="h-8 px-3 bg-gradient-to-r from-[#d4af37] to-[#f2ca50] hover:brightness-110 text-[#141002] rounded-md font-['Montserrat'] text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all shadow-xs flex items-center justify-center shrink-0"
                  type="submit"
                  aria-label="Subscribe to Gazette"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Diplomatic Transmission Channels */}
            <div className="flex items-center gap-2 pt-1 text-[#c8beaa]">
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
                    className="w-8 h-8 rounded-lg bg-[#14120e] border border-[#342b1a] hover:border-[#f2ca50] flex items-center justify-center text-[#c8beaa] hover:text-[#f2ca50] hover:bg-[#1f1b14] transition-all shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Clean, Horizontal, Responsive Alignment on all screens */}
        <div className="pt-6 sm:pt-8 border-t border-[#241f14] flex flex-col md:flex-row items-center justify-between gap-4 font-['Montserrat'] text-[11.5px] text-[#9e9482]">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3">
            <span className="flex items-center gap-1.5 text-[#d4af37] font-semibold text-[10.5px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
              256-Bit TLS Diplomatic Encryption
            </span>
            <span className="hidden sm:inline text-[#3e3422]">•</span>
            <span className="text-[11px] text-[#8a806e]">Office of Zeenat Kureshi © 2026. All Rights Reserved.</span>
          </div>

          {/* Legal Protocol Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-['Montserrat'] text-[10.5px] font-semibold tracking-[0.14em] uppercase">
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-[#a89e8b] hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Protocol &amp; Privacy
            </button>
            <span className="text-[#3e3422]">•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="text-[#a89e8b] hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Terms of Mandate
            </button>
            <span className="text-[#3e3422]">•</span>
            <button
              onClick={() => setActiveModal('accreditations')}
              className="text-[#a89e8b] hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Accreditations
            </button>
          </div>
        </div>
      </div>

      {/* Legal / Protocol Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#14120e] border border-[#3e3422] max-w-lg w-full p-6 sm:p-8 space-y-4 relative shadow-2xl rounded-xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-[#a89e8b] hover:text-[#f2ca50] text-sm uppercase tracking-widest cursor-pointer"
            >
              Close [×]
            </button>
            <h3 className="font-['Cinzel'] text-[20px] sm:text-[22px] text-[#f2ca50]">
              {activeModal === 'privacy' && 'Diplomatic Protocol & Privacy Standard'}
              {activeModal === 'terms' && 'Terms of Bilateral Mandate'}
              {activeModal === 'accreditations' && 'Diplomatic Accreditations & Registry'}
            </h3>
            <div className="font-['Montserrat'] text-[13px] text-[#c8beaa] space-y-3 leading-relaxed font-light">
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
                className="w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#f2ca50] text-[#141002] font-['Montserrat'] text-[10.5px] font-bold uppercase tracking-widest rounded-lg hover:brightness-110 transition-all cursor-pointer shadow-md"
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
