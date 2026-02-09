import { useState, useEffect } from 'react';
import './App.css';
import FolderDiv from './FolderDiv';
import cosmos2 from './assets/cosmos2.png';
import heroImage from './assets/02.jpg';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import { TestimonialSlider } from './TestimonialSlider';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Footer } from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add structured data (JSON-LD) for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://studiohpm.com/#organization",
          "name": "Studio HPM+",
          "url": "https://studiohpm.com",
          "logo": "https://studiohpm.com/logo.png",
          "description": "Professional 3D rendering services for architecture, interior design, and custom furniture layouts.",
          "email": "studiohpmplus@gmail.com",
          "telephone": "+63-919-072-9684",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cebu City",
            "addressRegion": "Cebu",
            "addressCountry": "Philippines"
          },
          "sameAs": [
            "https://www.facebook.com/studiohpm",
            "https://www.instagram.com/studiohpm/",
            "https://www.linkedin.com/company/studiohpm/"
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://studiohpm.com/#localbusiness",
          "name": "Studio HPM+",
          "image": "https://studiohpm.com/logo.png",
          "description": "Professional 3D rendering services specializing in architectural visualization, interior design, and custom furniture layouts.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cebu City",
            "addressRegion": "Cebu",
            "addressCountry": "Philippines"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "10.3157",
            "longitude": "123.8854"
          },
          "url": "https://studiohpm.com",
          "telephone": "+63-919-072-9684",
          "priceRange": "$$",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "Service",
          "serviceType": "3D Rendering",
          "provider": {
            "@id": "https://studiohpm.com/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Philippines"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "3D Rendering Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Architectural Visualization",
                  "description": "Photorealistic 3D renderings of architectural exteriors and building designs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Interior Design Rendering",
                  "description": "Detailed 3D visualizations of interior spaces, including kitchens, living rooms, bathrooms, and more"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Furniture Design",
                  "description": "Custom furniture design and 3D visualization services"
                }
              }
            ]
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://studiohpm.com/#website",
          "url": "https://studiohpm.com",
          "name": "Studio HPM+",
          "description": "Professional 3D rendering services for architecture, interior design, and custom furniture",
          "publisher": {
            "@id": "https://studiohpm.com/#organization"
          },
          "inLanguage": "en-US"
        }
      ]
    };

    // Remove existing structured data script if present
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add structured data script
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen bg-[url('./assets/bg1.jpg')] bg-cover bg-center bg-fixed">
        {/* HEADER */}
        <header>
          {/* NAVBAR */}
          <nav
          className={`w-[95%] md:w-[90%] lg:w-[80%] h-14 md:h-16 rounded-2xl m-auto flex items-center justify-between px-4 md:px-6 sticky top-4 z-50 transition-all duration-300 ${
            isScrolled
              ? 'bg-black/90 backdrop-blur-md shadow-lg'
              : 'bg-[rgba(189,189,189,0.3)] backdrop-blur-sm'
          }`}
        >
          <button
            onClick={() => scrollToSection('home')}
            className="font-bold text-base md:text-lg tracking-wider text-white hover:text-[#E1FF01] transition-colors"
          >
            STUDIO HPM+
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row justify-center gap-6 lg:gap-12">
            <button
              onClick={() => scrollToSection('home')}
              className="hover-scale text-sm lg:text-base"
            >
              HOME
          </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover-scale text-sm lg:text-base"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover-scale text-sm lg:text-base"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="hover-scale text-sm lg:text-base"
            >
              TESTIMONIALS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover-scale text-sm lg:text-base"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#E1FF01] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Email Icon - Desktop Only */}
          <div className="hidden md:block">
            <a
              href="mailto:studiohpmplus@gmail.com"
              className="text-[#E1FF01] hover:text-white transition-colors"
              aria-label="Email us"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 35 35">
                <path
                  fill="currentColor"
                  d="M6.773 7H29.96c2.188 0 3.29 1.033 3.29 3.133v14.735c0 2.082-1.102 3.132-3.29 3.132H6.773c-2.188 0-3.29-1.05-3.29-3.133V10.133C3.483 8.033 4.585 7 6.773 7Zm11.585 15.05 11.794-9.678c.42-.35.753-1.155.228-1.872-.508-.717-1.435-.735-2.047-.297l-9.975 6.755L8.4 10.203c-.612-.438-1.54-.42-2.047.297-.525.717-.193 1.523.227 1.873l11.778 9.677Z"
                />
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 z-40 bg-black/95 backdrop-blur-md mx-4 rounded-2xl shadow-lg">
            <div className="flex flex-col p-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-[#E1FF01] text-left py-2 transition-colors"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#E1FF01] text-left py-2 transition-colors"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-[#E1FF01] text-left py-2 transition-colors"
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-[#E1FF01] text-left py-2 transition-colors"
              >
                TESTIMONIALS
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#E1FF01] text-left py-2 transition-colors"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
        </header>

        {/* MAIN CONTENT */}
        <main>
        {/* HERO SECTION */}
        <section id="home" className="flex flex-col justify-center items-center px-4 pt-12 md:pt-16 pb-4">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              STUDIO <span className="text-[#E1FF01]">HPM+</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl mx-auto items-center">
            <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Studio HPM+ 3D architectural rendering showcase - Photorealistic visualization of modern building design"
                className="w-full h-auto object-contain"
                loading="eager"
              />
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <h2 className="hero-appear text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-wide text-white drop-shadow-lg">
                Visualize Before You Build
              </h2>
              <p className="hero-appear text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl drop-shadow-md">
                Dream in 3D. Build with certainty. Our renders bridge the gap between imagination and reality.
              </p>
              <a
                href="mailto:studiohpmplus@gmail.com"
                className="hero-appear group relative bg-black/90 backdrop-blur-sm text-[#E1FF01] font-bold rounded-2xl hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-[#E1FF01]/40 flex items-center gap-4 border-2 border-[#E1FF01] ring-offset-black/50 text-xl"
              >
                <span className="px-5 py-3">Book a Free Consult</span> 
                <div className='pr-4'>
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E1FF01] opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-[#E1FF01]"></span>
                  </span>
                </div>
              </a>
                
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="w-screen pt-20 md:pt-24 pb-0">
          <FolderDiv bgImage={bg2} patternId="folder-bg-1" className="w-screen min-h-[450px] md:min-h-[500px] overflow-hidden -mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 lg:gap-12 w-full max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-0 -mb-4">
              <div className="flex flex-col space-y-6">
                <h2 className="hero-appear text-3xl md:text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-wide text-white drop-shadow-lg">
                  Why Choose Us?
                </h2>
                <div className="space-y-4">
                  <div className="hero-appear flex items-start gap-3 text-lg md:text-xl text-white">
                    <span className="text-[#E1FF01] text-2xl">✓</span>
                    <span className="drop-shadow-md">Precision-crafted 3D renders</span>
                  </div>
                  <div className="hero-appear flex items-start gap-3 text-lg md:text-xl text-white">
                    <span className="text-[#E1FF01] text-2xl">✓</span>
                    <span className="drop-shadow-md">Trusted by architects & developers</span>
                  </div>
                  <div className="hero-appear flex items-start gap-3 text-lg md:text-xl text-white">
                    <span className="text-[#E1FF01] text-2xl">✓</span>
                    <span className="drop-shadow-md">Home, hotel, and resort specialists</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E1FF01]/30">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#E1FF01] mb-2">500+</div>
                    <div className="text-sm md:text-base text-gray-300">Projects</div>
                  </div>
                  <div className="text-center border-x border-[#E1FF01]/30">
                    <div className="text-2xl md:text-3xl font-bold text-[#E1FF01] mb-2">12y</div>
                    <div className="text-sm md:text-base text-gray-300">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#E1FF01] mb-2">98%</div>
                    <div className="text-sm md:text-base text-gray-300">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={cosmos2}
                  alt="Studio HPM+ 3D rendering services - Professional architectural visualization and interior design rendering"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FolderDiv>
        </section>

        {/* PORTFOLIO SECTION */}
        <PortfolioGallery />

        {/* MID-PAGE CTA */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-md">
              Let's discuss how we can bring your project to life with stunning 3D visualizations.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className=" bg-black/90 backdrop-blur-sm text-[#E1FF01] font-bold rounded-2xl hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-[#E1FF01]/40 text-xl border-4 border-[#E1FF01] ring-4 ring-[#E1FF01]/30 ring-offset-2 ring-offset-black flex items-center gap-4"
              >
                <span className="px-5 py-3">Get Started Today</span>
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="w-screen py-20">
          <FolderDiv bgImage={bg1} patternId="folder-bg" className="w-screen min-h-[600px] overflow-hidden">
            <div className="px-4 md:px-8 py-12 md:py-20">
              <div className="text-center mb-12 pt-16 md:pt-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white uppercase drop-shadow-lg">
                  Don't Just Take Our Word For It
                </h2>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                  Find out what other people have to say about{' '}
                  <span className="font-bold text-[#E1FF01]">Studio HPM+</span>
                </p>
              </div>
              <TestimonialSlider />
            </div>
          </FolderDiv>
        </section>

        </main>

        {/* FOOTER */}
        <Footer />

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-[#E1FF01] text-black rounded-full shadow-lg hover:bg-[#cce600] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}

export default App;
