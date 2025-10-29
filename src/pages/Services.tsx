import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wifi, Building2, Home, Shield, Headphones, Settings, ArrowRight, Zap, Cloud, Server, Radio } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Fiber Internet",
      description: "Experience blazing-fast speeds for your home with our fiber-optic network. Perfect for streaming, gaming, and working from home.",
      features: [
        "Speeds up to 1 Gbps",
        "Unlimited data usage",
        "Free professional installation",
        "Wi-Fi router included"
      ]
    },
    {
      icon: Building2,
      title: "Business Internet Solutions",
      description: "Enterprise-grade connectivity designed for businesses of all sizes. Scalable, reliable, and backed by SLA guarantees.",
      features: [
        "Dedicated fiber connections",
        "Speeds up to 10 Gbps",
        "99.9% uptime SLA",
        "Priority business support"
      ]
    },
    {
      icon: Wifi,
      title: "Managed Wi-Fi Services",
      description: "Complete Wi-Fi solutions for your property with professional installation, configuration, and ongoing management.",
      features: [
        "Enterprise-grade access points",
        "Network monitoring 24/7",
        "Guest network capabilities",
        "Remote troubleshooting"
      ]
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Protect your connection with advanced security features including firewall, threat detection, and content filtering.",
      features: [
        "Advanced firewall protection",
        "DDoS mitigation",
        "Malware blocking",
        "Parental controls"
      ]
    },
    {
      icon: Settings,
      title: "Managed IT Services",
      description: "Comprehensive IT management for businesses including network monitoring, maintenance, and optimization.",
      features: [
        "Proactive network monitoring",
        "Regular performance optimization",
        "Equipment upgrades",
        "Disaster recovery planning"
      ]
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Round-the-clock support from our expert technical team. We're here whenever you need us.",
      features: [
        "Phone, email & chat support",
        "Remote diagnostics",
        "On-site technician dispatch",
        "Same-day response guarantee"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
  <section className="pt-20 md:pt-32 pb-10 md:pb-20 px-4 sm:px-6 bg-background">
  <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <span className="text-primary text-sm font-bold tracking-wide animate-fade-in" style={{animationDelay: '0.05s'}}>OUR SERVICES</span>
            <h1 className="mt-4 mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground animate-slide-up" style={{animationDelay: '0.15s'}}>Comprehensive <span className="text-primary">Internet Solutions</span></h1>
            <p className="text-base sm:text-lg text-muted-foreground animate-fade-in" style={{animationDelay: '0.25s'}}>
              From residential fiber to enterprise connectivity, we offer a complete range of services to keep you connected with ultra-fast speeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 group animate-slide-up`}
                style={{animationDelay: `${0.35 + index * 0.15}s`}}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0 mb-2 sm:mb-0 animate-bounce-in" style={{animationDelay: `${0.4 + index * 0.15}s`}}>
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-foreground animate-fade-in" style={{animationDelay: `${0.45 + index * 0.15}s`}}>{service.title}</h3>
                    <p className="text-muted-foreground mb-2 md:mb-4 text-sm md:text-base animate-fade-in" style={{animationDelay: `${0.5 + index * 0.15}s`}}>{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 md:mb-6 ml-0 sm:ml-12 md:ml-16">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{animationDelay: `${0.55 + index * 0.15 + idx * 0.05}s`}}>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
                  <Button variant="ghost" className="ml-0 sm:ml-12 md:ml-16 text-primary hover:text-primary animate-zoom-in" style={{animationDelay: `${0.6 + index * 0.15}s`}}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="mb-10 md:mb-12">
            <div className="text-center mb-8 md:mb-12">
              <span className="text-primary text-sm font-bold tracking-wide animate-fade-in" style={{animationDelay: '1.2s'}}>ADDITIONAL FEATURES</span>
              <h2 className="mt-4 mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground animate-slide-up" style={{animationDelay: '1.3s'}}>Everything You Need for <span className="text-primary">Seamless Connectivity</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-card p-4 md:p-6 rounded-xl border border-border hover:border-primary transition-all text-center animate-slide-up" style={{animationDelay: '1.4s'}}>
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-2 md:mb-4 animate-bounce-in" style={{animationDelay: '1.45s'}} />
                <h4 className="font-bold text-foreground mb-1 md:mb-2 animate-fade-in" style={{animationDelay: '1.5s'}}>Fiber Optic Speed</h4>
                <p className="text-xs md:text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '1.55s'}}>Lightning-fast fiber connections up to 10 Gbps</p>
              </div>
              <div className="bg-card p-4 md:p-6 rounded-xl border border-border hover:border-primary transition-all text-center animate-slide-up" style={{animationDelay: '1.6s'}}>
                <Cloud className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-2 md:mb-4 animate-bounce-in" style={{animationDelay: '1.65s'}} />
                <h4 className="font-bold text-foreground mb-1 md:mb-2 animate-fade-in" style={{animationDelay: '1.7s'}}>Cloud Backup</h4>
                <p className="text-xs md:text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '1.75s'}}>Automatic backup solutions for your data</p>
              </div>
              <div className="bg-card p-4 md:p-6 rounded-xl border border-border hover:border-primary transition-all text-center animate-slide-up" style={{animationDelay: '1.8s'}}>
                <Server className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-2 md:mb-4 animate-bounce-in" style={{animationDelay: '1.85s'}} />
                <h4 className="font-bold text-foreground mb-1 md:mb-2 animate-fade-in" style={{animationDelay: '1.9s'}}>Dedicated Servers</h4>
                <p className="text-xs md:text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '1.95s'}}>High-performance hosting solutions</p>
              </div>
              <div className="bg-card p-4 md:p-6 rounded-xl border border-border hover:border-primary transition-all text-center animate-slide-up" style={{animationDelay: '2.0s'}}>
                <Radio className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-2 md:mb-4 animate-bounce-in" style={{animationDelay: '2.05s'}} />
                <h4 className="font-bold text-foreground mb-1 md:mb-2 animate-fade-in" style={{animationDelay: '2.1s'}}>Fixed Wireless</h4>
                <p className="text-xs md:text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '2.15s'}}>Alternative connectivity for remote areas</p>
              </div>
            </div>
          </div>

          {/* Service Comparison Table */}
          <div className="mb-10 md:mb-12 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden animate-fade-in" style={{animationDelay: '2.2s'}}>
            <div className="bg-gray-900 p-4 md:p-6">
              <h2 className="text-lg md:text-2xl font-bold text-foreground text-center animate-slide-up" style={{animationDelay: '2.25s'}}>Service Comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-xs md:text-base">
                <thead className="bg-gray-800">
                  <tr className="animate-fade-in" style={{animationDelay: '2.3s'}}>
                    <th className="px-2 md:px-6 py-2 md:py-4 text-left text-foreground font-bold">Feature</th>
                    <th className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground font-bold">Residential</th>
                    <th className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground font-bold">Business</th>
                    <th className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="animate-fade-in" style={{animationDelay: '2.35s'}}>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-muted-foreground">Maximum Speed</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">1 Gbps</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">5 Gbps</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">10 Gbps</td>
                  </tr>
                  <tr className="animate-fade-in" style={{animationDelay: '2.4s'}}>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-muted-foreground">Data Allowance</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-primary font-bold">Unlimited</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-primary font-bold">Unlimited</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-primary font-bold">Unlimited</td>
                  </tr>
                  <tr className="animate-fade-in" style={{animationDelay: '2.45s'}}>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-muted-foreground">Support Response</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">24 hours</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">4 hours</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">1 hour</td>
                  </tr>
                  <tr className="animate-fade-in" style={{animationDelay: '2.5s'}}>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-muted-foreground">Uptime SLA</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">99%</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">99.5%</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">99.9%</td>
                  </tr>
                  <tr className="animate-fade-in" style={{animationDelay: '2.55s'}}>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-muted-foreground">Static IP Address</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">Optional</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-primary font-bold">Included</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-primary font-bold">Multiple IPs</td>
                  </tr>
                  <tr className="animate-fade-in" style={{animationDelay: '2.6s'}}>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-muted-foreground">Equipment</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">Standard Router</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">Business Router</td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-center text-foreground">Enterprise Grade</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-primary rounded-2xl md:rounded-3xl p-6 md:p-12 text-center animate-fade-in" style={{animationDelay: '2.7s'}}>
            <h2 className="text-black mb-4 text-2xl sm:text-3xl md:text-4xl font-bold animate-slide-up" style={{animationDelay: '2.75s'}}>Need a Custom Solution?</h2>
            <p className="text-black/80 max-w-2xl mx-auto mb-6 md:mb-8 text-base sm:text-lg animate-fade-in" style={{animationDelay: '2.8s'}}>
              Our team can design a tailored fiber internet solution to meet your specific requirements. Let's discuss how we can help power your connectivity needs.
            </p>
            <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
              <Button 
                className="bg-black hover:bg-black/90 text-primary font-bold animate-zoom-in"
                size="lg"
                style={{animationDelay: '2.85s'}}
              >
                Contact Our Team
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;