import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, ArrowRight, Eye, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

export function Destinations() {
  const destinations = [
    {
      name: "Говийн Гурван Сайхан",
      location: "Өмнөговь аймаг",
      image: "https://images.unsplash.com/photo-1571821807771-62cf66ac3f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMEdvYmklMjBkZXNlcnQlMjBkdW5lcyUyMHN1bnNldHxlbnwxfHx8fDE3NjI0Mjk5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Хонгорын элс (300м), Баянзаг, Ёлын Ам. Дэлхийн TOP 10 элсэн цөл",
      tags: ["Алдартай", "Элс", "Адал"],
      visitors: "15,000+/жил",
      popular: true
    },
    {
      name: "Хөвсгөл Нуур",
      location: "Хөвсгөл аймаг",
      image: "https://images.unsplash.com/photo-1761794681437-2dd63d7f0075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaHV2c2d1bCUyMGxha2UlMjBNb25nb2xpYSUyMGJsdWUlMjB3YXRlcnxlbnwxfHx8fDE3NjI0Mjk5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Монголын 'Хөх тэнгис' - дэлхийн 1% цэнгэг ус. Цаатан ард түмэн",
      tags: ["Алдартай", "Нуур", "Цаатан"],
      visitors: "12,000+/жил",
      popular: true
    },
    {
      name: "Тэрэлж Үндэсний Цэцэрлэг",
      location: "Төв аймаг (80км УБ)",
      image: "https://images.unsplash.com/photo-1695554426330-5db85e2ea8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZXJlbGolMjBuYXRpb25hbCUyMHBhcmslMjByb2NrJTIwZm9ybWF0aW9ufGVufDF8fHx8MTc2MjQyOTkyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Мэлхий чулуу, Чингисийн морьт хөшөө. УБ-аас ойр",
      tags: ["Хялбар", "Морь", "Weekend"],
      visitors: "50,000+/жил",
      popular: true
    },
    {
      name: "Орхоны Хөндий",
      location: "Өвөрхангай аймаг",
      image: "https://images.unsplash.com/photo-1755764730702-11c31491c2ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPcmtob24lMjB2YWxsZXklMjB3YXRlcmZhbGwlMjBNb25nb2xpYXxlbnwxfHx8fDE3NjI0Mjk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "ЮНЕСКО дэлхийн өв. Улаан цутгалан (20м), Хархорин, Эрдэнэ Зуу",
      tags: ["ЮНЕСКО", "Түүх", "Хүрхрээ"],
      visitors: "8,000+/жил",
      popular: true
    },
    {
      name: "Алтай Таван Богд",
      location: "Баян-Өлгий аймаг",
      image: "https://images.unsplash.com/photo-1552128436-05262280b292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbHRhaSUyMG1vdW50YWlucyUyME1vbmdvbGlhJTIwc25vd3xlbnwxfHx8fDE3NjI0Mjk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Монголын хамгийн өндөр уул (4374м). Бүргэдийн баяр, Казах соёл",
      tags: ["Алдартай", "Уул", "Бүргэд"],
      visitors: "3,500+/жил",
      popular: false
    },
    {
      name: "Хустайн Нуруу",
      location: "Төв аймаг (100км УБ)",
      image: "https://images.unsplash.com/photo-1625846275561-10483f1dbbcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMHN0ZXBwZSUyMGdyYXNzbGFuZCUyMGhvcnNlc3xlbnwxfHx8fDE3NjI0Mjk5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Тахь (Przewalski морь) - зэрлэг адууны сүүлчийн төрөл",
      tags: ["Экология", "Морь", "Хамгаалалт"],
      visitors: "6,000+/жил",
      popular: false
    },
    {
      name: "Янгиж эх / Шишгэд нуур",
      location: "Хөвсгөл аймаг (Hidden Gem)",
      image: "https://content.ikon.mn/news/2014/12/3/bf1e61_10498658_324740271014233_9081287196683386403_o_x974.jpg",
      description: "Далд нууц нуурууд. Жилд 200 хүн очдог. Дархад хотгор",
      tags: ["Нууц", "Хүнгүй", "Онцгой"],
      visitors: "<300/жил",
      popular: false,
      hidden: true
    },
    {
      name: "Цагаан Суварга",
      location: "Дундговь аймаг",
      image: "https://th.bing.com/th/id/R.79bc09ada3fb9bd046d6d7aac1d87d20?rik=OhJKaOcszSAA8Q&riu=http%3a%2f%2fcontent.page.mn%2fuploads%2fusers%2f196%2fimages%2f2_885afbb42f65b02915257889fb30a83eba54e9c9.jpg&ehk=NeDIH2ltE3%2f%2bpjh%2f3tHGtP8YXKKU6LQ9kZqDbDs0nTU%3d&risl=&pid=ImgRaw&r=0",
      description: "Тэнгисийн ёроолын шохойн цагаан хад. 60 сая жилийн түүхтэй",
      tags: ["Геологи", "Фото", "Онцгой"],
      visitors: "2,000+/жил",
      popular: false,
      hidden: true
    },
    {
      name: "Хөвтөн нуур",
      location: "Баян-Өлгий (Hidden Gem)",
      image: "https://images.unsplash.com/photo-1636921615636-172e85dedccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjBjcnlzdGFsJTIwY2xlYXJ8ZW58MXx8fHwxNzYyNDI5OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Алтайн нууц мөстэй нуур. Жилд 150 хүн очдог",
      tags: ["Нууц", "Уул", "Кэмпинг"],
      visitors: "<200/жил",
      popular: false,
      hidden: true
    }
  ];

  const scrollToPackages = () => {
    const packagesSection = document.querySelector('.py-20.px-4.bg-slate-50');
    packagesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="destinations" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="mb-4">Монголын Гайхалтай Газрууд</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Алдартай газруудаас эхлээд маш цөөн хүн очдог далд газрууд хүртэл
          </p>
        </div>

        {/* Popular Destinations */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-amber-600" />
            <h3>Хамгийн Алдартай Газрууд</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.filter(d => d.popular).map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all cursor-pointer group border-0 shadow-lg">
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white shadow-lg">
                      🔥 {destination.visitors}
                    </Badge>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="text-white mb-1">{destination.name}</h4>
                        <p className="text-white/80 text-sm">{destination.location}</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm mb-4">{destination.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hidden Gems */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-6 h-6 text-purple-600" />
            <h3>Далд Нууц Газрууд</h3>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              Цөөхөн хүн очдог
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.filter(d => d.hidden).map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all cursor-pointer group border-2 border-purple-200 hover:border-purple-400">
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600 text-white shadow-lg">
                      💎 {destination.visitors}
                    </Badge>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-purple-300 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="text-white mb-1">{destination.name}</h4>
                        <p className="text-white/80 text-sm">{destination.location}</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm mb-4">{destination.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-purple-500/30 backdrop-blur-sm text-white border-purple-300/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-50 to-purple-50 rounded-2xl p-12">
          <h3 className="mb-4">Эдгээр бүх газрууд манай аялалд багтана</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Та өөрийн сонирхолд тохирсон газруудыг сонгож, бид танд тусгайлан аялалын хөтөлбөр боловсруулна
          </p>
          <Button 
            onClick={scrollToPackages}
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg"
          >
            Аялалын Хөтөлбөрүүдийг Үзэх
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
