import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, HelpCircle } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      speed: "100 Mbps",
      price: "39.99",
      features: [
        "Perfect for browsing & email",
        "Unlimited data",
        "Free installation",
        "Wi-Fi router included",
        "24/7 customer support"
      ],
      popular: false
    },
    {
      name: "Pro",
      speed: "500 Mbps",
      price: "59.99",
      features: [
        "Great for streaming & gaming",
        "Unlimited data",
        "Free installation",
        "Premium Wi-Fi router",
        "Priority support",
        "Free security suite"
      ],
      popular: true
    },
    {
      name: "Ultra",
      speed: "1 Gbps",
      price: "89.99",
      features: [
        "Ultimate speed for power users",
        "Unlimited data",
        "Free installation",
        "Mesh Wi-Fi system",
        "Premium priority support",
        "Advanced security suite",
        "Static IP address"
      ],
      popular: false
    }
  ];

  const businessPlans = [
    {
      name: "Business Starter",
      speed: "500 Mbps",
      price: "99.99",
      features: [
        "Dedicated connection",
        "99.9% uptime SLA",
        "5 static IP addresses",
        "Priority support",
        "Free installation"
      ]
    },
    {
      name: "Business Pro",
      speed: "1 Gbps",
      price: "199.99",
      features: [
        "Dedicated fiber connection",
        "99.9% uptime SLA",
        "10 static IP addresses",
        "24/7 dedicated support",
        "Free installation",
        "Managed firewall"
      ]
    },
    {
      name: "Enterprise",
      speed: "Custom",
      price: "Custom",
      features: [
        "Scalable bandwidth",
        "99.99% uptime SLA",
        "Unlimited static IPs",
        "Dedicated account manager",
        "Custom installation",
        "Full managed services"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-14 px-2 sm:px-4 md:px-6 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-primary text-sm font-bold tracking-wide animate-fade-in" style={{animationDelay: '0.05s'}}>PRICING</span>
            <h1 className="mt-4 mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground animate-slide-up" style={{animationDelay: '0.15s'}}>Simple, <span className="text-primary">Transparent</span> Pricing</h1>
            <p className="text-base sm:text-lg text-muted-foreground animate-fade-in" style={{animationDelay: '0.25s'}}>
              Choose the perfect fiber internet plan for your needs. No hidden fees, no surprises. Just fast, reliable internet.
            </p>
          </div>

          {/* Residential Plans */}
          <div className="mb-14 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground animate-slide-up" style={{animationDelay: '0.35s'}}>Residential Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-xl border-2 p-5 sm:p-6 md:p-8 relative hover:shadow-xl transition-all animate-slide-up ${
                    plan.popular ? "border-primary transform scale-105" : "border-border"
                  }`}
                  style={{animationDelay: `${0.4 + index * 0.15}s`}}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold animate-bounce-in" style={{animationDelay: `${0.45 + index * 0.15}s`}}>
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-foreground animate-fade-in" style={{animationDelay: `${0.5 + index * 0.15}s`}}>{plan.name}</h3>
                    <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2 animate-fade-in" style={{animationDelay: `${0.55 + index * 0.15}s`}}>{plan.speed}</div>
                    <div className="text-muted-foreground animate-fade-in" style={{animationDelay: `${0.6 + index * 0.15}s`}}>
                      <span className="text-2xl sm:text-3xl font-bold text-foreground">${plan.price}</span><span className="text-base">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 animate-fade-in" style={{animationDelay: `${0.65 + index * 0.15 + idx * 0.05}s`}}>
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtreamlinq" className="block mt-2">
                    <Button 
                      className={plan.popular ? "w-full bg-primary hover:bg-primary/90 text-black font-bold animate-zoom-in" : "w-full border-gray-700 animate-zoom-in"}
                      variant={plan.popular ? "default" : "outline"}
                      style={{animationDelay: `${0.7 + index * 0.15}s`}}
                    >
                      Get Started
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Business Plans */}
          <div className="mb-14 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground animate-slide-up" style={{animationDelay: '0.95s'}}>Business Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {businessPlans.map((plan, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border p-5 sm:p-6 md:p-8 hover:border-primary transition-all duration-300 animate-slide-up"
                  style={{animationDelay: `${1.0 + index * 0.15}s`}}
                >
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-foreground animate-fade-in" style={{animationDelay: `${1.05 + index * 0.15}s`}}>{plan.name}</h3>
                    <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2 animate-fade-in" style={{animationDelay: `${1.1 + index * 0.15}s`}}>{plan.speed}</div>
                    <div className="text-muted-foreground animate-fade-in" style={{animationDelay: `${1.15 + index * 0.15}s`}}>
                      {plan.price === "Custom" ? (
                        <span className="text-lg sm:text-2xl font-bold text-foreground">Contact Us</span>
                      ) : (
                        <>
                          <span className="text-2xl sm:text-3xl font-bold text-foreground">${plan.price}</span><span className="text-base">/mo</span>
                        </>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 animate-fade-in" style={{animationDelay: `${1.2 + index * 0.15 + idx * 0.05}s`}}>
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtreamlinq" className="block mt-2">
                    <Button variant="outline" className="w-full border-gray-700 animate-zoom-in" style={{animationDelay: `${1.25 + index * 0.15}s`}}>
                      Contact Sales
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Add-Ons Section */}
          <div className="mb-14 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground animate-slide-up" style={{animationDelay: '1.55s'}}>Optional Add-Ons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[0,1,2].map((idx) => (
                <div key={idx} className="bg-card p-4 sm:p-6 rounded-xl border border-border hover:border-primary transition-all animate-slide-up" style={{animationDelay: `${1.6 + idx * 0.15}s`}}>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2 animate-fade-in" style={{animationDelay: `${1.65 + idx * 0.15}s`}}>{["Mesh WiFi System","Security Suite Pro","Static IP Address"][idx]}</h4>
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-4 animate-fade-in" style={{animationDelay: `${1.7 + idx * 0.15}s`}}>{["+$15/mo","+$10/mo","+$5/mo"][idx]}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 animate-fade-in" style={{animationDelay: `${1.75 + idx * 0.15}s`}}>{[
                    "Whole-home coverage with seamless roaming. Perfect for larger homes.",
                    "Advanced protection for all your devices against online threats.",
                    "Dedicated IP address for hosting servers or remote access."
                  ][idx]}</p>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {[
                      [
                        "Up to 5,000 sq ft coverage",
                        "Self-optimizing network"
                      ],
                      [
                        "Antivirus for 10 devices",
                        "VPN included"
                      ],
                      [
                        "Never changes",
                        "Ideal for businesses"
                      ]
                    ][idx].map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 animate-fade-in" style={{animationDelay: `${1.8 + idx * 0.15 + fidx * 0.05}s`}}>
                        <Check className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-14 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground animate-slide-up" style={{animationDelay: '2.0s'}}>Detailed Plan Comparison</h2>
            <div className="bg-card rounded-2xl border border-border overflow-x-auto animate-fade-in" style={{animationDelay: '2.05s'}}>
              <table className="w-full min-w-[600px] text-xs sm:text-sm">
                <thead className="bg-gray-800">
                  <tr className="animate-fade-in" style={{animationDelay: '2.1s'}}>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-foreground font-bold">Feature</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground font-bold">Basic</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground font-bold">Pro</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground font-bold">Ultra</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[0,1,2,3,4,5,6].map((idx) => (
                    <tr key={idx} className="animate-fade-in" style={{animationDelay: `${2.15 + idx * 0.05}s`}}>
                      {[
                        [<td className="px-3 sm:px-6 py-3 sm:py-4 text-muted-foreground font-medium">Download Speed</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground">100 Mbps</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-primary font-bold">500 Mbps</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground">1 Gbps</td>],
                        [<td className="px-3 sm:px-6 py-3 sm:py-4 text-muted-foreground font-medium">Upload Speed</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground">100 Mbps</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-primary font-bold">500 Mbps</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground">1 Gbps</td>],
                        [<td className="px-3 sm:px-6 py-3 sm:py-4 text-muted-foreground font-medium">Data Cap</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-primary">Unlimited</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-primary">Unlimited</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-primary">Unlimited</td>],
                        [<td className="px-3 sm:px-6 py-3 sm:py-4 text-muted-foreground font-medium">Ideal For</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground text-xs sm:text-sm">1-2 devices</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground text-xs sm:text-sm">3-5 devices</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground text-xs sm:text-sm">6+ devices</td>],
                        [<td className="px-3 sm:px-6 py-3 sm:py-4 text-muted-foreground font-medium">4K Streaming</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center"><X className="w-5 h-5 text-gray-600 mx-auto" /></td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>],
                        [<td className="px-3 sm:px-6 py-3 sm:py-4 text-muted-foreground font-medium">Gaming</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground text-xs sm:text-sm">Basic</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground text-xs sm:text-sm">Excellent</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-primary font-bold text-xs sm:text-sm">Pro Level</td>],
                        [<td className="px-3 sm:px-6 py-3 sm:py-4 text-muted-foreground font-medium">Router Quality</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground text-xs sm:text-sm">Standard</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground text-xs sm:text-sm">Premium</td>,<td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-foreground text-xs sm:text-sm">Mesh System</td>]
                      ][idx]}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground animate-slide-up" style={{animationDelay: '2.4s'}}>Pricing FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {[0,1,2].map((idx) => (
                <div key={idx} className="bg-card p-4 sm:p-6 rounded-xl border border-border animate-fade-in" style={{animationDelay: `${2.45 + idx * 0.1}s`}}>
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-bounce-in" style={{animationDelay: `${2.5 + idx * 0.1}s`}} />
                    <div>
                      <h4 className="font-bold text-foreground mb-2 animate-fade-in" style={{animationDelay: `${2.55 + idx * 0.1}s`}}>{["Are there any setup fees?","Can I change plans later?","Is there a contract?"][idx]}</h4>
                      <p className="text-muted-foreground text-sm animate-fade-in" style={{animationDelay: `${2.6 + idx * 0.1}s`}}>{[
                        "No! Installation is completely free on all plans. Our technicians will come to your location and set everything up at no additional cost.",
                        "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
                        "No contracts required! You can cancel anytime with 30 days notice. We're confident you'll love our service."
                      ][idx]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 sm:mt-16 bg-card rounded-xl border border-border p-5 sm:p-8 text-center animate-fade-in" style={{animationDelay: '2.8s'}}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground animate-slide-up" style={{animationDelay: '2.85s'}}>All Plans Include</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left max-w-4xl mx-auto">
              {[0,1,2,3].map((idx) => (
                <div key={idx} className="animate-slide-up" style={{animationDelay: `${2.9 + idx * 0.05}s`}}>
                  <Check className="w-5 h-5 text-primary mb-1 sm:mb-2 animate-bounce-in" style={{animationDelay: `${2.95 + idx * 0.05}s`}} />
                  <p className="text-xs sm:text-sm font-medium text-foreground animate-fade-in" style={{animationDelay: `${3.0 + idx * 0.05}s`}}>{["No data caps","No contracts","Free installation","30-day guarantee"][idx]}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 animate-fade-in" style={{animationDelay: `${3.05 + idx * 0.05}s`}}>{["Truly unlimited usage","Cancel anytime","Professional setup","Risk-free trial"][idx]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;