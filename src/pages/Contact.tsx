import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-bold tracking-wide animate-fade-in" style={{animationDelay: '0.05s'}}>CONTACT US</span>
            <h1 className="mt-4 mb-6 animate-slide-up" style={{animationDelay: '0.15s'}}>Get in Touch <span className="text-primary">Today</span></h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{animationDelay: '0.25s'}}>
              Have questions about our services? Our team is ready to help you find the perfect internet solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 animate-slide-up" style={{animationDelay: '0.35s'}}>Contact Information</h2>
              <p className="text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.45s'}}>
                Reach out through any of these channels or fill out the form. We're here to help!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-fade-in" style={{animationDelay: '0.55s'}}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 animate-bounce-in" style={{animationDelay: '0.6s'}}>
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 animate-fade-in" style={{animationDelay: '0.65s'}}>Phone</h4>
                    <p className="text-muted-foreground animate-fade-in" style={{animationDelay: '0.7s'}}>(888) 928-3252</p>
                    <p className="text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '0.75s'}}>Mon-Fri 8am-8pm, Sat-Sun 9am-6pm</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-primary rounded-xl p-8 animate-fade-in" style={{animationDelay: '0.85s'}}>
                <h3 className="text-xl font-bold text-primary-foreground mb-3 animate-slide-up" style={{animationDelay: '0.9s'}}>24/7 Support Available</h3>
                <p className="text-primary-foreground/90 mb-4 animate-fade-in" style={{animationDelay: '0.95s'}}>
                  Need immediate assistance? Our technical support team is available around the clock.
                </p>
                <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
                  <Button 
                    variant="outline"
                    className="bg-background text-foreground hover:bg-background/90 animate-zoom-in"
                    style={{animationDelay: '1.0s'}}
                  >
                    Call Support Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border animate-fade-in" style={{animationDelay: '1.1s'}}>
              <h2 className="text-3xl font-bold mb-6 animate-slide-up" style={{animationDelay: '1.15s'}}>Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="animate-fade-in" style={{animationDelay: '1.25s'}}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="animate-fade-in" style={{animationDelay: '1.3s'}}>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="animate-fade-in" style={{animationDelay: '1.35s'}}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                  />
                </div>

                <div className="animate-fade-in" style={{animationDelay: '1.4s'}}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your internet needs..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full animate-zoom-in" style={{animationDelay: '1.45s'}}>
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center animate-fade-in" style={{animationDelay: '1.5s'}}>
                  By submitting this form, you agree to our Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;