import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import potIcon from "@/assets/indicraft-pot-icon.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-heritage text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={potIcon} 
                alt="Indicraft Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-sanskrit font-bold text-xl">Indicraft</span>
            </div>
            <p className="text-white/90 mb-4 max-w-md text-sm sm:text-base">
              Bringing authentic Indian handicrafts to global homes. Supporting artisans, 
              preserving heritage, and celebrating the beauty of traditional craftsmanship.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>hello@indicraft.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sanskrit font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white/80 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/artisan-stories" className="text-white/80 hover:text-white transition-colors">
                  Artisan Stories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sanskrit font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Pattabiram,<br />
                  Chennai, Tamil Nadu
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span className="text-white/80">8610677504</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © 2025 Indicraft. All rights reserved. Made by Tharun Kumar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;