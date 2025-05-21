
import { ClockIcon, DollarSignIcon, CheckIcon, UsersIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border-l-4 border-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-12 w-12 rounded-full bg-navy flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Affordable",
      description: "Competitive pricing that fits your budget without compromising on quality.",
      icon: <DollarSignIcon className="text-gold" size={24} />
    },
    {
      title: "Quick Turnaround",
      description: "Fast delivery of estimates to keep your projects on schedule.",
      icon: <ClockIcon className="text-gold" size={24} />
    },
    {
      title: "Accuracy First",
      description: "Precise estimates you can rely on for project planning.",
      icon: <CheckIcon className="text-gold" size={24} />
    },
    {
      title: "Responsive Staff",
      description: "Our team is always ready to assist and respond to your queries promptly.",
      icon: <UsersIcon className="text-gold" size={24} />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Paradise Estimating?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering superior estimating services that help you succeed in your construction projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-gold hover:bg-navy text-white group">
            <Link to="/about" className="flex items-center">
              Learn More About Our Approach
              <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
