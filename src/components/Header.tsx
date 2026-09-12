import React, { useState } from 'react';
import { TabId } from '../types';
import { CollaborateMode } from './CollaborateModal';
import { Menu, X, Lock, Handshake } from 'lucide-react';

interface HeaderProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
  onOpenCollaborate: (mode?: CollaborateMode) => void;
  onOpenVipPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenCollaborate,
  onOpenVipPortal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about-zeenat', label: 'ABOUT' },
    { id: 'trade-investment', label: 'TRADE & FDI' },
    { id: 'media-press', label: 'MEDIA & PRESS' },
    { id: 'women-leadership', label: 'WOMEN LEADERSHIP' },
    { id: 'blog', label: 'INSIGHTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (tab: TabId) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#09090a]/96 backdrop-blur-xl border-b border-[#2e2617]/90 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
      <div className="h-15 sm:h-[64px] max-w-[1480px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Luxury Vector Crest & Brand Wordmark */}
        <div className="flex items-center shrink-0 min-w-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
            aria-label="Zeenat Kureshi - Executive Folio Home"
          >
            {/* Bespoke Luxury Vector Crest Monogram */}
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#1c1913] to-[#0e0d0b] border border-[#d4af37]/70 group-hover:border-[#f2ca50] transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.2)] shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="30" height="30" rx="3" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="3 2" opacity="0.6" />
                <rect x="5.5" y="5.5" width="25" height="25" rx="2" stroke="url(#goldGrad)" strokeWidth="1" />
                <path d="M18 7.5L19 9.5L21.2 9.7L19.5 11.2L20 13.3L18 12.2L16 13.3L16.5 11.2L14.8 9.7L17 9.5L18 7.5Z" fill="#f2ca50" />
                <text x="18" y="24" textAnchor="middle" fontFamily="'Bodoni Moda', serif" fontSize="13" fontWeight="700" fill="url(#goldTextGrad)" letterSpacing="0.05em">
                  ZK
                </text>
                <defs>
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f3d382" />
                    <stop offset="0.5" stopColor="#d4af37" />
                    <stop offset="1" stopColor="#8c6c21" />
                  </linearGradient>
                  <linearGradient id="goldTextGrad" x1="10" y1="14" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="0.4" stopColor="#f7e1a0" />
                    <stop offset="1" stopColor="#d4af37" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-[#f2ca50] rounded-full ring-1 ring-[#0b0b0c]"></div>
            </div>

            {/* Prestige Wordmark */}
            <div className="flex flex-col shrink-0">
              <span className="font-['Cinzel'] text-[14px] sm:text-[16px] tracking-[0.18em] text-[#f4efe6] group-hover:text-[#f2ca50] transition-colors leading-none uppercase font-semibold whitespace-nowrap">
                Zeenat Kureshi
              </span>
              <span className="font-['Montserrat'] text-[7.5px] sm:text-[8px] font-semibold text-[#d4af37] tracking-[0.26em] uppercase whitespace-nowrap pt-0.5 hidden xs:block">
                Executive Folio
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links with Glowing Gold Active Pill */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-3.5 shrink-0">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all duration-300 px-2.5 xl:px-3.5 py-1.5 font-['Montserrat'] text-[10.5px] xl:text-[11.5px] font-bold tracking-[0.14em] xl:tracking-[0.16em] uppercase whitespace-nowrap shrink-0 cursor-pointer rounded-lg ${
                  isActive
                    ? 'border border-[#f2ca50] bg-gradient-to-b from-[#211d14] to-[#12100c] text-[#f2ca50] shadow-[0_0_16px_rgba(242,202,80,0.35)]'
                    : 'text-[#d0c5af] hover:text-[#f4efe6] hover:bg-[#161410]/60 font-semibold'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs: Collaborate, VIP Portal & Executive Avatar */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Collaborate Button (Solid Gold Pill) */}
          <button
            onClick={() => onOpenCollaborate('collaborate')}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] hover:from-[#ffe088] hover:to-[#f2ca50] font-['Montserrat'] text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase transition-all duration-300 rounded-lg cursor-pointer whitespace-nowrap shadow-[0_2px_12px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_16px_rgba(242,202,80,0.4)] active:scale-95 shrink-0"
          >
            <Handshake className="w-3.5 h-3.5 text-[#1a1402]" />
            <span className="hidden xs:inline">Collaborate</span>
          </button>

          {/* VIP Access Portal Button (Outlined Gold Pill) */}
          <button
            onClick={onOpenVipPortal}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-[#171512] border border-[#d4af37]/60 hover:border-[#f2ca50] text-[#f2ca50] font-['Montserrat'] text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 rounded-lg shadow-xs hover:bg-[#201c15] active:scale-95"
          >
            <Lock className="w-3 h-3 text-[#f2ca50]" />
            <span>VIP Portal</span>
          </button>

          {/* Executive Portrait (Desktop/Laptop) */}
          <div
            onClick={() => handleNavClick('about-zeenat')}
            className="hidden lg:flex shrink-0 items-center pl-1.5 cursor-pointer"
            title="View Executive Profile"
          >
            <div className="relative">
              <img
                alt="Zeenat Kureshi Monograph"
                className="w-8 h-8 rounded-full object-cover shrink-0 aspect-square ring-2 ring-[#d4af37] hover:ring-[#f2ca50] transition-all shadow-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IHnCaef41g32aYh105zuRmheL7FwAT-AndGJukXlIE3t4L0szoFQEx8N8S3oPLqPmulPo5Oo776ceRauA2mrWttmN0hpVMmyTa0pTwujXGtjzvMUBiUugC_-F00w5D3skN_AK9FxGE5wHuyFUOuCnS9w6PXK7qD9McLtiTa4qfAhLXGi3BBaDbauoUWTQ5ZowUhwCKD9zWtPptwld2KaXrFj9Uge6Tg0vxx9dGPBUC0JjEbTLaxZ"
              />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#f2ca50] rounded-full ring-1.5 ring-[#0b0b0c] shadow-[0_0_4px_#f2ca50]"></div>
            </div>
          </div>

          {/* Mobile Menu Trigger - Always Visible & Beautifully Styled */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#161410] border border-[#d4af37]/50 hover:border-[#f2ca50] text-[#f2ca50] hover:text-white transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span className="font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-wider hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer - Unified 100% with Laptop/Desktop Navbar */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0907]/98 backdrop-blur-2xl border-b border-[#3e3422] px-4 sm:px-6 py-5 space-y-4 animate-in slide-in-from-top-3 duration-200 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
          <div className="flex flex-col space-y-1.5 pb-3 border-b border-[#2e2617]">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2.5 px-3.5 rounded-xl font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.16em] cursor-pointer transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'text-[#f2ca50] bg-gradient-to-r from-[#231e13] via-[#1a160d] to-[#12100a] border border-[#f2ca50] shadow-[0_0_16px_rgba(242,202,80,0.3)]'
                      : 'text-[#c8beaa] hover:text-[#f4efe6] hover:bg-[#161410] border border-transparent'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#f2ca50] shadow-[0_0_8px_#f2ca50] animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCollaborate('collaborate');
              }}
              className="w-full py-3 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#141002] text-center font-['Montserrat'] text-[10px] font-bold uppercase tracking-[0.16em] hover:brightness-110 transition-all rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-[#f2ca50]"
            >
              <Handshake className="w-3.5 h-3.5 text-[#141002]" />
              <span>Collaborate</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVipPortal();
              }}
              className="w-full py-3 bg-[#14120f] border border-[#d4af37]/60 text-[#f2ca50] text-center font-['Montserrat'] text-[10px] font-bold uppercase tracking-[0.16em] hover:border-[#f2ca50] hover:bg-[#1c1812] transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Lock className="w-3 h-3 text-[#f2ca50]" />
              <span>VIP Access Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
