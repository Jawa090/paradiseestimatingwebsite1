
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ServiceCard from '@/components/ServiceCard';
import AnimatedHeadline from '@/components/AnimatedHeadline';
import WhyChooseUs from '@/components/WhyChooseUs';
import EstimateShowcase from '@/components/EstimateShowcase';
import StatsShowcase from '@/components/StatsShowcase';
import ClientsCarousel from '@/components/ClientsCarousel';
import Testimonials from '@/components/Testimonials';
import ConstructionTeam from '@/components/ConstructionTeam';
import Portfolio from '@/components/Portfolio';
import { Eye, FileDown } from 'lucide-react';

// Import icons for service cards
import { 
  Building2, 
  HardHat, 
  UtilityPole, 
  Construction, 
  Container, 
  PaintBucket, 
  Hammer, 
  Briefcase,
  Wrench
} from 'lucide-react';

const Index = () => {
  const animatedElementsRef = useRef<HTMLDivElement>(null);

  // Function to check if an element is in the viewport
  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (animatedElementsRef.current) {
        const elements = animatedElementsRef.current.querySelectorAll('.animate-on-scroll');
        
        elements.forEach((element) => {
          if (isInViewport(element)) {
            element.classList.add('show');
          }
        });
      }
    };

    // Initial check in case elements are already in viewport
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.2
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="mb-8">
            <AnimatedHeadline 
              preText="We Provide Expert"
              words={["Construction", "Concrete", "Masonry", "Roofing", "HVAC", "MEP"]}
              postText="Estimating Services"
            />
            <p className="text-white text-lg mt-6 max-w-2xl mx-auto">
              Professional construction estimating services for contractors, builders, and developers. Get accurate cost estimates for your next project.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button className="bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-6">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button className="bg-transparent hover:bg-white text-white hover:text-navy border border-white text-lg px-8 py-6">
              <Link to="/estimate-download">Download Sample</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-8 h-8 text-gold" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
      
      {/* About Paradise Estimating Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Paradise Estimating</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              With decades of experience in the construction industry, our team delivers accurate and reliable estimating services tailored to your project needs. We take pride in helping our clients achieve success through precise cost analysis and planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-5xl font-bold text-gold mb-2">2000+</div>
              <div className="text-navy font-semibold text-xl">PROJECTS COMPLETED</div>
              <div className="h-1 w-20 bg-gold mx-auto my-4"></div>
              <p className="text-gray-600">Successfully delivered across multiple construction disciplines</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-5xl font-bold text-gold mb-2">20+</div>
              <div className="text-navy font-semibold text-xl">ESTIMATORS</div>
              <div className="h-1 w-20 bg-gold mx-auto my-4"></div>
              <p className="text-gray-600">Experienced professionals with specialized industry knowledge</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-5xl font-bold text-gold mb-2">85%</div>
              <div className="text-navy font-semibold text-xl">BID WINS</div>
              <div className="h-1 w-20 bg-gold mx-auto my-4"></div>
              <p className="text-gray-600">Helping our clients secure profitable contracts</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-5xl font-bold text-gold mb-2">2000+</div>
              <div className="text-navy font-semibold text-xl">HAPPY CUSTOMERS</div>
              <div className="h-1 w-20 bg-gold mx-auto my-4"></div>
              <p className="text-gray-600">Satisfaction and repeat business from our valued clients</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Stats Showcase Section */}
      <StatsShowcase />
      
      {/* Estimate Showcase Section */}
      <EstimateShowcase />

      {/* Construction Team Section */}
      <ConstructionTeam />
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50" ref={animatedElementsRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Estimating Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive estimating services across multiple construction disciplines. Our team of experts delivers accurate estimates for projects of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <ServiceCard
                title="Concrete"
                description="Detailed estimates for concrete foundations, slabs, walls, and structural elements."
                icon={<Building2 size={40} />}
                link="/services/concrete"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <ServiceCard
                title="Masonry"
                description="Accurate quantity takeoffs for brick, block, stone, and other masonry materials."
                icon={<Construction size={40} />}
                link="/services/masonry"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <ServiceCard
                title="Roofing"
                description="Comprehensive estimates for all types of roofing systems and materials."
                icon={<HardHat size={40} />}
                link="/services/roofing"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <ServiceCard
                title="HVAC"
                description="Detailed cost analysis for heating, ventilation, and air conditioning systems."
                icon={<UtilityPole size={40} />}
                link="/services/hvac"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '500ms' }}>
              <ServiceCard
                title="Plumbing"
                description="Accurate estimates for plumbing systems, fixtures, and pipe installations."
                icon={<Container size={40} />}
                link="/services/plumbing"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '600ms' }}>
              <ServiceCard
                title="Electrical"
                description="Detailed cost breakdowns for electrical systems, wiring, and fixtures."
                icon={<UtilityPole size={40} />}
                link="/services/electrical"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '700ms' }}>
              <ServiceCard
                title="Finishes"
                description="Comprehensive estimates for interior and exterior finishing elements."
                icon={<PaintBucket size={40} />}
                link="/services/finishes"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '800ms' }}>
              <ServiceCard
                title="General Contracting"
                description="Complete project estimates for general contractors and developers."
                icon={<Wrench size={40} />}
                link="/services/general-contracting"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-navy hover:bg-gold text-white flex items-center gap-2 ml-auto mr-auto px-8 py-4">
              <Eye size={18} />
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Clients Carousel Section */}
      <ClientsCarousel />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team is ready to help you with your next construction project.
          </p>
          <Button className="bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-6">
            <Link to="/contact">Get A Quote</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
