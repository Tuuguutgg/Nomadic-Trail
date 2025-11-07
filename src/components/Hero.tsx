import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Award, Globe2 } from "lucide-react";

export function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://mgl.gogo.mn/newsn/np/2021/03/15/2685303/20110712-ALT_0516-191254-860266725-102133-1488005519.jpeg"
          alt="Mongolia landscape"
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
        />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm">Монголын #1 Аялалын Хамтрагч</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-center mb-4 max-w-4xl animate-[fadeIn_1s_ease-in]">
          Монголын Гайхамшигт Аялалд
          <br />
          <span className="text-amber-400">Тавтай Морилно уу</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-center mb-8 max-w-2xl text-xl text-white/90 leading-relaxed">
          Талын нүүдэлчдийн соёл, байгалийн үзэсгэлэнт газрууд, 
          түүхэн дурсгалт газрууд таныг хүлээж байна
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="text-center">
            <div className="text-amber-400 mb-1">500+</div>
            <div className="text-sm text-white/80">Аялагчид</div>
          </div>
          <div className="text-center">
            <div className="text-amber-400 mb-1">15+</div>
            <div className="text-sm text-white/80">Газар нутаг</div>
          </div>
          <div className="text-center">
            <div className="text-amber-400 mb-1">98%</div>
            <div className="text-sm text-white/80">Сэтгэл ханамж</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-600/50 transition-all hover:scale-105"
          >
            <Award className="w-5 h-5 mr-2" />
            Одоо Захиалах
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 transition-all hover:scale-105"
            onClick={() => {
              const destinationsSection = document.getElementById('destinations');
              destinationsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Globe2 className="w-5 h-5 mr-2" />
            Газруудыг Үзэх
          </Button>
        </div>
        
        {/* Features */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-wrap justify-center gap-6 px-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>Аюулгүй аялал</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span>Мэргэжлийн хөтөч</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span>Бүх зүйл багтсан</span>
          </div>
        </div>
      </div>
    </div>
  );
}
