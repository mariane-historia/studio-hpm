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
              href="mailto:info@studiohpm.com"
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
                alt="3D Rendering Showcase"
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
              <button
                onClick={() => scrollToSection('contact')}
                className="hero-appear group relative px-32 py-14 bg-black/90 backdrop-blur-sm text-[#E1FF01] font-bold rounded-xl hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-[#E1FF01]/40 flex items-center gap-4 border-4 border-[#E1FF01] ring-4 ring-[#E1FF01]/50 ring-offset-2 ring-offset-black/50 text-xl"
              >
                <span className="px-4">Book a Free Consult</span>
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E1FF01] opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-[#E1FF01]"></span>
                </span>
              </button>
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
                  alt="3D Rendering Services"
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
                className="px-32 py-14 bg-black/90 backdrop-blur-sm text-[#E1FF01] font-bold rounded-xl hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-[#E1FF01]/40 text-xl border-4 border-[#E1FF01] ring-4 ring-[#E1FF01]/30 ring-offset-2 ring-offset-black flex items-center gap-4"
              >
                <span className="px-4">Get Started Today</span>
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
