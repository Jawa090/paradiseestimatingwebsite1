
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EstimateShowcase = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/9657eb48-67c1-4acf-8008-15ca7787c7df.png",
      alt: "Detailed floor plan estimate with material takeoff",
      caption: "Floor Plan Estimation"
    },
    {
      src: "/lovable-uploads/0d615582-6b90-43f5-9b94-0c4b5e9b3688.png",
      alt: "Construction project cost estimation spreadsheet",
      caption: "Detailed Cost Breakdown"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Professional Construction Estimating</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get detailed, accurate estimates for your construction projects with our professional estimating services.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={images[activeImage].src} 
                alt={images[activeImage].alt} 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy bg-opacity-80 text-white p-4">
                <p className="text-sm md:text-base">{images[activeImage].caption}</p>
              </div>
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-3 w-3 rounded-full ${activeImage === index ? 'bg-gold' : 'bg-gray-300'}`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-navy mb-4">Comprehensive Estimation Services</h3>
            <p className="text-gray-600 mb-6">
              Our expert team delivers detailed estimates that include material takeoffs, 
              labor costs, equipment requirements, and complete project budgeting. 
              We use industry-leading software to ensure precision and accuracy in every project.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 mr-2">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Material takeoffs with accurate quantities</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 mr-2">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Detailed cost breakdowns by CSI division</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 mr-2">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Labor and equipment cost estimation</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 mr-2">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Project timeline and phasing recommendations</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1 mr-2">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Site preparation and earthwork analysis</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-navy hover:bg-gold text-white">
                <Link to="/services">Explore Our Estimating Services</Link>
              </Button>
              <Button className="bg-gold hover:bg-navy text-white">
                <Link to="/services/site-preparation">Learn About Site Preparation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateShowcase;
