
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardTitle 
} from '@/components/ui/card';
import { Eye, FileImage } from 'lucide-react';

// Portfolio project data
export const portfolioProjects = [
  {
    id: 1,
    title: "Ocean View Tower",
    category: "Commercial Construction",
    description: "A 25-story luxury commercial tower with panoramic ocean views",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Miami, FL",
    year: "2023",
    client: "Oceanfront Properties Ltd.",
    value: "$120M",
    scope: "Full construction management for this landmark commercial tower. The scope included foundation work, structural engineering, interior fit-out, and implementation of smart building technologies. The project featured floor-to-ceiling glass panels offering panoramic views, a rooftop garden, and LEED Gold certification."
  },
  {
    id: 2,
    title: "Green Valley Residences",
    category: "Residential Development",
    description: "Sustainable community of 50 high-end environmentally-friendly homes",
    image: "https://images.unsplash.com/photo-1494526585095-c41cabfe98bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
    location: "Portland, OR",
    year: "2022",
    client: "EcoLiving Developments",
    value: "$85M",
    scope: "Design and construction of 50 sustainable luxury homes featuring solar panels, rainwater harvesting systems, and energy-efficient design. The community includes shared green spaces, walking trails, and a community center powered entirely by renewable energy."
  },
  {
    id: 3,
    title: "Central Park Medical Center",
    category: "Healthcare Facility",
    description: "State-of-the-art 125,000 sq ft medical center with specialized treatment facilities",
    image: "https://images.unsplash.com/photo-1586147852752-3d34ba1b7fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "New York, NY",
    year: "2023",
    client: "Metropolitan Health Systems",
    value: "$210M",
    scope: "Construction of a comprehensive medical facility including emergency department, surgical suites, specialized treatment areas, patient rooms, and administrative offices. The project involved complex MEP systems, medical gas installations, and radiation shielding for imaging departments."
  },
  {
    id: 4,
    title: "Mountain View Resort",
    category: "Hospitality",
    description: "Luxury mountain resort featuring 200 rooms and full spa amenities",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Aspen, CO",
    year: "2021",
    client: "Alpine Luxury Resorts",
    value: "$95M",
    scope: "Development of a four-season mountain resort with 200 luxury rooms, multiple restaurants, conference facilities, spa and wellness center, and ski-in/ski-out access. The design incorporated local materials and traditional alpine architecture with modern amenities."
  },
  {
    id: 5,
    title: "Industrial Innovation Hub",
    category: "Industrial Construction",
    description: "Modern manufacturing facility with integrated office space and research labs",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Detroit, MI",
    year: "2022",
    client: "NextGen Manufacturing",
    value: "$67M",
    scope: "Construction of a 180,000 sq ft advanced manufacturing facility with integrated R&D labs and office space. The facility features automated production lines, cleanroom environments, and collaborative innovation spaces, with a focus on adaptive reuse of a former automotive plant."
  },
  {
    id: 6,
    title: "Sunrise Academy",
    category: "Educational Facility",
    description: "K-12 educational campus with sports facilities and auditorium",
    image: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Austin, TX",
    year: "2023",
    client: "Austin Education Foundation",
    value: "$52M",
    scope: "Construction of a comprehensive K-12 campus including classrooms, science labs, library, cafeteria, 500-seat auditorium, gymnasium, and athletic fields. The design emphasized natural light, flexible learning spaces, and outdoor teaching areas."
  },
  {
    id: 7,
    title: "Downtown Transit Hub",
    category: "Infrastructure",
    description: "Multi-modal transit center connecting subway, bus, and light rail systems",
    image: "https://images.unsplash.com/photo-1556784344-ad913c73cfc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Chicago, IL",
    year: "2021",
    client: "Chicago Transit Authority",
    value: "$145M",
    scope: "Design and construction of a major transit hub connecting multiple transportation systems, including subway platforms, bus terminals, and light rail stops. The facility features a distinctive curved glass roof, digital passenger information systems, retail spaces, and green building technologies."
  },
  {
    id: 8,
    title: "Lakeview Commons",
    category: "Mixed-Use Development",
    description: "Urban renewal project featuring retail, office, and residential spaces",
    image: "https://images.unsplash.com/photo-1577979536825-1d0e9b854ee1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Seattle, WA",
    year: "2022",
    client: "Pacific Urban Development",
    value: "$118M",
    scope: "Comprehensive mixed-use development project including ground-floor retail, three floors of office space, and 150 residential units. The development also features underground parking, a public plaza, and green roof terraces. The project required brownfield remediation and close coordination with local stakeholders."
  },
  {
    id: 9,
    title: "Desert Oasis Resort",
    category: "Hospitality",
    description: "Luxury desert resort with water conservation systems and solar power",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Phoenix, AZ",
    year: "2023",
    client: "Sonoran Resorts Group",
    value: "$105M",
    scope: "Construction of a desert resort featuring 175 guest rooms, 30 private villas, multiple dining venues, spa facilities, and outdoor recreation areas. The project incorporated extensive water conservation systems, solar power generation, and xeriscaping to minimize environmental impact while maximizing guest comfort."
  },
  {
    id: 10,
    title: "Alpine Industrial Park",
    category: "Industrial Construction",
    description: "370,000 sq ft industrial park with advanced logistics facilities",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Denver, CO",
    year: "2021",
    client: "Mountain Logistics Corporation",
    value: "$73M",
    scope: "Development of a multi-building industrial park optimized for logistics operations, including warehousing, distribution, and light manufacturing. The facilities feature 32-foot clear heights, cross-dock capabilities, advanced material handling systems, and energy-efficient design."
  }
];

const Portfolio = () => {
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
    <section className="py-20 bg-white" ref={animatedElementsRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Portfolio</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our completed construction projects across various sectors. Each project showcases our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Featured Portfolio Carousel */}
        <div className="mb-10 animate-on-scroll">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {portfolioProjects.slice(0, 5).map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link to={`/portfolio/${project.id}`}>
                    <Card className="overflow-hidden border border-gray-200 h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="relative">
                        <AspectRatio ratio={16 / 9}>
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="object-cover w-full h-full"
                            loading="eager"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                            }}
                          />
                        </AspectRatio>
                        <div className="absolute top-2 right-2 bg-navy text-white text-xs px-2 py-1 rounded-full">
                          {project.year}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="text-xs font-medium text-gold mb-2">
                          {project.category}
                        </div>
                        <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-600 line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <span className="text-xs text-gray-500">{project.location}</span>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Eye size={14} />
                          <span>View</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioProjects.slice(5).map((project, index) => (
            <div 
              key={project.id} 
              className="animate-on-scroll" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link to={`/portfolio/${project.id}`}>
                <Card className="overflow-hidden border border-gray-200 h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative">
                    <AspectRatio ratio={16 / 9}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                        }}
                      />
                    </AspectRatio>
                    <div className="absolute top-2 right-2 bg-navy text-white text-xs px-2 py-1 rounded-full">
                      {project.year}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-xs font-medium text-gold mb-2">
                      {project.category}
                    </div>
                    <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{project.location}</span>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>View</span>
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-navy hover:bg-gold text-white flex items-center gap-2 px-6 py-2">
            <FileImage size={18} />
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
