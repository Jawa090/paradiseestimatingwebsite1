
import { Star, Users, User } from 'lucide-react';

const StatsShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Paradise Estimating</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With years of industry experience and a dedication to excellence, we've helped thousands of clients achieve their construction goals with precision and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Projects Completed */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-navy mb-2">2000+</h3>
                <p className="text-gray-600 font-medium">PROJECTS COMPLETED</p>
              </div>
            </div>
          </div>
          
          {/* Estimators */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="text-5xl font-bold text-navy mb-2">20+</h3>
                <p className="text-gray-600 font-medium">ESTIMATORS</p>
              </div>
            </div>
          </div>
          
          {/* Bid Wins */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="text-5xl font-bold text-navy mb-2">85%</h3>
                <p className="text-gray-600 font-medium">BID WINS</p>
              </div>
            </div>
          </div>
          
          {/* Happy Customers */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="text-5xl font-bold text-navy mb-2">2000+</h3>
                <p className="text-gray-600 font-medium">HAPPY CUSTOMERS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;
