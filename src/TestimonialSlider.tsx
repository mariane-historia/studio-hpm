import { useState, useEffect } from 'react';
import mf from './assets/mf.jpg';

type Testimonial = {
  id: number;
  logo: string;
  review: string;
  companyName: string;
};

export const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const mockData: Testimonial[] = [
      {
    id: 1,
    logo: mf,
    review: 'Studio HPM+ transformed our vision into reality with exceptional attention to detail.',
    companyName: 'Mandaue Foam Home Center',
  },
  {
    id: 2,
    logo: mf,
    review: 'Their innovative approach helped us stand out in a competitive market.',
    companyName: 'Luxury Villas Inc.',
  },
  {
    id: 3,
    logo: mf,
    review: 'The team delivered beyond our expectations with creative solutions.',
    companyName: 'Prime Builders',
  },
  {
    id: 4,
    logo: mf,
    review: 'The 3D visualizations helped us secure funding and make critical design decisions early.',
    companyName: 'Urban Design Collective',
  },
  {
    id: 5,
    logo: mf,
    review: 'From concept to completion, their professionalism and creativity were outstanding.',
    companyName: 'Pacific Architects',
  },
  {
    id: 6,
    logo: mf,
    review: 'Working with Studio HPM+ was a game-changer for our retail space redesign.',
    companyName: 'Metro Retail Spaces',
  },
  {
    id: 7,
    logo: mf,
    review: 'Their renderings captured our brand essence perfectly and impressed our stakeholders.',
    companyName: 'Elite Hospitality Group',
  },
  {
    id: 8,
    logo: mf,
    review: 'The virtual walkthroughs saved us months of revisions and costly construction changes.',
    companyName: 'Tower Development Corp',
  },
  {
    id: 9,
    logo: mf,
    review: 'Studio HPM+ understands the balance between aesthetic vision and practical functionality.',
    companyName: 'Coastal Living Developers',
  }
];

    setTimeout(() => {
      setTestimonials(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="text-center py-8 text-white">Loading testimonials...</div>;

  return (
    <div className="mt-16 space-y-10 px-8">
      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.slice(0, 3).map((testimonial) => (
          <div key={testimonial.id} className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <div className="flex justify-center mb-4">
              <img src={testimonial.logo} alt={testimonial.companyName} className="h-16 object-contain" />
            </div>
            <p className="text-white italic mb-4">"{testimonial.review}"</p>
            <p className="font-semibold text-white">- {testimonial.companyName}</p>
          </div>
        ))}
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-4xl mx-auto">
        
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-white' : 'bg-white/30'}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
