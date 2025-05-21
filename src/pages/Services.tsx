import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ServiceCard from '@/components/ServiceCard';
import { servicesData } from '@/data/services';
import { Pencil, FileText, Wrench, Workflow } from 'lucide-react';

const Services = () => {
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

  // Group services by category
  const estimationServices = servicesData.filter(service => 
    ['material-takeoff', 'commercial-estimating', 'residential-estimating', 'earthwork', 'cost-planning', 'value-engineering', 'bid-management', 'plan-review', 'scheduling'].includes(service.id));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.15
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Construction Services</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive estimating services across multiple construction disciplines. 
              Our expert team delivers accurate cost estimates and professional services for projects of all sizes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Construction Outsourcing Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of construction-related services across four key domains to support your projects from conception to completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Design Category */}
            <div className="text-center p-6">
              <div className="bg-blue-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pencil className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">DESIGN</h3>
              <p className="text-gray-600">
                Comprehensive design services to bring your construction projects to life with precision and creativity.
              </p>
            </div>
            
            {/* Estimation Category */}
            <div className="text-center p-6">
              <div className="bg-red-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">ESTIMATION</h3>
              <p className="text-gray-600">
                Detailed cost estimation services with accurate takeoffs and comprehensive budget planning tools.
              </p>
            </div>
            
            {/* Management Category */}
            <div className="text-center p-6">
              <div className="bg-orange-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-16 w-16 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">MANAGEMENT</h3>
              <p className="text-gray-600">
                Professional project management services to ensure your construction projects stay on track and on budget.
              </p>
            </div>
            
            {/* Support Category */}
            <div className="text-center p-6">
              <div className="bg-green-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">SUPPORT</h3>
              <p className="text-gray-600">
                Comprehensive support services that enhance your construction projects with specialized expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Services Sections */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Design Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">Design Services</h3>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-blue-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Architectural Design</p>
                  <p className="text-gray-600 text-sm">Complete architectural design solutions for residential and commercial projects</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-blue-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Structural Engineering</p>
                  <p className="text-gray-600 text-sm">Comprehensive structural analysis and design services</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-blue-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">MEP Design (Mechanical, Electrical, Plumbing)</p>
                  <p className="text-gray-600 text-sm">Integrated MEP systems design and coordination</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-blue-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">CAD Drafting</p>
                  <p className="text-gray-600 text-sm">Detailed CAD drawings for construction documentation</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-blue-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">BIM Services (Building Information Modeling)</p>
                  <p className="text-gray-600 text-sm">Advanced 3D modeling and information management</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-blue-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">3D Rendering & Visualization</p>
                  <p className="text-gray-600 text-sm">Photo-realistic renderings and walkthroughs</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-blue-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Construction Planning & Scheduling</p>
                  <p className="text-gray-600 text-sm">Strategic planning and detailed scheduling for construction projects</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-blue-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Feasibility Studies</p>
                  <p className="text-gray-600 text-sm">Comprehensive analysis of project viability and potential</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-blue-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Permitting and Code Compliance Support</p>
                  <p className="text-gray-600 text-sm">Navigation of regulatory requirements and building codes</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Estimation Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">Estimation Services</h3>
            
            {/* Quantity Takeoff Services */}
            <div className="mb-8">
              <p className="font-semibold text-lg mb-3">Quantity Takeoff Services</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Concrete (footings, slabs, columns, etc.)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Masonry (blockwork, brickwork)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Steel (rebar, structural steel)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Carpentry & Millwork</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Drywall & Insulation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Roofing & Waterproofing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Painting & Finishes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Flooring (tiles, wood, carpet)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Doors, Windows & Glazing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">MEP Takeoffs (Mechanical, Electrical, Plumbing systems)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Sitework & Earthworks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Landscaping & External Works</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Cost Estimation Services */}
            <div className="mb-8">
              <p className="font-semibold text-lg mb-3">Cost Estimation Services</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Preliminary/Budget Estimates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Detailed Estimates (based on design stages: schematic, DD, CD)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Bid Estimates (for tendering purposes)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Conceptual Cost Estimating</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Labor & Equipment Rate Analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Value Engineering Support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Change Order Estimates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Life-Cycle Cost Analysis</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Specialized Estimating */}
            <div className="mb-8">
              <p className="font-semibold text-lg mb-3">Specialized Estimating</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Trade-Specific Estimating (e.g., HVAC, Electrical)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Civil Estimating (roads, bridges, infrastructure)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Residential / Commercial / Industrial Project Estimating</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Green Building Cost Estimating (LEED-compliant)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Software-Based Services */}
            <div className="mb-8">
              <p className="font-semibold text-lg mb-3">Software-Based Services</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">On-Screen Takeoff (OST)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Bluebeam Revu Quantity Takeoffs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Planswift Estimation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">RSMeans Integration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Microsoft Excel Estimating Models</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">CostX or Trimble-based Estimations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">ProEst / Buildertrend / CoConstruct / STACK</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Documentation & Reporting */}
            <div className="mb-8">
              <p className="font-semibold text-lg mb-3">Documentation & Reporting</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Bill of Quantities (BOQ) Preparation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Material Cost Reports</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Vendor Comparison Reports</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Bid Package Preparation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Cost Breakdown Structure (CBS) Reports</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Historical Cost Database Maintenance</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Additional Support Services */}
            <div className="mb-8">
              <p className="font-semibold text-lg mb-3">Additional Support Services</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Scope Gap Analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Subcontractor Quote Analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Estimate Validation & Peer Review</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-4 w-4 rounded-sm bg-red-200 flex-shrink-0 mr-3 mt-1"></span>
                  <div>
                    <p className="font-medium">Project Cost Benchmarking</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Management Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">Management Services</h3>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-orange-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Project Management</p>
                  <p className="text-gray-600 text-sm">Complete project management from inception to completion</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-orange-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Site Supervision</p>
                  <p className="text-gray-600 text-sm">On-site management and quality control</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-orange-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Labor Supply (skilled/unskilled)</p>
                  <p className="text-gray-600 text-sm">Qualified workforce management for construction projects</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-orange-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Equipment Rental & Operation</p>
                  <p className="text-gray-600 text-sm">Construction equipment solutions and operation services</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-orange-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Surveying Services</p>
                  <p className="text-gray-600 text-sm">Precise site measurement and layout services</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-orange-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Safety Management</p>
                  <p className="text-gray-600 text-sm">Comprehensive safety protocols and compliance management</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-orange-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Logistics & Material Management</p>
                  <p className="text-gray-600 text-sm">Efficient supply chain and materials handling solutions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-orange-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Temporary Facilities</p>
                  <p className="text-gray-600 text-sm">Site offices, storage units, and temporary construction facilities</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Support Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy mb-6 pb-2 border-b-2 border-gold">Support Services</h3>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Procurement & Vendor Management</p>
                  <p className="text-gray-600 text-sm">Strategic sourcing and supplier relationship management</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Contract Administration</p>
                  <p className="text-gray-600 text-sm">Comprehensive contract management and compliance</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Document Control & Records Management</p>
                  <p className="text-gray-600 text-sm">Organized document handling and storage solutions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Cost Control & Budgeting</p>
                  <p className="text-gray-600 text-sm">Financial oversight and budget management services</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">HR & Payroll Services for Site Teams</p>
                  <p className="text-gray-600 text-sm">Workforce management and compensation administration</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Construction Accounting</p>
                  <p className="text-gray-600 text-sm">Specialized accounting services for construction projects</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Legal & Claims Consulting</p>
                  <p className="text-gray-600 text-sm">Expert guidance on construction legal matters and claims</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Construction Software Implementation</p>
                  <p className="text-gray-600 text-sm">Setup and training for construction management software</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Remote Site Monitoring</p>
                  <p className="text-gray-600 text-sm">CCTV, drone and remote monitoring solutions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Data Analytics for Construction Performance</p>
                  <p className="text-gray-600 text-sm">Performance metrics and data-driven decision making</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">Digital Twin Modeling</p>
                  <p className="text-gray-600 text-sm">Virtual replicas for enhanced project management</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-green-200 flex-shrink-0 mr-3 mt-1"></span>
                <div>
                  <p className="font-semibold">GIS Mapping & Spatial Analysis</p>
                  <p className="text-gray-600 text-sm">Geographic information systems for construction planning</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Our Estimating Services Section (Original Content) */}
      <section className="py-20 bg-gray-50" ref={animatedElementsRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Original Estimating Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive estimating services across multiple construction disciplines. 
              Our team of experts delivers accurate estimates for projects of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {estimationServices.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-on-scroll" 
                style={{ transitionDelay: `${(index % 4) * 100}ms` }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  link={`/services/${service.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Estimating Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a comprehensive process to ensure accurate and detailed estimates for your construction projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Project Review</h3>
              <p className="text-gray-600">
                We begin by thoroughly reviewing your project plans, specifications, and requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Quantity Takeoff</h3>
              <p className="text-gray-600">
                Our estimators perform detailed quantity takeoffs for all required materials and labor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Cost Analysis</h3>
              <p className="text-gray-600">
                We apply current material and labor rates to develop an accurate cost estimate.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Final Estimate</h3>
              <p className="text-gray-600">
                We deliver a comprehensive estimate with detailed breakdowns and supporting documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team is ready to help you with your next construction project.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Get A Quote
          </Link>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Services;
