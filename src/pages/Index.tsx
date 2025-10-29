import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Headphones, TrendingUp, Rocket, Gem, DollarSign, CheckCircle, Star, Users, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import heroImage from "@/assets/hero-person.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import technicianWork from "@/assets/technician-work.jpg";

const Index = () => {
  return (
  <div className="min-h-screen relative">
      {/* Green Gradient Touches - Random Positions */}
  <div className="hidden md:block pointer-events-none">
        <div className="absolute top-24 left-10 w-40 h-40 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
        <div className="absolute top-1/2 right-20 w-32 h-32 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-tl from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-gradient-to-bl from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '6s'}}></div>
      </div>
      <Navbar />
      
      {/* Hero Section */}
  <section className="pt-8 pb-12 px-4 sm:px-6 relative overflow-hidden min-h-screen animate-slide-up" style={{ backgroundColor: '#121212', animationDelay: '0.1s', animationFillMode: 'both' }}>
        {/* Green Gradient Touches in Hero Section */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-16 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
          <div className="absolute top-1/3 right-32 w-32 h-32 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-24 left-1/2 w-28 h-28 bg-gradient-to-tl from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="absolute inset-0">
          {/* Removed background box effect */}
        </div>

        <div className="container mx-auto relative z-10 pt-10 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 animate-zoom-in">
              
              {/* Main Heading with Stream Effect */}
              <div className="relative animate-bounce-in">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none">
                  <span className="block text-primary">
                    XTREAMLINK
                  </span>
                  <span className="block text-white mt-2">
                    SPEED
                  </span>
                  <span className="block text-primary">
                    AHEAD
                  </span>
                </h1>
                {/* Speed Lines */}
                <div className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 hidden sm:block">
                  <div className="flex flex-col space-y-2">
                    <div className="w-12 sm:w-20 h-0.5 bg-primary"></div>
                    <div className="w-10 sm:w-16 h-0.5 bg-primary"></div>
                    <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-xl">
                Experience the future of internet with <span className="text-primary font-semibold">Xtream Link</span>.<br />
                Our revolutionary fiber-optic network delivers lightning-fast speeds that power your streaming, gaming, and productivity like never before.<br />
                <span className="inline-block mt-2 font-bold text-primary bg-black/30 px-2 py-1 rounded-lg">
                  <a href="tel:8889283252" className="hover:underline">(888) 928-3252</a>
                </span>
              </p>
              
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full max-w-xs sm:max-w-none">
                <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
                  <Button className="bg-primary hover:bg-primary/90 text-black px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 group">
                    Start Streaming Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
                  <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-700 text-white hover:bg-gray-800 transition-all duration-300">
                    Check Availability
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative mt-8 md:-mt-20 animate-slide-right">
              <div className="relative flex justify-center items-center h-72 sm:h-[400px] md:h-[600px]">
                
                {/* Central Hub */}
                <div className="relative z-20">
                  <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shadow-xl">
                    <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-black border-4 border-primary flex items-center justify-center">
                      <svg className="w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </div>
                  </div>
                  {/* Rotating Speed Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary border-l-primary animate-spin" style={{animationDirection: 'reverse', animationDuration: '3s'}}></div>
                </div>

                {/* Floating Connection Nodes */}
                <div className="absolute top-4 left-4 sm:top-16 sm:left-16 z-30">
                  <div className="bg-primary p-4 rounded-2xl shadow-xl transform hover:scale-110 transition-transform duration-300">
                    <div className="text-center text-black">
                      <Zap className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-bold">10 Gbps</div>
                      <div className="text-xs opacity-80">Max Speed</div>
                    </div>
                  </div>
                  {/* Connection Line */}
                  <div className="absolute top-1/2 left-full w-16 h-px bg-primary"></div>
                </div>

                <div className="absolute top-4 right-4 sm:top-16 sm:right-16 z-30">
                  <div className="bg-gray-900 border border-gray-800 p-4 rounded-2xl shadow-xl transform hover:scale-110 transition-transform duration-300">
                    <div className="text-center">
                      <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <div className="font-bold text-white">Secure</div>
                      <div className="text-xs text-gray-400">Network</div>
                    </div>
                  </div>
                  {/* Connection Line */}
                  <div className="absolute top-1/2 right-full w-16 h-px bg-primary"></div>
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-16 sm:left-16 z-30">
                  <div className="bg-primary p-4 rounded-2xl shadow-xl transform hover:scale-110 transition-transform duration-300">
                    <div className="text-center text-black">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-bold">Unlimited</div>
                      <div className="text-xs opacity-80">Bandwidth</div>
                    </div>
                  </div>
                  {/* Connection Line */}
                  <div className="absolute top-1/2 left-full w-16 h-px bg-primary"></div>
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-16 sm:right-16 z-30">
                  <div className="bg-gray-900 border border-gray-800 p-4 rounded-2xl shadow-xl transform hover:scale-110 transition-transform duration-300">
                    <div className="text-center">
                      <Headphones className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <div className="font-bold text-white">24/7</div>
                      <div className="text-xs text-gray-400">Support</div>
                    </div>
                  </div>
                  {/* Connection Line */}
                  <div className="absolute top-1/2 right-full w-16 h-px bg-primary"></div>
                </div>

                {/* Data Stream Visualization */}
                <div className="absolute inset-0 pointer-events-none hidden sm:block">
                  <div className="absolute top-1/4 left-0 w-full h-px bg-primary/30"></div>
                  <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20"></div>
                  <div className="absolute top-3/4 left-0 w-full h-px bg-primary/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <StatsSection />
      {/* Green Gradient Touches in Stats Section */}
      <div className="pointer-events-none select-none">
        <div className="absolute top-[70vh] left-10 w-32 h-32 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
        <div className="absolute top-[80vh] right-24 w-24 h-24 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* About Us Section */}
  <section className="py-12 md:py-20 px-4 md:px-6 relative animate-slide-up" style={{backgroundColor: '#121212', animationDelay: '0.3s', animationFillMode: 'both' }}>
        {/* Green Gradient Touches in About Section */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-12 left-1/3 w-32 h-32 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
          <div className="absolute bottom-16 right-24 w-24 h-24 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 lg:pr-8 animate-slide-left" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-float-slow" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                    <Star className="w-5 h-5 text-black fill-black" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Turning Ideas Into <br />
                  <span className="text-primary">Masterpieces</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  We help our customers (that's you, our awesome subscribers) by delivering unmatched internet speeds and reliability that transform how you connect, work, and play. Our cutting-edge fiber optic network is designed with your needs in mind, providing lightning-fast connections that make a lasting impression on everything you do online.
                </p>
              </div>

              {/* Info Card */}
              <div className="bg-primary rounded-2xl p-6 md:p-8 inline-block max-w-md">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 md:h-20 bg-black/30 rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="text-black font-bold text-base md:text-lg mb-1 uppercase tracking-wide">
                      A LEADING FIBER ISP
                    </h3>
                    <p className="text-black/70 text-sm md:text-base">
                      Pioneering ultra-fast internet solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="relative h-[500px] md:h-[600px] animate-grow-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
              {/* Decorative Star - Top Left */}
              <div className="absolute -top-6 -left-6 lg:-left-12 z-10">
                <Star className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary" />
              </div>

              {/* Large Left Image */}
              <div className="absolute left-0 top-0 w-[55%] h-[65%] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop" 
                  alt="Team collaboration meeting" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Green Label on Image */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-primary rounded-xl p-4 flex items-center gap-3">
                    <div className="w-1 h-12 bg-black/30 rounded-full"></div>
                    <div>
                      <h4 className="text-black font-bold text-sm uppercase tracking-wide">
                        A CREATIVE DESIGN
                      </h4>
                      <p className="text-black/70 text-xs uppercase tracking-wide">
                        AGENCY
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Right Top Image */}
              <div className="absolute right-0 top-0 w-[42%] h-[45%] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop" 
                  alt="Professional woman working" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Lightbulb Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 md:w-14 md:h-14 z-10">
                  <div className="relative w-full h-full">
                    {/* Lightbulb outline */}
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-primary stroke-current" strokeWidth="2">
                      <path d="M9 18h6M10 22h4M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.5 14.5h7" strokeLinecap="round"/>
                    </svg>
                    {/* Glow effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Right Image (overlapping) */}
              <div className="absolute right-0 bottom-0 w-[42%] h-[50%] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop" 
                  alt="Business team discussion" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Decorative Element - Bottom */}
              <div className="absolute -bottom-4 left-[20%] w-24 h-24 hidden lg:block">
                <div className="w-full h-full border-4 border-primary/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-4 border-primary/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
  <section className="py-12 md:py-20 relative animate-slide-up" style={{backgroundColor: '#121212', animationDelay: '0.5s', animationFillMode: 'both' }}>
        {/* Green Gradient Touches in Services Section */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-10 left-1/4 w-28 h-28 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
          <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
        </div>
        <div
          className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 backdrop-blur-md rounded-2xl md:rounded-3xl"
          style={{
            background: 'rgba(255,255,255,0.10)',
            boxShadow: '0 0 32px 0 rgba(120,255,120,0.08), 0 1.5px 0 0 rgba(120,255,120,0.10) inset',
            border: '1.5px solid rgba(120,255,120,0.10)',
          }}
        >
            <div className="text-center mb-12 md:mb-16">
              <span className="text-primary text-sm font-bold tracking-wide">OUR SERVICES</span>
              <h2 className="mt-4 mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white px-4">Turning Vision Into <span className="text-primary">Reality</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
                We deliver comprehensive internet solutions designed to keep your home or business connected 24/7 with cutting-edge technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <img src={teamMeeting} alt="Team collaboration" className="w-full h-64 md:h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-black/80">
                <div className="inline-block bg-primary text-black px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-bold mb-2 text-xs md:text-sm">
                  BUSINESS SOLUTIONS
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white">Enterprise-Grade Connectivity</h3>
              </div>
            </div>
            
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <img src={technicianWork} alt="Network technician" className="w-full h-64 md:h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-black/80">
                <div className="inline-block bg-primary text-black px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-bold mb-2 text-xs md:text-sm">
                  24/7 SUPPORT
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white">Expert Technical Support</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-background p-4 md:p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary transition-colors">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-black" />
              </div>
              <h4 className="font-bold mb-1.5 md:mb-2 text-white text-sm md:text-base">Fiber Internet</h4>
              <p className="text-xs md:text-sm text-gray-400">Ultra-fast speeds up to 10 Gbps</p>
            </div>

            <div className="bg-background p-4 md:p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary transition-colors">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-black" />
              </div>
              <h4 className="font-bold mb-1.5 md:mb-2 text-white text-sm md:text-base">Network Security</h4>
              <p className="text-xs md:text-sm text-gray-400">Advanced threat protection</p>
            </div>

            <div className="bg-background p-4 md:p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary transition-colors">
                <Headphones className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-black" />
              </div>
              <h4 className="font-bold mb-1.5 md:mb-2 text-white text-sm md:text-base">24/7 Support</h4>
              <p className="text-xs md:text-sm text-gray-400">Round-the-clock assistance</p>
            </div>

            <div className="bg-background p-4 md:p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary transition-colors">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-black" />
              </div>
              <h4 className="font-bold mb-1.5 md:mb-2 text-white text-sm md:text-base">Scalable Plans</h4>
              <p className="text-xs md:text-sm text-gray-400">Grow with your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Network Coverage Section */}
  <section className="py-12 md:py-20 px-4 md:px-6 bg-card relative animate-slide-up" style={{animationDelay: '0.7s', animationFillMode: 'both' }}>
        {/* Green Gradient Touches in Coverage Section */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-16 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
          <div className="absolute bottom-8 right-1/4 w-20 h-20 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary text-sm font-bold tracking-wide">COVERAGE AREA</span>
              <h2 className="mt-4 mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white">Expanding Our <span className="text-primary">Fiber Network</span></h2>
              <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                We're continuously expanding our fiber optic infrastructure to bring ultra-fast internet to more communities. Our network covers over 500 cities and growing every month.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-1">Metro Areas</h4>
                    <p className="text-gray-400 text-sm md:text-base">Full fiber coverage in all major metropolitan areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-1">Suburban Communities</h4>
                    <p className="text-gray-400 text-sm md:text-base">Bringing gigabit speeds to suburban neighborhoods</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-1">Business Districts</h4>
                    <p className="text-gray-400 text-sm md:text-base">Enterprise-grade connectivity for businesses</p>
                  </div>
                </div>
              </div>

              <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
                <Button className="mt-6 md:mt-8 bg-primary hover:bg-primary/90 text-black font-bold px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base">
                  Check Your Area
                </Button>
              </a>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Network Performance</h3>
                  <p className="text-gray-400 text-sm md:text-base">Real-time statistics</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm md:text-base">Average Speed</span>
                      <span className="text-primary font-bold text-sm md:text-base">8.5 Gbps</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 md:h-3">
                      <div className="bg-primary h-2.5 md:h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm md:text-base">Network Uptime</span>
                      <span className="text-primary font-bold text-sm md:text-base">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 md:h-3">
                      <div className="bg-primary h-2.5 md:h-3 rounded-full" style={{width: '99.9%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm md:text-base">Customer Satisfaction</span>
                      <span className="text-primary font-bold text-sm md:text-base">98%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 md:h-3">
                      <div className="bg-primary h-2.5 md:h-3 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-card p-3 md:p-4 rounded-xl border border-border text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                    <div className="text-gray-400 text-xs md:text-sm">Cities Covered</div>
                  </div>
                  <div className="bg-card p-3 md:p-4 rounded-xl border border-border text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                    <div className="text-gray-400 text-xs md:text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Comparison Section */}
  <section className="py-12 md:py-20 relative animate-slide-up" style={{backgroundColor: '#121212', animationDelay: '0.9s', animationFillMode: 'both' }}>
        {/* Green Gradient Touches in Plans Section */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-8 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
          <div className="absolute bottom-8 right-1/3 w-20 h-20 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
        </div>
        <div
          className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 backdrop-blur-md rounded-2xl md:rounded-3xl"
          style={{
            background: 'rgba(255,255,255,0.10)',
            boxShadow: '0 0 32px 0 rgba(120,255,120,0.08), 0 1.5px 0 0 rgba(120,255,120,0.10) inset',
            border: '1.5px solid rgba(120,255,120,0.10)',
          }}
        >
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary text-sm font-bold tracking-wide">PRICING PLANS</span>
            <h2 className="mt-4 mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white px-4">Choose Your Perfect <span className="text-primary">Speed</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
              Whether you're streaming, gaming, or running a business, we have a plan that fits your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold text-white">$49</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">Up to 500 Mbps</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">Unlimited Data</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">Free Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">24/7 Support</span>
                </li>
              </ul>
              <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800 text-sm md:text-base">
                  Learn More
                </Button>
              </a>
            </div>

            <div className="bg-primary p-6 md:p-8 rounded-2xl border-4 border-primary relative transform sm:scale-105">
              <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-black px-3 md:px-4 py-1 rounded-full">
                <span className="text-primary text-xs md:text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold text-black">$79</span>
                <span className="text-black/70">/month</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                  <span className="text-black font-medium text-sm md:text-base">Up to 2 Gbps</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                  <span className="text-black font-medium text-sm md:text-base">Unlimited Data</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                  <span className="text-black font-medium text-sm md:text-base">Free Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                  <span className="text-black font-medium text-sm md:text-base">Priority Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                  <span className="text-black font-medium text-sm md:text-base">Free Router Upgrade</span>
                </li>
              </ul>
              <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
                <Button className="w-full bg-black hover:bg-black/90 text-primary font-bold text-sm md:text-base">
                  Get Started
                </Button>
              </a>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Ultra</h3>
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold text-white">$129</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">Up to 10 Gbps</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">Unlimited Data</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">Free Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">Premium Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">Advanced Router</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm md:text-base">Dedicated Line</span>
                </li>
              </ul>
              <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800 text-sm md:text-base">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-card relative">
        {/* Green Gradient Touches in Testimonials Section */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-10 left-1/3 w-20 h-20 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
          <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary text-sm font-bold tracking-wide">TESTIMONIALS</span>
            <h2 className="mt-4 mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white px-4">What Our Customers <span className="text-primary">Say</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          {/* Testimonial Cards Container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {/* Testimonial Card 1 */}
              <div className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start">
                <div className="bg-background p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-primary font-bold text-xl">
                        JS
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base md:text-lg">John Smith</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Home User</p>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    "Switched to Xtream Link 6 months ago and haven't looked back. The speeds are incredible and customer service is top-notch! I can stream 4K on multiple devices without any buffering."
                  </p>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start">
                <div className="bg-background p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-primary font-bold text-xl">
                        MJ
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base md:text-lg">Maria Johnson</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Business Owner</p>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    "As a business owner, reliable internet is crucial. Xtream Link delivers consistently with zero downtime. Highly recommended! Their dedicated support has been invaluable."
                  </p>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start">
                <div className="bg-background p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-primary font-bold text-xl">
                        DL
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base md:text-lg">David Lee</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Professional Gamer</p>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    "Gaming has never been better! Zero lag, incredible speeds, and the support team is always there when I need them. The low latency makes all the difference in competitive gaming."
                  </p>
                </div>
              </div>

              {/* Testimonial Card 4 */}
              <div className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start">
                <div className="bg-background p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-primary font-bold text-xl">
                        SC
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base md:text-lg">Sarah Chen</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Remote Worker</p>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    "Working from home requires a stable connection. Xtream Link has never let me down during important video calls. The upload speeds are fantastic for sharing large files with clients."
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              <button className="w-2 h-2 rounded-full bg-primary"></button>
              <button className="w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-500"></button>
              <button className="w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-500"></button>
              <button className="w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-500"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-12 md:py-20 relative" style={{backgroundColor: '#121212'}}>
        {/* Green Gradient Touches in Categories Section */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-8 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
          <div className="absolute bottom-8 right-1/3 w-20 h-20 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
        </div>
        <div
          className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 backdrop-blur-md rounded-2xl md:rounded-3xl"
          style={{
            background: 'rgba(255,255,255,0.10)',
            boxShadow: '0 0 32px 0 rgba(120,255,120,0.08), 0 1.5px 0 0 rgba(120,255,120,0.10) inset',
            border: '1.5px solid rgba(120,255,120,0.10)',
          }}
        >
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary text-sm font-bold tracking-wide">OUR SOLUTIONS</span>
            <h2 className="mt-4 mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white px-4">Complete Internet <span className="text-primary">Solutions</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
              Explore our comprehensive range of services designed for homes and businesses.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <button className="px-4 md:px-6 py-2 md:py-2.5 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all text-sm md:text-base">
              Fiber Internet
            </button>
            <button className="px-4 md:px-6 py-2 md:py-2.5 bg-card text-white font-semibold rounded-lg hover:bg-card/80 border border-border hover:border-primary transition-all text-sm md:text-base">
              Business Plans
            </button>
            <button className="px-4 md:px-6 py-2 md:py-2.5 bg-card text-white font-semibold rounded-lg hover:bg-card/80 border border-border hover:border-primary transition-all text-sm md:text-base">
              Home Solutions
            </button>
            <button className="px-4 md:px-6 py-2 md:py-2.5 bg-card text-white font-semibold rounded-lg hover:bg-card/80 border border-border hover:border-primary transition-all text-sm md:text-base">
              Installation
            </button>
            <button className="px-4 md:px-6 py-2 md:py-2.5 bg-card text-white font-semibold rounded-lg hover:bg-card/80 border border-border hover:border-primary transition-all text-sm md:text-base">
              Support Services
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ultra-Fast Speeds</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                Experience lightning-fast internet with speeds up to 10 Gbps. Perfect for streaming, gaming, and working from home.
              </p>
              <Link to="/services" className="text-primary font-semibold text-sm md:text-base hover:underline inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                Advanced security features including DDoS protection, firewall, and 24/7 network monitoring to keep your data safe.
              </p>
              <Link to="/services" className="text-primary font-semibold text-sm md:text-base hover:underline inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Headphones className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">24/7 Expert Support</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                Round-the-clock customer support with live chat, phone, and on-site technical assistance whenever you need it.
              </p>
              <Link to="/services" className="text-primary font-semibold text-sm md:text-base hover:underline inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                Flexible plans that grow with your needs. Easily upgrade or downgrade without penalties or long-term commitments.
              </p>
              <Link to="/pricing" className="text-primary font-semibold text-sm md:text-base hover:underline inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Rocket className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Quick Installation</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                Professional installation within 3-5 days. Our certified technicians ensure optimal setup and performance.
              </p>
              <Link to="/contact" className="text-primary font-semibold text-sm md:text-base hover:underline inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary transition-all group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Gem className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Premium Equipment</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                Free Wi-Fi 6 router, mesh network options, and enterprise-grade equipment included with all plans.
              </p>
              <Link to="/services" className="text-primary font-semibold text-sm md:text-base hover:underline inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
  <section className="py-12 md:py-20 px-4 md:px-6 bg-background relative animate-slide-up" style={{animationDelay: '1.1s', animationFillMode: 'both' }}>
        {/* Green Gradient Touches in FAQ Section */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-10 left-1/3 w-20 h-20 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
          <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Content */}
            <div className="space-y-6 lg:sticky lg:top-8">
              <div>
                <span className="text-primary text-sm font-bold tracking-wide">OUR EXPERTISE</span>
                <h2 className="mt-4 mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Have questions about our fiber internet services? We've compiled answers to the most common questions our customers ask. Can't find what you're looking for? Our support team is always here to help.
                </p>
              </div>
              
              {/* Image with overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
                <img 
                  src={technicianWork} 
                  alt="Customer support representative" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block bg-primary text-black px-4 py-2 rounded-lg font-bold mb-3 text-sm">
                    24/7 SUPPORT
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
                  <p className="text-gray-300 mb-4">Our expert team is ready to assist you</p>
                  <Link to="/contact">
                    <Button 
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 font-semibold"
                    >
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - FAQ Items */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card rounded-xl border border-border overflow-hidden data-[state=open]:border-primary">
                  <AccordionTrigger className="p-4 md:p-6 hover:no-underline hover:bg-background/50 transition-colors">
                    <div className="flex items-start gap-3 text-left w-full">
                      <span className="text-primary font-bold text-lg flex-shrink-0">01</span>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        How fast is the installation process?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-400 text-sm md:text-base pl-9">
                      Most installations are completed within 3-5 business days from the order date. Our professional technicians will schedule a convenient time and complete the installation in 2-3 hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card rounded-xl border border-border overflow-hidden data-[state=open]:border-primary">
                  <AccordionTrigger className="p-4 md:p-6 hover:no-underline hover:bg-background/50 transition-colors">
                    <div className="flex items-start gap-3 text-left w-full">
                      <span className="text-primary font-bold text-lg flex-shrink-0">02</span>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        Is there a data cap on any plans?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-400 text-sm md:text-base pl-9">
                      No! All our plans come with unlimited data. Stream, download, and browse as much as you want without worrying about data caps or overage fees. We believe in providing true unlimited internet access.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card rounded-xl border border-border overflow-hidden data-[state=open]:border-primary">
                  <AccordionTrigger className="p-4 md:p-6 hover:no-underline hover:bg-background/50 transition-colors">
                    <div className="flex items-start gap-3 text-left w-full">
                      <span className="text-primary font-bold text-lg flex-shrink-0">03</span>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        What equipment do I need?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-400 text-sm md:text-base pl-9">
                      We provide a high-performance fiber optic modem/router combo at no additional cost. The device includes Wi-Fi 6 technology, ensuring optimal coverage throughout your home or office. Our technicians will handle all the setup during installation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card rounded-xl border border-border overflow-hidden data-[state=open]:border-primary">
                  <AccordionTrigger className="p-4 md:p-6 hover:no-underline hover:bg-background/50 transition-colors">
                    <div className="flex items-start gap-3 text-left w-full">
                      <span className="text-primary font-bold text-lg flex-shrink-0">04</span>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        Can I change my plan later?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-400 text-sm md:text-base pl-9">
                      Absolutely! You can upgrade or downgrade your plan at any time. Changes typically take effect within 24 hours. There are no fees for changing plans, and you'll only pay the prorated amount for the new plan.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card rounded-xl border border-border overflow-hidden data-[state=open]:border-primary">
                  <AccordionTrigger className="p-4 md:p-6 hover:no-underline hover:bg-background/50 transition-colors">
                    <div className="flex items-start gap-3 text-left w-full">
                      <span className="text-primary font-bold text-lg flex-shrink-0">05</span>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        What about contract terms?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-400 text-sm md:text-base pl-9">
                      We offer both month-to-month and 12-month contract options. Our 12-month contracts come with discounted rates and price lock guarantee. Month-to-month plans offer maximum flexibility with no long-term commitment required.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-card rounded-xl border border-border overflow-hidden data-[state=open]:border-primary">
                  <AccordionTrigger className="p-4 md:p-6 hover:no-underline hover:bg-background/50 transition-colors">
                    <div className="flex items-start gap-3 text-left w-full">
                      <span className="text-primary font-bold text-lg flex-shrink-0">06</span>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        Do you offer business plans?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-400 text-sm md:text-base pl-9">
                      Yes! We offer specialized business plans with dedicated fiber lines, static IP addresses, higher upload speeds, SLA guarantees, and priority 24/7 technical support. Contact our business solutions team for a custom quote tailored to your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-card rounded-xl border border-border overflow-hidden data-[state=open]:border-primary">
                  <AccordionTrigger className="p-4 md:p-6 hover:no-underline hover:bg-background/50 transition-colors">
                    <div className="flex items-start gap-3 text-left w-full">
                      <span className="text-primary font-bold text-lg flex-shrink-0">07</span>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        What is your customer support availability?
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-400 text-sm md:text-base pl-9">
                      Our customer support team is available 24/7/365 via phone, live chat, and email. We also offer remote troubleshooting and can dispatch technicians for on-site support when needed. Average response time is under 2 minutes for urgent issues.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-12 md:py-20 relative overflow-hidden animate-slide-up" style={{backgroundColor: '#121212', animationDelay: '1.3s', animationFillMode: 'both' }}>
        {/* Green Gradient Touches in CTA Section */}
        <div className="pointer-events-none select-none">
          <div className="absolute top-8 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400/80 via-green-400/60 to-transparent rounded-full blur-xl z-0 animate-float-slow"></div>
          <div className="absolute bottom-8 right-1/4 w-16 h-16 bg-gradient-to-tr from-green-400/70 via-green-400/50 to-transparent rounded-full blur-xl z-0 animate-float-slow" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">Ready to Experience Blazing Fast Internet?</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have upgraded to Xtream Link. Get started today with our special promotional rates.
          </p>
          <a href="tel:8889283252" tabIndex={0} aria-label="Call Xtream Link">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch Today
            </Button>
          </a>
        </div>
      </section>

  <Footer />
    </div>
  );
};

export default Index;