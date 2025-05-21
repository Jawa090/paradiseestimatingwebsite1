import { useEffect, useRef } from 'react';

const ClientsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const scrollSpeedRef = useRef(1); // Adjust speed here

  useEffect(() => {
    const animate = () => {
      if (carouselRef.current) {
        const firstItem = carouselRef.current.children[0]?.children[0] as HTMLElement;
        
        if (!firstItem) return;
        
        const itemWidth = firstItem.offsetWidth + 40; // width + margin
        
        // If we've scrolled to the end (accounting for the duplicated items)
        if (carouselRef.current.scrollLeft >= (carouselRef.current.scrollWidth / 2)) {
          // Reset to start without animation for seamless transition
          carouselRef.current.style.scrollBehavior = 'auto';
          carouselRef.current.scrollLeft = 0;
          // Re-enable smooth scrolling after reset
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.style.scrollBehavior = 'smooth';
            }
          }, 10);
        } else {
          carouselRef.current.scrollLeft += scrollSpeedRef.current;
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const clients = [
    { name: "ABC Construction", logo: "/client-1-color.jpg" },
    { name: "XYZ Developers", logo: "/client-2.jpg" },
    { name: "Metro Builders", logo: "/client-4.jpg" },
    { name: "City Contractors", logo: "/client-5.jpg" },
    { name: "Elite Engineers", logo: "/client-6.jpg" },
    { name: "Global Construction", logo: "/client-7.jpg" },
    { name: "Landmark Projects", logo: "/client-8.jpg" },
    { name: "Premier Properties", logo: "/client-10.jpg" },
    { name: "City Contractors", logo: "/client-11.jpg" },
    { name: "Elite Engineers", logo: "/client-12.jpg" },
    { name: "Global Construction", logo: "/client-13.jpg" },
    { name: "Landmark Projects", logo: "/client-14.jpg" },
    { name: "Premier Properties", logo: "/client-15.jpg" },
  ];

  // Duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to work with leading construction companies, developers, and contractors across the country.
          </p>
        </div>
        
        <div className="relative overflow-hidden py-6">
          {/* Gradient overlay on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Client logo carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex py-4">
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`${client.name}-${index}`} 
                  className="flex-shrink-0 mx-5 w-56 h-32 bg-white rounded-xl shadow-sm flex items-center justify-center px-8 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlay on the right */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;