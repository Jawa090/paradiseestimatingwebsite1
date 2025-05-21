
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "Project Manager, ABC Construction",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=120&h=120&fit=crop&auto=format",
      rating: 5,
      content: "Paradise Estimating has been our go-to estimating partner for over 3 years now. Their attention to detail and accuracy are unmatched in the industry. We've seen our bid success rate increase by over 35% since we started working with them."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Owner, Johnson Homes",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=120&h=120&fit=crop&auto=format",
      rating: 5,
      content: "As a residential builder, accurate estimates are crucial to our business. Paradise Estimating consistently delivers precise takeoffs that have helped us win more bids while maintaining healthy profit margins."
    },
    {
      id: 3,
      name: "Michael Williams",
      position: "Director, Williams Construction Group",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=120&h=120&fit=crop&auto=format",
      rating: 4,
      content: "We've worked with several estimating companies in the past, but Paradise Estimating stands out for their responsiveness and expertise. They've become an extension of our team, helping us scale our operations efficiently."
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Paradise Estimating.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="min-h-[320px] bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-navy text-lg text-center">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-500 text-sm text-center">{testimonials[currentIndex].position}</p>
                
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonials[currentIndex].rating ? "text-gold fill-gold" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-3/4">
                <div className="relative">
                  <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-gray-200 opacity-70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.68991 8.45999C7.16044 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9165 8.45999C14.387 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                  </svg>

                  <blockquote className="relative z-10">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {testimonials[currentIndex].content}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline"
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full p-0 bg-white hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="sr-only">Previous</span>
            </Button>

            {/* Dots for testimonials */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-6 bg-gold" : "w-2 bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button 
              variant="outline"
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full p-0 bg-white hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
