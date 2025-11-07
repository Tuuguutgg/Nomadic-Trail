import { Hero } from "./components/Hero";
import { WhyMongolia } from "./components/WhyMongolia";
import { Destinations } from "./components/Destinations";
import { TourPackages } from "./components/TourPackages";
import { Testimonials } from "./components/Testimonials";
import { BookingForm } from "./components/BookingForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyMongolia />
      <Destinations />
      <TourPackages />
      <Testimonials />
      <BookingForm />
      <Footer />
      <Toaster />
    </div>
  );
}
