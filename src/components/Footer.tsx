import { Link } from "react-router-dom";
import { Wifi, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">X</span>
              </div>
              <span className="text-2xl font-bold text-white">Xtream Link</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Connecting communities with ultra-fast, reliable internet service.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary text-sm transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-gray-400 hover:text-primary text-sm transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>(888) 928-3252</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Xtream Link ISP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;