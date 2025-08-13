import { Waves, Utensils, Car, Dumbbell, Wifi, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import spaImage from "@/assets/spa-amenities.jpg";
import video from "@/assets/video.mp4"
const amenities = [
  {
    icon: Waves,
    title: "Spa & Wellness",
    description: "Rejuvenate at our world-class spa with premium treatments"
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Michelin-starred restaurants with international cuisine"
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Complimentary valet service for all guests"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "24/7 state-of-the-art fitness facilities"
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary premium internet throughout the property"
  },
  {
    icon: Headphones,
    title: "Concierge",
    description: "24/7 personalized concierge service"
  }
];

export const AmenitiesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            World-Class <span className="text-luxury">Amenities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience luxury redefined with our exceptional facilities and services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amenities.map((amenity, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elegant transition-luxury group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="luxury-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-luxury-pulse">
                    <amenity.icon className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

              <video autoPlay muted loop className="w-full h-[600px] object-cover">
                <source src={video} type="video/mp4" />
              </video>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">

              {/* <img
                src={spaImage}
                alt="Luxury spa amenities"
                className="w-full h-[600px] object-cover"
              /> */}
              <div className="absolute inset-0 hero-gradient"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-serif font-bold mb-4">
                  Indulge in Pure Luxury
                </h3>
                <p className="text-lg text-white/90 max-w-sm">
                  From our infinity spa to gourmet dining, every moment is crafted for perfection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};