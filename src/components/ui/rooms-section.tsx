import { Star, Wifi, Coffee, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import luxurySuite from "@/assets/luxury-suite.jpg";
import deluxeRoom from "@/assets/deluxe-room.jpg";

const rooms = [
  {
    id: 1,
    name: "Luxury Suite",
    price: "$899",
    image: luxurySuite,
    rating: 4.9,
    amenities: ["King Bed", "Ocean View", "Private Balcony", "Mini Bar"],
    features: [Wifi, Coffee, Bath],
    description: "Spacious suite with panoramic ocean views and premium amenities"
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: "$599",
    image: deluxeRoom,
    rating: 4.8,
    amenities: ["Queen Bed", "City View", "Work Desk", "Premium Linens"],
    features: [Wifi, Coffee],
    description: "Elegant room with modern design and city skyline views"
  }
];

export const RoomsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our <span className="text-luxury">Premium</span> Rooms
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collection of rooms designed for the ultimate comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <Card 
              key={room.id} 
              className="overflow-hidden shadow-elegant hover:shadow-luxury transition-luxury group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-luxury"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="luxury-gradient text-navy-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {room.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-3xl font-bold">{room.price}</div>
                  <div className="text-white/80 text-sm">per night</div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{room.name}</h3>
                    <p className="text-muted-foreground">{room.description}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Features</h4>
                  <div className="flex gap-4">
                    {room.features.map((Feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <Feature className="h-4 w-4" />
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full luxury-gradient hover:shadow-luxury transition-luxury"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};