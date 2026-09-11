/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabId, HomepageMockupId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingDirectDesk } from './components/FloatingDirectDesk';
import { VipPortalModal } from './components/VipPortalModal';
import { CollaborateModal, CollaborateMode } from './components/CollaborateModal';
import { DesignMockupsModal } from './components/DesignMockupsModal';
import { AdminCmsModal } from './components/AdminCmsModal';
import { InvestorLeadModal } from './components/InvestorLeadModal';
import { MediaKitModal } from './components/MediaKitModal';
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { TradeScreen } from './screens/TradeScreen';
import { MediaPressScreen } from './screens/MediaPressScreen';
import { WomenLeadershipScreen } from './screens/WomenLeadershipScreen';
import { BlogScreen } from './screens/BlogScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [isCollaborateOpen, setIsCollaborateOpen] = useState(false);
  const [collaborateMode, setCollaborateMode] = useState<CollaborateMode>('collaborate');
  const [isVipPortalOpen, setIsVipPortalOpen] = useState(false);
  const [isDesignMockupsOpen, setIsDesignMockupsOpen] = useState(false);
  const [isAdminCmsOpen, setIsAdminCmsOpen] = useState(false);
  const [isInvestorLeadOpen, setIsInvestorLeadOpen] = useState(false);
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);
  const [activeMockup, setActiveMockup] = useState<HomepageMockupId>('sovereign-classic');

  // Synchronize browser history / URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about-zeenat', 'trade-investment', 'media-press', 'women-leadership', 'blog', 'contact'].includes(hash)) {
        setActiveTab(hash as TabId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCollaborate = (mode: CollaborateMode = 'collaborate') => {
    setCollaborateMode(mode);
    setIsCollaborateOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#131314] text-[#e5e2e3] flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#131314]">
      {/* Fixed Sticky Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenCollaborate={(mode) => handleOpenCollaborate(mode || 'collaborate')}
        onOpenVipPortal={() => setIsVipPortalOpen(true)}
      />

      {/* Main View Container - Zero Gap with Fixed Header */}
      <main className="w-full pt-14 sm:pt-[64px] flex-1 flex flex-col">
        {activeTab === 'home' && (
          <HomeScreen
            onSelectTab={handleSelectTab}
            onOpenCollaborate={handleOpenCollaborate}
            onOpenVipPortal={() => setIsVipPortalOpen(true)}
          />
        )}
        {activeTab === 'about-zeenat' && (
          <AboutScreen onOpenCollaborate={() => handleOpenCollaborate('collaborate')} />
        )}
        {activeTab === 'trade-investment' && (
          <TradeScreen
            onOpenCollaborate={() => handleOpenCollaborate('investment')}
            onOpenInvestorLead={() => setIsInvestorLeadOpen(true)}
          />
        )}
        {activeTab === 'media-press' && (
          <MediaPressScreen
            onOpenMediaKit={() => setIsMediaKitOpen(true)}
          />
        )}
        {activeTab === 'women-leadership' && (
          <WomenLeadershipScreen onOpenCollaborate={() => handleOpenCollaborate('collaborate')} />
        )}
        {activeTab === 'blog' && (
          <BlogScreen
            onOpenCollaborate={() => handleOpenCollaborate('collaborate')}
          />
        )}
        {activeTab === 'contact' && (
          <ContactScreen />
        )}
      </main>

      {/* Floating Direct Desk / WhatsApp Hotline */}
      <FloatingDirectDesk />

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenAdminCms={() => setIsAdminCmsOpen(true)}
        onOpenDesignMockups={() => setIsDesignMockupsOpen(true)}
        onOpenInvestorLead={() => setIsInvestorLeadOpen(true)}
        onOpenMediaKit={() => setIsMediaKitOpen(true)}
      />

      {/* High-Level Institutional Modals */}
      <VipPortalModal
        isOpen={isVipPortalOpen}
        onClose={() => setIsVipPortalOpen(false)}
      />

      <CollaborateModal
        isOpen={isCollaborateOpen}
        initialMode={collaborateMode}
        onClose={() => setIsCollaborateOpen(false)}
      />

      <DesignMockupsModal
        isOpen={isDesignMockupsOpen}
        onClose={() => setIsDesignMockupsOpen(false)}
        activeMockup={activeMockup}
        onSelectMockup={(id) => {
          setActiveMockup(id);
          setActiveTab('home');
        }}
      />

      <AdminCmsModal
        isOpen={isAdminCmsOpen}
        onClose={() => setIsAdminCmsOpen(false)}
      />

      <InvestorLeadModal
        isOpen={isInvestorLeadOpen}
        onClose={() => setIsInvestorLeadOpen(false)}
      />

      <MediaKitModal
        isOpen={isMediaKitOpen}
        onClose={() => setIsMediaKitOpen(false)}
      />
    </div>
  );
}
