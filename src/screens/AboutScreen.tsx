import React, { useState, useEffect } from 'react';
import { TIMELINE_EVENTS } from '../data/folioData';
import { ShieldCheck, Award, Globe, Building2, BookOpen, Camera, Sparkles, X, ChevronRight, ChevronLeft, ArrowRight, ZoomIn } from 'lucide-react';

interface AboutScreenProps {
  onOpenCollaborate: () => void;
}

interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  fallbackImage?: string;
  caption: string;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenCollaborate }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const GALLERY_PHOTOS: GalleryPhoto[] = [
    {
      id: 'g-1',
      title: 'Diplomatic Chancery Monograph',
      category: 'Official Portrait',
      location: 'Dubai International Financial Centre',
      year: '2025',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6IHnCaef41g32aYh105zuRmheL7FwAT-AndGJukXlIE3t4L0szoFQEx8N8S3oPLqPmulPo5Oo776ceRauA2mrWttmN0hpVMmyTa0pTwujXGtjzvMUBiUugC_-F00w5D3skN_AK9FxGE5wHuyFUOuCnS9w6PXK7qD9McLtiTa4qfAhLXGi3BBaDbauoUWTQ5ZowUhwCKD9zWtPptwld2KaXrFj9Uge6Tg0vxx9dGPBUC0JjEbTLaxZ',
      fallbackImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      caption: 'Executive diplomatic monograph portrait captured at the DIFC Chancery suites, Dubai.',
    },
    {
      id: 'g-2',
      title: 'Cannes Film Festival Marché Gala',
      category: 'Cinema & Arts',
      location: 'Cannes, France',
      year: 'May 2024',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      caption: 'Attending the official Cannes Marché du Film co-production forum representing cross-border cinematic productions.',
    },
    {
      id: 'g-3',
      title: 'GCC–India Bilateral Trade Conclave',
      category: 'Economic Diplomacy',
      location: 'Riyadh & Abu Dhabi',
      year: '2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk-A1BW_YoML--rfFvFNcltAOGQyp4-5HIEiw1V0gGpj4lzVQk089KZ075XapcA_FVvk5z4LmlldNc1Und3CujG-TCMCaOKmoUAxaHzvER8oDTS6H03s5Y0uBZBjScNO5MnVZbb2Tsj_kOccrKEeib49AgjqZ7yuJrau0owHotNOZJEfCPEDNxSXkkwGVhgijPE8w-_jg3jvZEKt8-oJ7o5DADOZLeZgWPM888IEv9ZKHAIrbX8zdG',
      fallbackImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      caption: 'Leading the trade commissioner delegation for bilateral CEPA investment frameworks.',
    },
    {
      id: 'g-4',
      title: 'National Presidency Civic Assembly',
      category: 'Civic Governance',
      location: 'New Delhi, India',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80',
      caption: 'Addressing over 3,500 delegates at the All India Jamiatul Quresh Women Cell National Assembly.',
    },
    {
      id: 'g-5',
      title: 'Venice Biennale Screen Delegations',
      category: 'International Arts',
      location: 'Venice, Italy',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      caption: 'Participating in high-level producer treaty roundtables during the Venice International Film Festival.',
    },
    {
      id: 'g-6',
      title: 'Sovereign Capital & CEPA Dialogue',
      category: 'Trade & Investment',
      location: 'Dubai & Mumbai',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      caption: 'Facilitating sovereign investment roundtables linking Gulf private wealth with high-growth Indian infrastructure.',
    },
  ];

  // Handle keyboard navigation for active lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, GALLERY_PHOTOS.length]);

  const activePhoto = activePhotoIndex !== null ? GALLERY_PHOTOS[activePhotoIndex] : null;

  return (
    <div className="w-full bg-[#131314] text-[#e5e2e3] py-16 px-5 lg:px-20 max-w-[1440px] mx-auto space-y-24">
      {/* Editorial Monograph Header */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1.5">
            <span className="font-['Montserrat'] text-[10px] font-semibold text-[#f2ca50] tracking-[0.25em] uppercase block">
              Diplomatic Biography &amp; Lineage
            </span>
            <h1 className="font-['Cinzel'] text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
              Architect of <span className="italic font-serif text-[#f2ca50]">Sovereign Corridors</span>
            </h1>
          </div>

          <p className="font-serif text-[16px] sm:text-[18px] text-[#e9c176] font-light leading-relaxed border-l-2 border-[#d4af37] pl-3.5">
            Bridging institutional diplomacy with global cinematic expression, Zeenat Kureshi occupies a distinctive vantage point at the crossroads of GCC-South Asia commerce and cultural statecraft.
          </p>

          <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] font-light leading-relaxed">
            Serving as GCC–India Trade Commissioner, she has been instrumental in orchestrating landmark bilateral trade dialogues, sovereign inward FDI conduits, and regulatory harmonization across UAE, Saudi Arabia, Qatar, and India. Concurrently, as an internationally recognized film producer, her screen works marry evocative human narratives with rigorous international co-production treaties.
          </p>

          <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] font-light leading-relaxed">
            In her civic mandate as National President of the Women Leadership Council, she has mobilized over 120,000 women across the subcontinent and Middle East through targeted enterprise grants, board parity advocacy, and executive governance fellowships.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={onOpenCollaborate}
              className="px-6 py-3 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-[0.18em] uppercase hover:brightness-110 transition-all cursor-pointer shadow-md rounded"
            >
              Request Diplomatic Audience
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-[#4d4635] bg-[#1c1b1c] group">
            <img
              alt="Zeenat Kureshi Monograph Portrait"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IHnCaef41g32aYh105zuRmheL7FwAT-AndGJukXlIE3t4L0szoFQEx8N8S3oPLqPmulPo5Oo776ceRauA2mrWttmN0hpVMmyTa0pTwujXGtjzvMUBiUugC_-F00w5D3skN_AK9FxGE5wHuyFUOuCnS9w6PXK7qD9McLtiTa4qfAhLXGi3BBaDbauoUWTQ5ZowUhwCKD9zWtPptwld2KaXrFj9Uge6Tg0vxx9dGPBUC0JjEbTLaxZ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0e0e0f]/90 backdrop-blur-md border border-[#4d4635]/60 rounded-lg">
              <span className="font-sans text-[11px] font-bold text-[#f2ca50] tracking-widest uppercase block">
                Official Credential Holder
              </span>
              <span className="font-sans text-[13px] text-[#e5e2e3]">
                Office of the Trade Commissioner • GCC Corridor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomatic Accreditations & Honours */}
      <section className="bg-[#1c1b1c] p-8 lg:p-14 border border-[#4d4635]/40 rounded-xl space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="font-sans text-[11px] font-semibold text-[#f2ca50] tracking-[0.25em] uppercase">
            Institutional Standing
          </span>
          <h2 className="font-serif text-[32px] sm:text-[38px] text-[#e5e2e3]">
            Sovereign Accreditations &amp; Decor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0e0e0f] border border-[#4d4635] space-y-3 rounded">
            <Award className="w-8 h-8 text-[#f2ca50]" />
            <h4 className="font-serif text-[18px] text-[#e5e2e3]">Bilateral Economic Envoy</h4>
            <p className="font-sans text-[13px] text-[#d0c5af] leading-relaxed">
              Certified by the Joint Trade Council for pioneering the UAE-India Comprehensive Economic Partnership treaty conduits.
            </p>
          </div>

          <div className="p-6 bg-[#0e0e0f] border border-[#4d4635] space-y-3 rounded">
            <Globe className="w-8 h-8 text-[#e9c176]" />
            <h4 className="font-serif text-[18px] text-[#e5e2e3]">Transnational Film Producer</h4>
            <p className="font-sans text-[13px] text-[#d0c5af] leading-relaxed">
              Accredited member of the International Producers Association, with selections across Cannes Marché, Venice, and Toronto.
            </p>
          </div>

          <div className="p-6 bg-[#0e0e0f] border border-[#4d4635] space-y-3 rounded">
            <ShieldCheck className="w-8 h-8 text-[#ffdea5]" />
            <h4 className="font-serif text-[18px] text-[#e5e2e3]">National Council President</h4>
            <p className="font-sans text-[13px] text-[#d0c5af] leading-relaxed">
              Leading the statutory civic mandate for grassroots empowerment, enterprise grants, and boardroom diversity governance.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Photo Gallery Section (Explicitly requested in requirements) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#382f1e]/80 pb-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[10.5px] font-bold uppercase tracking-[0.25em]">
              <Camera className="w-4 h-4 text-[#f2ca50]" />
              Accredited Photography &amp; Archives
            </div>
            <h2 className="font-['Cinzel'] text-[28px] sm:text-[34px] lg:text-[38px] text-[#f4efe6] font-normal leading-tight">
              Diplomatic &amp; Executive Gallery
            </h2>
          </div>
          <p className="font-['Montserrat'] text-[12.5px] sm:text-[13px] text-[#c8beaa] max-w-md font-light leading-relaxed">
            Curated visual monographs spanning bilateral chancery dialogues, international film market delegations, and civic presidencies.
          </p>
        </div>

        {/* Consistent, Premium 4:5 Aspect Ratio Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative aspect-[4/5] bg-[#14120f] rounded-xl overflow-hidden border border-[#382f1e]/70 hover:border-[#d4af37] transition-all duration-500 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.14)] flex flex-col justify-end"
            >
              {/* High-Resolution Gallery Image with Smooth Zoom */}
              <img
                src={photo.image}
                alt={photo.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (photo.fallbackImage) {
                    (e.currentTarget as HTMLImageElement).src = photo.fallbackImage;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.9] group-hover:brightness-100 contrast-105"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/45 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none"></div>

              {/* Corner Notches */}
              <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#d4af37]/40 pointer-events-none group-hover:border-[#f2ca50] transition-colors"></div>
              <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#d4af37]/40 pointer-events-none group-hover:border-[#f2ca50] transition-colors"></div>

              {/* Category Badge & Index Indicator */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0a0907]/85 backdrop-blur-md border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]"></span>
                  <span>{photo.category}</span>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#0a0907]/85 backdrop-blur-md border border-[#d4af37]/40 flex items-center justify-center text-[#e9c176] text-[10px] font-mono shadow-sm group-hover:scale-110 group-hover:border-[#f2ca50] group-hover:text-[#f2ca50] transition-all">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Card Content with Smooth Lift */}
              <div className="relative z-10 p-5 space-y-2 group-hover:-translate-y-0.5 transition-transform duration-300">
                <span className="text-[9.5px] font-mono text-[#d4af37] tracking-[0.16em] uppercase block">
                  {photo.location} &bull; {photo.year}
                </span>
                <h4 className="font-['Cinzel'] text-[17px] sm:text-[18px] text-[#f4efe6] group-hover:text-[#f2ca50] transition-colors leading-snug font-normal">
                  {photo.title}
                </h4>
                <p className="text-[11.5px] text-[#c8beaa]/90 line-clamp-2 leading-relaxed font-['Montserrat'] font-light">
                  {photo.caption}
                </p>
                <div className="pt-1.5 flex items-center justify-between border-t border-[#382f1e]/60 text-[10px] font-['Montserrat'] text-[#f2ca50] tracking-wider uppercase font-semibold">
                  <span>View Archival Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox / Modal for Expanded View */}
        {activePhoto && activePhotoIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
            onClick={() => setActivePhotoIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#14120f] border border-[#d4af37]/70 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-5 sm:p-7 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-[#382f1e]/70 pb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-widest">
                    {activePhoto.category}
                  </span>
                  <span className="text-[10.5px] font-mono text-[#d4af37] tracking-wider uppercase hidden sm:inline-block">
                    {activePhoto.location} &bull; {activePhoto.year}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10.5px] font-mono text-[#a89d88] tracking-widest">
                    {String(activePhotoIndex + 1).padStart(2, '0')} / {String(GALLERY_PHOTOS.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => setActivePhotoIndex(null)}
                    className="p-1.5 text-[#c8beaa] hover:text-[#f2ca50] bg-[#1a1712] hover:bg-[#252016] border border-[#3e3422] rounded-full cursor-pointer transition-colors"
                    aria-label="Close photo preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Photo Showcase with Navigation Chevrons */}
              <div className="relative max-h-[62vh] min-h-[280px] overflow-hidden rounded-xl bg-[#090807] flex items-center justify-center border border-[#382f1e]">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (activePhoto.fallbackImage) {
                      (e.currentTarget as HTMLImageElement).src = activePhoto.fallbackImage;
                    }
                  }}
                  className="max-h-[62vh] w-auto max-w-full object-contain rounded"
                />

                {/* Left Navigation Chevron */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0));
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a0907]/80 hover:bg-[#1a1712] text-[#f2ca50] border border-[#d4af37]/50 hover:border-[#f2ca50] transition-all cursor-pointer shadow-lg active:scale-95"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Navigation Chevron */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0));
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a0907]/80 hover:bg-[#1a1712] text-[#f2ca50] border border-[#d4af37]/50 hover:border-[#f2ca50] transition-all cursor-pointer shadow-lg active:scale-95"
                  aria-label="Next photograph"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Description & Caption Footer */}
              <div className="space-y-2 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-['Cinzel'] text-[20px] sm:text-[22px] text-[#f4efe6]">
                    {activePhoto.title}
                  </h3>
                  <span className="sm:hidden text-[10px] font-mono text-[#d4af37] tracking-wider uppercase">
                    {activePhoto.location} &bull; {activePhoto.year}
                  </span>
                </div>
                <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] font-light leading-relaxed">
                  {activePhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Diplomatic Timeline */}
      <section className="space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="font-sans text-[11px] font-semibold text-[#f2ca50] tracking-[0.25em] uppercase">
            Historical Trajectory
          </span>
          <h2 className="font-serif text-[32px] sm:text-[38px] text-[#e5e2e3]">
            Timeline of Mandates &amp; Appointments
          </h2>
        </div>

        <div className="relative border-l border-[#4d4635] ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#131314] border-2 border-[#f2ca50] group-hover:bg-[#f2ca50] transition-colors"></div>
              <div className="space-y-1.5">
                <span className="font-sans text-[11px] font-bold text-[#f2ca50] tracking-widest uppercase">
                  {event.year}
                </span>
                <h3 className="font-serif text-[22px] text-[#e5e2e3]">
                  {event.title}
                </h3>
                <span className="font-sans text-[13px] text-[#e9c176] block">
                  {event.entity}
                </span>
                <p className="font-sans text-[14px] text-[#d0c5af] max-w-2xl leading-relaxed pt-1">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
