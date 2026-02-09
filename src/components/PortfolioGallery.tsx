import { useState } from 'react';
// Interior Images
import livingView02 from '../assets/LIVINGVIEW02.jpg';
import livingView01 from '../assets/LIVING VIEW 01.jpg';
import kitchen01 from '../assets/KITCHEN 01.jpg';
import kitchen02 from '../assets/KITCHEN 02.jpg';
import kitchen03 from '../assets/KITCHEN 03.jpg';
import bathroom from '../assets/BATHROOM.jpg';
import pantry from '../assets/PANTRY.jpg';
import stairsView01 from '../assets/STAIRS VIEW 01.jpg';
import stairsView02 from '../assets/STAIRS VIEW 02.jpg';
import lifestyle from '../assets/LIFESTYLE 01-60.jpg';
import backplate from '../assets/BACKPLATE.jpg';
import backplate1 from '../assets/BACKPLATE1.jpg';
import backplate2 from '../assets/BACKPLATE2.jpg';
import cosmos2 from '../assets/cosmos2.png';
// Exterior Images
import ext01 from '../assets/01.jpg';
import ext02 from '../assets/02.jpg';
import ext03 from '../assets/03.jpg';
import ext04 from '../assets/04.jpg';
import ext4 from '../assets/4.jpg';
import ext10001 from '../assets/10001.jpg';
import vanDuyne from '../assets/VAN DUYNE.jpg';
// Furniture Images
import furnitureV1 from '../assets/V1.jpg';
import furnitureV2 from '../assets/V2.jpg';

type PortfolioItem = {
  id: number;
  image: string;
  title: string;
  category: 'Interior' | 'Exterior' | 'Furniture' | 'All';
  description?: string;
};

const portfolioItems: PortfolioItem[] = [
  // Interior Items
  {
    id: 1,
    image: livingView02,
    title: 'Living Room View',
    category: 'Interior',
    description: 'Contemporary living space with elegant design',
  },
  {
    id: 2,
    image: livingView01,
    title: 'Modern Living Space',
    category: 'Interior',
    description: 'Spacious living area with natural lighting',
  },
  {
    id: 3,
    image: kitchen01,
    title: 'Kitchen Design 01',
    category: 'Interior',
    description: 'Modern kitchen with premium finishes',
  },
  {
    id: 4,
    image: kitchen02,
    title: 'Kitchen Design 02',
    category: 'Interior',
    description: 'Elegant kitchen layout with island',
  },
  {
    id: 5,
    image: kitchen03,
    title: 'Kitchen Design 03',
    category: 'Interior',
    description: 'Contemporary kitchen design',
  },
  {
    id: 6,
    image: bathroom,
    title: 'Luxury Bathroom',
    category: 'Interior',
    description: 'Premium bathroom design with modern fixtures',
  },
  {
    id: 7,
    image: pantry,
    title: 'Pantry Design',
    category: 'Interior',
    description: 'Functional and stylish pantry space',
  },
  {
    id: 8,
    image: stairsView01,
    title: 'Staircase View 01',
    category: 'Interior',
    description: 'Elegant staircase design',
  },
  {
    id: 9,
    image: stairsView02,
    title: 'Staircase View 02',
    category: 'Interior',
    description: 'Modern staircase visualization',
  },
  {
    id: 10,
    image: lifestyle,
    title: 'Lifestyle View',
    category: 'Furniture',
    description: 'Lifestyle interior rendering',
  },
  {
    id: 11,
    image: backplate,
    title: 'Interior Backplate',
    category: 'Furniture',
    description: 'Interior design backplate',
  },
  {
    id: 12,
    image: backplate1,
    title: 'Interior Backplate 1',
    category: 'Interior',
    description: 'Interior design visualization',
  },
  {
    id: 13,
    image: backplate2,
    title: 'Interior Backplate 2',
    category: 'Furniture',
    description: 'Interior design rendering',
  },
  {
    id: 14,
    image: cosmos2,
    title: 'Luxury Hotel Suite',
    category: 'Interior',
    description: 'Elegant hotel interior with premium finishes',
  },
  // Exterior Items
  {
    id: 16,
    image: ext01,
    title: 'Architectural Exterior 01',
    category: 'Exterior',
    description: 'Modern architectural exterior visualization',
  },
  {
    id: 17,
    image: ext02,
    title: 'Architectural Exterior 02',
    category: 'Exterior',
    description: 'Contemporary exterior design',
  },
  {
    id: 18,
    image: ext03,
    title: 'Architectural Exterior 03',
    category: 'Exterior',
    description: 'Modern building exterior',
  },
  {
    id: 19,
    image: ext04,
    title: 'Architectural Exterior 04',
    category: 'Exterior',
    description: 'Elegant exterior visualization',
  },
  {
    id: 20,
    image: ext4,
    title: 'Sofa',
    category: 'Furniture',
    description: 'Residential furniture',
  },
  {
    id: 21,
    image: ext10001,
    title: 'Sofa',
    category: 'Furniture',
    description: 'Mandaue Foam Sofa',
  },
  {
    id: 22,
    image: vanDuyne,
    title: 'Van Duyne Project',
    category: 'Interior',
    description: 'Interior architectural visualization',
  },
  // Furniture Items
  {
    id: 25,
    image: furnitureV1,
    title: 'Furniture Design V1',
    category: 'Furniture',
    description: 'Custom furniture pieces',
  },
  {
    id: 26,
    image: furnitureV2,
    title: 'Furniture Design V2',
    category: 'Furniture',
    description: 'Bespoke furniture pieces for luxury spaces',
  },
];

export const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Interior' | 'Exterior' | 'Furniture'>('All');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: PortfolioItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 mt-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-[#E1FF01]">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of photorealistic 3D renderings. From architectural exteriors to fully furnished interiors, see how we bring visions to life.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {(['All', 'Interior', 'Exterior', 'Furniture'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-0 ${
                selectedCategory === category
                  ? 'bg-black/80 text-[#E1FF01] border-0'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-row-1 sm:grid-row-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(item)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#E1FF01] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <p className="text-xl text-white mb-6 drop-shadow-md">Ready to bring your project to life?</p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-32 py-14 bg-black/90 backdrop-blur-sm text-[#E1FF01] font-bold rounded-xl hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-[#E1FF01]/40 text-xl border-4 border-[#E1FF01] ring-4 ring-[#E1FF01]/30 ring-offset-2 ring-offset-black flex items-center gap-4"
            >
              <span className="px-4">Start Your Project Today</span>
            </button>
          </div>
        </div> */}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg overflow-hidden"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Category:</span> {selectedImage.category}
                </p>
                {selectedImage.description && (
                  <p className="text-gray-600">{selectedImage.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

