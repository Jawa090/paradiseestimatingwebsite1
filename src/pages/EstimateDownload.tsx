import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  FileDown, 
  Laptop, 
  CheckCircle2,
  Mail,
  User,
  Building2
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Import services data to populate the dropdown
import { servicesData } from '@/data/services';

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  serviceType: z.string().min(1, { message: "Please select a service type." }),
});

type FormValues = z.infer<typeof formSchema>;

const EstimateDownload = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      serviceType: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Simulate download
    toast({
      title: "Sample Estimate Ready!",
      description: "Your estimate sample is being downloaded.",
      variant: "default",
    });
    
    // In a real app, this would trigger a file download
    setTimeout(() => {
      console.log("Form submitted:", data);
      
      // Create a mock download by opening a new tab
      const newTab = window.open('/lovable-uploads/ec2b02b7-5116-40cb-9910-2339c0af8848.png', '_blank');
      if (newTab) newTab.focus();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Download Estimate Sample</h1>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg mb-8">
              Get a sample construction estimate to understand our detailed approach to cost analysis and project planning.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form Column */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg order-2 lg:order-1 animate-fade-in">
              <h2 className="text-2xl font-bold text-navy mb-6">Request Your Sample</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input className="pl-10" placeholder="John Doe" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input className="pl-10" placeholder="john@example.com" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input className="pl-10" placeholder="Your Company" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {servicesData.map((service) => (
                              <SelectItem key={service.id} value={service.title}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the service type most relevant to your project
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-gold hover:bg-navy text-white">
                    <FileDown className="mr-2 h-5 w-5" />
                    Download Sample Estimate
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Image Column */}
            <div className="order-1 lg:order-2">
              <div className="relative animate-fade-in">
                <div className="relative z-10">
                  <div className="bg-gray-900 rounded-t-lg pt-2 px-2">
                    <div className="flex items-center space-x-2 p-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-b-lg p-4 shadow-2xl">
                    <img 
                      src="/lovable-uploads/ec2b02b7-5116-40cb-9910-2339c0af8848.png" 
                      alt="Sample Estimate" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-white rounded-full p-3 shadow-lg animate-bounce">
                  <FileDown className="h-6 w-6" />
                </div>
                <Laptop className="absolute -top-10 -left-10 text-navy opacity-10 h-40 w-40" />
              </div>
              
              <div className="mt-12 space-y-6">
                <h3 className="text-xl font-bold text-navy">What's Included?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-navy">Detailed Line Items</h4>
                      <p className="text-gray-600">Every cost component broken down with quantities and unit prices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-navy">Material Specifications</h4>
                      <p className="text-gray-600">Comprehensive list of materials with exact specifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-navy">Labor Calculations</h4>
                      <p className="text-gray-600">Transparent breakdown of labor costs and time estimates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-navy">Cost Summary</h4>
                      <p className="text-gray-600">Clear total cost projections with optional alternates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy mb-2">How accurate are your estimates?</h3>
              <p className="text-gray-600">Our estimates typically fall within 5-10% of final costs, depending on project complexity and market conditions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy mb-2">How long does it take to prepare a custom estimate?</h3>
              <p className="text-gray-600">Depending on project size and complexity, our team can deliver estimates within 3-10 business days.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy mb-2">What information do you need to provide an estimate?</h3>
              <p className="text-gray-600">Typically we need project plans, specifications, site conditions, project timeline, and any specific requirements or constraints.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy mb-2">Do you provide revisions to estimates?</h3>
              <p className="text-gray-600">Yes, we offer revisions as project details change or as you refine your requirements.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Estimate?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our team of professional estimators is ready to provide detailed cost analysis for your specific project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gold hover:bg-white hover:text-gold text-white" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default EstimateDownload;
