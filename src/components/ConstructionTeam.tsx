
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, Hammer, Wrench } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string[];
}

const ConstructionTeam = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Martinez",
      role: "Senior Construction Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: ["Project Management", "Site Safety", "Team Leadership"]
    },
    {
      name: "Sarah Thompson",
      role: "Lead Civil Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: ["Structural Design", "Site Analysis", "Regulatory Compliance"]
    },
    {
      name: "Robert Wilson",
      role: "Head Estimator",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: ["Cost Analysis", "Material Takeoffs", "Value Engineering"]
    },
    {
      name: "Emily Rodriguez",
      role: "Project Coordinator",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: ["Scheduling", "Client Relations", "Documentation"]
    }
  ];
  
  const [visibleCards, setVisibleCards] = useState(4);
  
  const constructionFacts = [
    { icon: <Building2 className="text-gold" size={36} />, count: "150+", label: "Active Projects" },
    { icon: <Users className="text-gold" size={36} />, count: "45+", label: "Team Members" },
    { icon: <Hammer className="text-gold" size={36} />, count: "25+", label: "Years Experience" },
    { icon: <Wrench className="text-gold" size={36} />, count: "500+", label: "Tools & Equipment" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Meet Our Construction Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of skilled professionals brings decades of combined experience in construction and estimating. We're committed to delivering excellence on every project.
          </p>
        </div>
        
        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {constructionFacts.map((fact, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-3">
                {fact.icon}
              </div>
              <div className="text-3xl font-bold text-navy mb-1">{fact.count}</div>
              <div className="text-gray-600">{fact.label}</div>
            </div>
          ))}
        </div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, visibleCards).map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="h-60 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy">
                    View Profile
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-gold font-medium mb-3">{member.role}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-navy hover:bg-gold text-white">
            <Link to="/about">Meet Our Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConstructionTeam;
