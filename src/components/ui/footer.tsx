import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Hotel XYZ</h3>
            <p className="text-navy-foreground/80 leading-relaxed">
              Experience the pinnacle of luxury hospitality with personalized service and world-class amenities.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-navy-foreground hover:text-luxury">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-navy-foreground hover:text-luxury">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-navy-foreground hover:text-luxury">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#rooms" className="text-navy-foreground/80 hover:text-luxury transition-smooth">Rooms</a></li>
              <li><a href="#amenities" className="text-navy-foreground/80 hover:text-luxury transition-smooth">Amenities</a></li>
              <li><a href="#dining" className="text-navy-foreground/80 hover:text-luxury transition-smooth">Dining</a></li>
              <li><a href="#spa" className="text-navy-foreground/80 hover:text-luxury transition-smooth">Spa</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-navy-foreground/80 hover:text-luxury transition-smooth">Concierge</a></li>
              <li><a href="#" className="text-navy-foreground/80 hover:text-luxury transition-smooth">Room Service</a></li>
              <li><a href="#" className="text-navy-foreground/80 hover:text-luxury transition-smooth">Business Center</a></li>
              <li><a href="#" className="text-navy-foreground/80 hover:text-luxury transition-smooth">Event Planning</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-luxury" />
                <span className="text-navy-foreground/80 text-sm">123 Luxury Avenue, Premium District</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-luxury" />
                <span className="text-navy-foreground/80 text-sm">+91 9988771234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-luxury" />
                <span className="text-navy-foreground/80 text-sm">reservations@xyz.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/20 mt-12 pt-8 text-center">
          <p className="text-navy-foreground/80 text-sm">
            © 2025 Hotel XYZ. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};