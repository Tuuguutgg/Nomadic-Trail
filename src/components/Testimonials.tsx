import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Болд",
      country: "Улаанбаатар",
      rating: 5,
      text: "Говийн аялал бол миний амьдралын хамгийн гайхалтай туршлага байлаа. Three Camel Lodge нь үнэхээр таван одтой чанартай, тэмээний аялал, элсэн манхан - бүгд төгс. Хөтөч маань Бат маш сайн англи ярьдаг, Монголын түүх соёлыг гайхалтай тайлбарладаг.",
      tour: "Говийн Дэлгэц - Premium"
    },
    {
      name: "Hans Mueller",
      country: "Germany",
      rating: 5,
      text: "Хөвсгөл нуур бол миний үзсэн хамгийн цэвэр, үзэсгэлэнт нуур. Цаатан ард түмэнтэй уулзсан нь маш онцгой туршлага. Цаа буга унаж, сүү нь уусан. Тэд үнэхээр найрсаг. Toilogt Ger Camp нь нуурын дэргэд, зөгийн бал шиг амттай.",
      tour: "Хөвсгөл Нуур - Цаатны Нууц"
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      rating: 5,
      text: "Орхоны хүрхрээ үнэхээр гайхалтай. Морин аялал, Эрдэнэ Зуу хийд, малчдын гэрт зочилсон бүгд сайхан дурсамж. Хөтөч Ганаа маш найрсаг, туслалцаа сайн. Монголын хоол үнэхээр амттай, ялангуяа хорхог.",
      tour: "Орхоны Хөндий - ЮНЕСКО"
    },
    {
      name: "Emma Davies",
      country: "UK",
      rating: 5,
      text: "Алтайн аялал бол миний амьдралын адал явдал! Бүргэдийн ангуучидтай уулзсан, Таван Богд уул, казах соёл - бүгд үнэлж баршгүй. Хэцүү зам байсан ч үнэхээр үнэ цэнэтэй. Жолооч Ерлан маш туршлагатай, аюулгүй.",
      tour: "Алтай - Бүргэдийн Ангуучин"
    },
    {
      name: "Pierre Dubois",
      country: "France",
      rating: 5,
      text: "Монгол бол photography-ийн диваажин. Говийн нар жаргалт, одны тэнгэр, элсний манхан - бүх зураг гайхалтай. Зохион байгуулалт маш сайн, цаг хугацаандаа, тав тухтай машин. Дахин очих болно!",
      tour: "Говийн Дэлгэц - Premium"
    },
    
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Аялагчдын Сэтгэгдэл</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Дэлхий даяарх аялагчдын бидний аялалын тухай сэтгэгдэл
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="absolute top-4 right-4 text-amber-200">
                <Quote className="w-12 h-12" />
              </div>
              
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600">
                    <AvatarFallback className="text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.country}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-amber-600">{testimonial.tour}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white px-8 py-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-amber-600 mb-1">4.9/5.0</div>
              <div className="text-sm text-slate-600">Дундаж үнэлгээ</div>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <div className="text-amber-600 mb-1">650+</div>
              <div className="text-sm text-slate-600">Сэтгэгдэл</div>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <div className="text-amber-600 mb-1">98%</div>
              <div className="text-sm text-slate-600">Сэтгэл ханамж</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
