
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, MapPin, Building, DollarSign, Users, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

// Import the portfolio projects data from the Portfolio component
import { portfolioProjects } from '@/components/Portfolio';

const PortfolioDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = portfolioProjects.find((p) => p.id.toString() === projectId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If project not found
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-navy mb-4">Project Not Found</h1>
            <p className="mb-6 text-gray-600">The project you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/portfolio">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
        <Footer />
        <Chatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Project Hero */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <div className="flex items-center mb-2">
                <Link to="/portfolio" className="text-gold hover:text-navy transition-colors">Portfolio</Link>
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                <span className="text-gray-600">{project.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy">{project.title}</h1>
            </div>
            <Button variant="outline" size="sm" className="mt-4 md:mt-0" asChild>
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Project Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="rounded-lg overflow-hidden shadow-lg mb-12">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-4">Project Overview</h2>
              <div className="h-1 w-20 bg-gold mb-6"></div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {project.scope || "This project was completed with the highest standards of quality and precision. Our team worked closely with the client to ensure all requirements were met and exceeded expectations. The final result stands as a testament to our commitment to excellence in construction and estimation services."}
              </p>
              
              <h3 className="text-xl font-bold text-navy mb-4">Project Highlights</h3>
              <ul className="list-disc pl-5 text-gray-600 mb-8">
                <li className="mb-2">Completed on schedule and within budget</li>
                <li className="mb-2">Utilized innovative construction techniques</li>
                <li className="mb-2">Exceeded client expectations in quality and execution</li>
                <li className="mb-2">Implemented sustainable building practices</li>
                <li>Achieved all project goals and objectives</li>
              </ul>
            </div>
            
            {/* Project Details Sidebar */}
            <div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-navy mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-navy">Year</p>
                      <p className="text-gray-600">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-navy">Location</p>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-5 h-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-navy">Project Value</p>
                      <p className="text-gray-600">{project.value || "Contact for details"}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="w-5 h-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-navy">Category</p>
                      <p className="text-gray-600">{project.category}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-navy">Client</p>
                      <p className="text-gray-600">{project.client || "Confidential"}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-navy rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Need Similar Estimates?</h3>
                <p className="text-gray-300 mb-6">Contact us for reliable cost estimates on your construction project.</p>
                <Button className="bg-gold hover:bg-white hover:text-gold text-white w-full" asChild>
                  <Link to="/estimate-download">Request Sample Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects
              .filter(p => p.category === project.category && p.id !== project.id)
              .slice(0, 3)
              .map(relatedProject => (
                <div key={relatedProject.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Link to={`/portfolio/${relatedProject.id}`}>
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-navy mb-2">{relatedProject.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{relatedProject.location}</p>
                      <p className="text-sm text-gold">{relatedProject.year}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today for accurate estimates and professional construction services.
          </p>
          <Button className="bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-6" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default PortfolioDetail;
