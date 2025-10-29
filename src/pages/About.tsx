import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Award, Zap, Shield, TrendingUp, Globe, Clock, HeartHandshake } from "lucide-react";
import customerService from "@/assets/customer-service.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
  <section className="pt-20 md:pt-32 pb-10 md:pb-20 px-4 sm:px-6 bg-background">
  <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <span className="text-primary text-sm font-bold tracking-wide animate-fade-in" style={{animationDelay: '0.05s'}}>ABOUT US</span>
            <h1 className="mt-4 mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground animate-slide-up" style={{animationDelay: '0.15s'}}>Building the Future of <span className="text-primary">Connectivity</span></h1>
            <p className="text-base sm:text-lg text-muted-foreground animate-fade-in" style={{animationDelay: '0.25s'}}>
              For over a decade, Xtream Link has been at the forefront of bringing high-speed fiber internet to communities across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
            <div className="animate-slide-left" style={{animationDelay: '0.35s', animationFillMode: 'both'}}>
              <h2 className="mb-6 text-3xl font-bold text-foreground animate-fade-in" style={{animationDelay: '0.4s'}}>Our <span className="text-primary">Story</span></h2>
              <p className="text-muted-foreground mb-4 animate-fade-in" style={{animationDelay: '0.45s'}}>
                Founded in 2014, Xtream Link began with a simple mission: to provide reliable, lightning-fast fiber internet to underserved communities. What started as a small local operation has grown into a regional powerhouse, serving over 2,000 customers across multiple cities.
              </p>
              <p className="text-muted-foreground mb-4 animate-fade-in" style={{animationDelay: '0.55s'}}>
                We believe that access to high-speed internet is no longer a luxury—it's a necessity. From remote work and online education to streaming entertainment and smart home technology, our fiber infrastructure supports the digital lifestyle of modern families and businesses.
              </p>
              <p className="text-muted-foreground animate-fade-in" style={{animationDelay: '0.65s'}}>
                Our commitment to excellence extends beyond just providing fast speeds. We invest heavily in our fiber network infrastructure, employ experienced technicians, and maintain 24/7 customer support to ensure you're always connected when it matters most.
              </p>
            </div>
            <div className="relative min-h-[200px] animate-grow-in" style={{animationDelay: '0.75s', animationFillMode: 'both'}}>
              <div className="absolute inset-0 bg-primary/20 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl"></div>
              <img 
                src={customerService} 
                alt="Customer service representative"
                className="relative rounded-2xl md:rounded-3xl shadow-xl w-full border border-gray-800 grayscale"
              />
              {/* Black overlay for dramatic effect */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-black/40 pointer-events-none"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
            <div className="bg-card p-6 md:p-8 rounded-xl border border-border text-center hover:border-primary transition-all animate-slide-up" style={{animationDelay: '0.85s'}}>
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 animate-float-slow animate-bounce-in" style={{animationDelay: '0.9s'}}>
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground animate-fade-in" style={{animationDelay: '1.0s'}}>Our Mission</h3>
              <p className="text-muted-foreground animate-fade-in" style={{animationDelay: '1.1s'}}>
                To deliver exceptional fiber internet connectivity that empowers individuals and businesses to thrive in the digital age with ultra-fast speeds.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl border border-border text-center hover:border-primary transition-all animate-slide-up" style={{animationDelay: '1.15s'}}>
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 animate-float-slow animate-bounce-in" style={{animationDelay: '1.2s'}}>
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground animate-fade-in" style={{animationDelay: '1.3s'}}>Our Values</h3>
              <p className="text-muted-foreground animate-fade-in" style={{animationDelay: '1.4s'}}>
                Customer-first approach, technological innovation, community investment, and unwavering reliability in everything we do.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl border border-border text-center hover:border-primary transition-all animate-slide-up" style={{animationDelay: '1.45s'}}>
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 animate-float-slow animate-bounce-in" style={{animationDelay: '1.5s'}}>
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground animate-fade-in" style={{animationDelay: '1.6s'}}>Our Promise</h3>
              <p className="text-muted-foreground animate-fade-in" style={{animationDelay: '1.7s'}}>
                99.9% uptime guarantee, transparent pricing, no hidden fees, and support that actually helps when you need it.
              </p>
            </div>
          </div>

          {/* Technology Section */}
          <div className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <span className="text-primary text-sm font-bold tracking-wide animate-fade-in" style={{animationDelay: '1.8s'}}>OUR TECHNOLOGY</span>
              <h2 className="mt-4 mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground animate-slide-up" style={{animationDelay: '1.9s'}}>Powered by <span className="text-primary">Fiber Optics</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg animate-fade-in" style={{animationDelay: '2.0s'}}>
                We use cutting-edge fiber optic technology to deliver unparalleled speed and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all animate-slide-up" style={{animationDelay: '2.1s'}}>
                <Zap className="w-10 h-10 text-primary mb-4 animate-bounce-in" style={{animationDelay: '2.15s'}} />
                <h4 className="text-lg font-bold text-foreground mb-2 animate-fade-in" style={{animationDelay: '2.2s'}}>10 Gbps Speed</h4>
                <p className="text-muted-foreground text-sm animate-fade-in" style={{animationDelay: '2.25s'}}>
                  Experience lightning-fast downloads and uploads with our fiber network
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all animate-slide-up" style={{animationDelay: '2.3s'}}>
                <Shield className="w-10 h-10 text-primary mb-4 animate-bounce-in" style={{animationDelay: '2.35s'}} />
                <h4 className="text-lg font-bold text-foreground mb-2 animate-fade-in" style={{animationDelay: '2.4s'}}>Secure Network</h4>
                <p className="text-muted-foreground text-sm animate-fade-in" style={{animationDelay: '2.45s'}}>
                  Advanced encryption and security protocols protect your data
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all animate-slide-up" style={{animationDelay: '2.5s'}}>
                <TrendingUp className="w-10 h-10 text-primary mb-4 animate-bounce-in" style={{animationDelay: '2.55s'}} />
                <h4 className="text-lg font-bold text-foreground mb-2 animate-fade-in" style={{animationDelay: '2.6s'}}>Scalable Infrastructure</h4>
                <p className="text-muted-foreground text-sm animate-fade-in" style={{animationDelay: '2.65s'}}>
                  Our network grows with your needs, no bottlenecks
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all animate-slide-up" style={{animationDelay: '2.7s'}}>
                <Globe className="w-10 h-10 text-primary mb-4 animate-bounce-in" style={{animationDelay: '2.75s'}} />
                <h4 className="text-lg font-bold text-foreground mb-2 animate-fade-in" style={{animationDelay: '2.8s'}}>Wide Coverage</h4>
                <p className="text-muted-foreground text-sm animate-fade-in" style={{animationDelay: '2.85s'}}>
                  Expanding fiber network across 500+ cities nationwide
                </p>
              </div>
            </div>
          </div>

          {/* Team & Culture Section */}
          <div className="mb-12 md:mb-20 bg-card rounded-2xl md:rounded-3xl p-6 md:p-12 border border-border animate-fade-in" style={{animationDelay: '2.9s'}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-bold tracking-wide animate-fade-in" style={{animationDelay: '3.0s'}}>OUR TEAM</span>
                <h2 className="mt-4 mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground animate-slide-up" style={{animationDelay: '3.1s'}}>Experts Dedicated to <span className="text-primary">Your Connection</span></h2>
                <p className="text-muted-foreground mb-6 animate-fade-in" style={{animationDelay: '3.2s'}}>
                  Our team of over 150 professionals includes network engineers, customer support specialists, and installation technicians who are passionate about delivering excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 md:gap-4 animate-slide-left" style={{animationDelay: '3.3s'}}>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-bounce-in" style={{animationDelay: '3.35s'}}>
                      <HeartHandshake className="w-5 h-5 md:w-6 md:h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold animate-fade-in" style={{animationDelay: '3.4s'}}>Customer-Centric</h4>
                      <p className="text-muted-foreground text-sm animate-fade-in" style={{animationDelay: '3.45s'}}>Every decision we make puts customers first</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 animate-slide-left" style={{animationDelay: '3.5s'}}>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-bounce-in" style={{animationDelay: '3.55s'}}>
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold animate-fade-in" style={{animationDelay: '3.6s'}}>Always Available</h4>
                      <p className="text-muted-foreground text-sm animate-fade-in" style={{animationDelay: '3.65s'}}>24/7 support team ready to assist you</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div className="bg-background p-4 md:p-6 rounded-xl border border-border text-center animate-slide-up" style={{animationDelay: '3.7s'}}>
                    <div className="text-2xl md:text-4xl font-bold text-primary mb-2 animate-fade-in" style={{animationDelay: '3.75s'}}>150+</div>
                    <div className="text-muted-foreground text-xs md:text-base animate-fade-in" style={{animationDelay: '3.8s'}}>Team Members</div>
                  </div>
                  <div className="bg-background p-4 md:p-6 rounded-xl border border-border text-center animate-slide-up" style={{animationDelay: '3.85s'}}>
                    <div className="text-2xl md:text-4xl font-bold text-primary mb-2 animate-fade-in" style={{animationDelay: '3.9s'}}>50+</div>
                    <div className="text-muted-foreground text-xs md:text-base animate-fade-in" style={{animationDelay: '3.95s'}}>Technicians</div>
                  </div>
                  <div className="bg-background p-4 md:p-6 rounded-xl border border-border text-center animate-slide-up" style={{animationDelay: '4.0s'}}>
                    <div className="text-2xl md:text-4xl font-bold text-primary mb-2 animate-fade-in" style={{animationDelay: '4.05s'}}>98%</div>
                    <div className="text-muted-foreground text-xs md:text-base animate-fade-in" style={{animationDelay: '4.1s'}}>Satisfaction Rate</div>
                  </div>
                  <div className="bg-background p-4 md:p-6 rounded-xl border border-border text-center animate-slide-up" style={{animationDelay: '4.15s'}}>
                    <div className="text-2xl md:text-4xl font-bold text-primary mb-2 animate-fade-in" style={{animationDelay: '4.2s'}}>&lt;2h</div>
                    <div className="text-muted-foreground text-xs md:text-base animate-fade-in" style={{animationDelay: '4.25s'}}>Avg Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl md:rounded-3xl p-6 md:p-12 text-center mt-8 animate-fade-in" style={{animationDelay: '4.3s'}}>
            <h2 className="text-black mb-4 text-2xl sm:text-3xl md:text-4xl font-bold animate-slide-up" style={{animationDelay: '4.35s'}}>Why Choose Xtream Link?</h2>
            <p className="text-black/80 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8 animate-fade-in" style={{animationDelay: '4.4s'}}>
              We're not just another ISP—we're your partner in staying connected. With locally-based support teams, cutting-edge fiber-optic technology, and competitive pricing, we make it easy to get the internet service you deserve.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-black">
              <div className="animate-slide-up" style={{animationDelay: '4.45s'}}>
                <div className="text-xl md:text-4xl font-bold mb-2 animate-fade-in" style={{animationDelay: '4.5s'}}>10+</div>
                <div className="text-xs md:text-sm opacity-80 animate-fade-in" style={{animationDelay: '4.55s'}}>Years Serving</div>
              </div>
              <div className="animate-slide-up" style={{animationDelay: '4.6s'}}>
                <div className="text-xl md:text-4xl font-bold mb-2 animate-fade-in" style={{animationDelay: '4.65s'}}>2000+</div>
                <div className="text-xs md:text-sm opacity-80 animate-fade-in" style={{animationDelay: '4.7s'}}>Happy Customers</div>
              </div>
              <div className="animate-slide-up" style={{animationDelay: '4.75s'}}>
                <div className="text-xl md:text-4xl font-bold mb-2 animate-fade-in" style={{animationDelay: '4.8s'}}>99.9%</div>
                <div className="text-xs md:text-sm opacity-80 animate-fade-in" style={{animationDelay: '4.85s'}}>Uptime Rate</div>
              </div>
              <div className="animate-slide-up" style={{animationDelay: '4.9s'}}>
                <div className="text-xl md:text-4xl font-bold mb-2 animate-fade-in" style={{animationDelay: '4.95s'}}>24/7</div>
                <div className="text-xs md:text-sm opacity-80 animate-fade-in" style={{animationDelay: '5.0s'}}>Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;