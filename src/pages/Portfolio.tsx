
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle
} from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Eye, Home, LayoutGrid, LayoutList } from 'lucide-react';

// Portfolio project data - same as in Portfolio.tsx component
const portfolioProjects = [
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

const PortfolioPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(portfolioProjects.map(project => project.category)))];
  
  // Filter projects by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Handle scroll animation for the page header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Image error handling function
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="container mx-auto px-6 z-10">
          <div className={`text-center transition-all duration-700 transform ${isScrollingUp ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-90'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h1>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our diverse portfolio of construction and estimating projects across various sectors.
              Each project showcases our expertise, precision, and commitment to excellence.
            </p>
            <div className="flex justify-center items-center space-x-2">
              <Link to="/">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-navy">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </section>
      
      {/* Portfolio Controls */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-navy text-white'
                      : 'bg-white text-navy border border-gray-200 hover:border-navy'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-l-lg ${
                  viewMode === 'grid' ? 'bg-navy text-white' : 'text-gray-500 hover:text-navy'
                }`}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-r-lg ${
                  viewMode === 'list' ? 'bg-navy text-white' : 'text-gray-500 hover:text-navy'
                }`}
              >
                <LayoutList size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Projects */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="overflow-hidden border border-gray-200 h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-full"
                          loading="eager"
                          onError={handleImageError}
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
                      <CardDescription className="text-sm text-gray-600">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{project.location}</span>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>Details</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="overflow-hidden border border-gray-200 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <AspectRatio ratio={4 / 3}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-full"
                          loading="lazy"
                          onError={handleImageError}
                        />
                      </AspectRatio>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-sm font-medium text-gold mb-1">
                            {project.category}
                          </div>
                          <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <span>{project.location}</span>
                            <span>•</span>
                            <span>{project.year}</span>
                            <span>•</span>
                            <span>{project.value}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Eye size={14} />
                          <span>Details</span>
                        </Button>
                      </div>
                      <CardDescription className="text-gray-600 mb-4">
                        {project.description}
                      </CardDescription>
                      <div className="text-sm">
                        <strong className="text-navy">Client:</strong> {project.client}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and estimate for your next construction project.
          </p>
          <Button className="bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-6">
            <Link to="/contact">Request an Estimate</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default PortfolioPage;
