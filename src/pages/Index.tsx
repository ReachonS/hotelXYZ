import { HeroSection } from "@/components/ui/hero-section";
import { RoomsSection } from "@/components/ui/rooms-section";
import { AmenitiesSection } from "@/components/ui/amenities-section";
import Image from "@/components/ui/photo-section/image";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <RoomsSection />
      <AmenitiesSection />
      <Image/>
      <Footer />
    </div>
  );
};

export default Index;
