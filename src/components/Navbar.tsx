
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const serviceLinks = [
    { name: 'Concrete', path: '/services/concrete' },
    { name: 'Masonry', path: '/services/masonry' },
    { name: 'Roofing', path: '/services/roofing' },
    { name: 'HVAC', path: '/services/hvac' },
    { name: 'Plumbing', path: '/services/plumbing' },
    { name: 'Electrical', path: '/services/electrical' },
    { name: 'Finishes', path: '/services/finishes' },
    { name: 'General Contracting', path: '/services/general-contracting' }
  ];

  const portfolioLinks = [
    { name: 'Commercial', path: '/portfolio/commercial' },
    { name: 'Residential', path: '/portfolio/residential' },
    { name: 'Industrial', path: '/portfolio/industrial' },
    { name: 'Institutional', path: '/portfolio/institutional' }
  ];

  return (
    <>      
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/1598254f-67ec-42a0-bc7e-f7435098e398.png" 
              alt="Paradise Estimating Logo" 
              className="h-14 w-14 mr-2 transition-all duration-500 group-hover:scale-110 object-contain"
            />
            <span className={`text-2xl font-poppins font-bold ${isScrolled ? 'text-navy' : 'text-white'} transition-all duration-300 relative hidden sm:inline-block`}>
              <span className="inline-block overflow-hidden">
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300">P</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-[50ms]">a</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-100">r</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-150">a</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-200">d</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-250">i</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-300">s</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-350">e</span>
              </span>
              <span className="mx-1"></span>
              <span className="inline-block overflow-hidden">
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-400">E</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-450">s</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-500">t</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-550">i</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-600">m</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-650">a</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-700">t</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-750">i</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-800">n</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-850">g</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/') ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                <DropdownMenuTrigger className="focus:outline-none">
                  <div className={`${
                    isScrolled ? 'text-navy' : 'text-white'
                  } hover-underline-animation ${location.pathname.includes('/services') ? 'font-semibold' : ''}`}>
                    Services
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white shadow-md">
                  {serviceLinks.map((service, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        to={service.path} 
                        className="w-full px-4 py-2 hover:bg-gray-100 text-navy"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/services" 
                      className="w-full px-4 py-2 hover:bg-gray-100 text-navy font-semibold"
                    >
                      View All Services
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Portfolio Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPortfolioOpen(true)}
              onMouseLeave={() => setPortfolioOpen(false)}
            >
              <DropdownMenu open={portfolioOpen} onOpenChange={setPortfolioOpen}>
                <DropdownMenuTrigger className="focus:outline-none">
                  <div className={`${
                    isScrolled ? 'text-navy' : 'text-white'
                  } hover-underline-animation ${location.pathname.includes('/portfolio') ? 'font-semibold' : ''}`}>
                    Portfolio
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white shadow-md">
                  {portfolioLinks.map((portfolio, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        to={portfolio.path} 
                        className="w-full px-4 py-2 hover:bg-gray-100 text-navy"
                      >
                        {portfolio.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/portfolio" 
                      className="w-full px-4 py-2 hover:bg-gray-100 text-navy font-semibold"
                    >
                      View All Projects
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <Link
              to="/about"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/about') ? 'font-semibold' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/contact') ? 'font-semibold' : ''}`}
            >
              Contact
            </Link>
            <Button className="bg-gold hover:bg-white hover:text-gold text-white transition-colors duration-300">
              <Link to="/estimate-download">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className={`lg:hidden ${isScrolled ? 'text-navy' : 'text-white'}`} onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-6 flex flex-col space-y-4 animate-fade-in-down">
            <Link
              to="/"
              className={`text-navy py-2 ${isActive('/') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <details className="group">
              <summary className="text-navy py-2 cursor-pointer list-none flex justify-between items-center">
                Services
                <span className="transition-transform group-open:rotate-180">
                  <svg width="14" height="8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                {serviceLinks.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-navy py-1 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </details>
            <details className="group">
              <summary className="text-navy py-2 cursor-pointer list-none flex justify-between items-center">
                Portfolio
                <span className="transition-transform group-open:rotate-180">
                  <svg width="14" height="8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                {portfolioLinks.map((portfolio, index) => (
                  <Link
                    key={index}
                    to={portfolio.path}
                    className="text-navy py-1 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {portfolio.name}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              to="/about"
              className={`text-navy py-2 ${isActive('/about') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-navy py-2 ${isActive('/contact') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-gold hover:bg-navy text-white w-full">
              <Link to="/estimate-download">Get a Quote</Link>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
