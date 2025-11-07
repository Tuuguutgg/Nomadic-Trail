import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { TourPackage } from "../lib/tourData";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Clock, Users, Calendar, MapPin, Car, Hotel, Check, X, 
  Mountain, UtensilsCrossed, Star, ChevronRight, Award 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollArea } from "./ui/scroll-area";

interface TourDetailDialogProps {
  tour: TourPackage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TourDetailDialog({ tour, open, onOpenChange }: TourDetailDialogProps) {
  if (!tour) return null;

  const scrollToBooking = () => {
    onOpenChange(false);
    setTimeout(() => {
      const bookingSection = document.getElementById('booking');
      bookingSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="h-[90vh]">
          <div className="relative">
            {/* Hero Image */}
            <div className="relative h-[400px] overflow-hidden">
              <ImageWithFallback
                src={tour.image}
                alt={tour.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  {tour.popular && (
                    <Badge className="bg-amber-600">⭐ Алдартай</Badge>
                  )}
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                    {tour.difficulty}
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600/90 text-white">
                    ⭐ {tour.rating}/5.0 ({tour.reviews} сэтгэгдэл)
                  </Badge>
                </div>
                <DialogHeader>
                  <DialogTitle className="text-white mb-2">{tour.name}</DialogTitle>
                </DialogHeader>
                <p className="text-white/90 mb-4">{tour.description}</p>
                
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-400" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <span>{tour.bestSeason}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400">{tour.price}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <Tabs defaultValue="itinerary" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="itinerary">Хөтөлбөр</TabsTrigger>
                  <TabsTrigger value="gallery">Зургууд</TabsTrigger>
                  <TabsTrigger value="included">Багтсан</TabsTrigger>
                  <TabsTrigger value="accommodation">Байр/Хоол</TabsTrigger>
                  <TabsTrigger value="logistics">Логистик</TabsTrigger>
                  <TabsTrigger value="highlights">Онцлог</TabsTrigger>
                </TabsList>

                {/* Itinerary Tab */}
                <TabsContent value="itinerary" className="mt-6 space-y-6">
                  <div>
                    <h3 className="mb-4 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-amber-600" />
                      Өдөр тутмын хөтөлбөр
                    </h3>
                    <div className="space-y-6">
                      {tour.itinerary.map((day, index) => (
                        <div key={index} className="relative pl-8 pb-6 border-l-2 border-amber-200 last:border-0">
                          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm">
                            {day.day}
                          </div>
                          <div className="bg-slate-50 rounded-lg p-6">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="text-slate-500 mb-1">Өдөр {day.day}</div>
                                <h4 className="mb-2">{day.title}</h4>
                              </div>
                            </div>
                            <p className="text-slate-600 mb-4">{day.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-sm mb-2 text-slate-500">Үйл ажиллагаа:</div>
                                <ul className="space-y-1">
                                  {day.activities.map((activity, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                      <ChevronRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                      {activity}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <div className="text-sm mb-2 text-slate-500 flex items-center gap-1">
                                  <UtensilsCrossed className="w-4 h-4" />
                                  Хооллолт:
                                </div>
                                <ul className="space-y-1">
                                  {day.meals.map((meal, idx) => (
                                    <li key={idx} className="text-sm text-slate-700">{meal}</li>
                                  ))}
                                </ul>
                                <div className="text-sm mt-3 text-slate-500 flex items-center gap-1">
                                  <Hotel className="w-4 h-4" />
                                  Байр:
                                </div>
                                <p className="text-sm text-slate-700">{day.accommodation}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Gallery Tab */}
                <TabsContent value="gallery" className="mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    {tour.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                        <ImageWithFallback
                          src={image}
                          alt={`${tour.name} - зураг ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Included/Excluded Tab */}
                <TabsContent value="included" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-green-700">
                        <Check className="w-6 h-6" />
                        Үнэд багтсан
                      </h3>
                      <ul className="space-y-3">
                        {tour.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-red-700">
                        <X className="w-6 h-6" />
                        Үнэд багтаагүй
                      </h3>
                      <ul className="space-y-3">
                        {tour.excluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border-2 border-amber-300">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-6 h-6 text-amber-700" />
                      <h4 className="text-amber-900">Үнийн мэдээлэл</h4>
                    </div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-slate-600">Нэг хүнд:</span>
                      <span className="text-amber-700">{tour.price}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      * Үнэ нь {tour.groupSize} тооны бүлэгт үндэслэсэн. Бага бүлгийн хувьд үнэ өөр байж болно.
                    </p>
                    <div className="pt-3 border-t border-amber-200">
                      <p className="text-sm text-amber-800">
                        💳 Төлбөр: Шилжүүлэг, Бэлэн мөнгө, Картаар
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Accommodation & Food Tab */}
                <TabsContent value="accommodation" className="mt-6 space-y-6">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="mb-4 flex items-center gap-2">
                      <Hotel className="w-6 h-6 text-amber-600" />
                      Байрлах газрууд
                    </h3>
                    <h4 className="mb-3">{tour.accommodation.type}</h4>
                    <p className="text-slate-700 mb-4">{tour.accommodation.description}</p>
                    
                    <div className="space-y-3">
                      <div className="text-sm mb-2">Таны байрлах газрууд:</div>
                      {tour.accommodation.hotels.map((hotel, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                          <Hotel className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{hotel}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="mb-4 flex items-center gap-2">
                      <UtensilsCrossed className="w-6 h-6 text-amber-600" />
                      Хоолны газрууд & Хоол
                    </h3>
                    
                    <div className="space-y-3">
                      {tour.restaurants.map((restaurant, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                          <UtensilsCrossed className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{restaurant}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800">
                        ✓ Бүх хоол органик, цэвэр орчинд бэлтгэгдсэн<br/>
                        ✓ Вегетариан, аллергитай хүмүүст тусгай хоол боломжтой<br/>
                        ✓ Усны сав, цай үргэлж олгоно
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Logistics Tab */}
                <TabsContent value="logistics" className="mt-6 space-y-6">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="mb-4 flex items-center gap-2">
                      <Car className="w-6 h-6 text-amber-600" />
                      Тээврийн хэрэгсэл
                    </h3>
                    <h4 className="mb-2">{tour.transportation.type}</h4>
                    <p className="text-slate-700">{tour.transportation.description}</p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="mb-4 flex items-center gap-2">
                      <Hotel className="w-6 h-6 text-amber-600" />
                      Байрлах газар
                    </h3>
                    <h4 className="mb-2">{tour.accommodation.type}</h4>
                    <p className="text-slate-700">{tour.accommodation.description}</p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="mb-4 flex items-center gap-2">
                      <Mountain className="w-6 h-6 text-amber-600" />
                      Хүндрэлийн түвшин ба улирал
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Хүндрэл:</div>
                        <Badge variant={tour.difficulty === 'Хялбар' ? 'secondary' : 'default'}>
                          {tour.difficulty}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Хамгийн сайн улирал:</div>
                        <p className="text-slate-700">{tour.bestSeason}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Highlights Tab */}
                <TabsContent value="highlights" className="mt-6">
                  <h3 className="mb-4">Аялалын онцлох зүйлүүд</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-700">{highlight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-white mb-1">Энэ аялалд очихыг хүсч байна уу?</h4>
                    <p className="text-white/90">Захиалга өгөөд бид тантай холбогдох болно</p>
                  </div>
                  <Button 
                    size="lg" 
                    onClick={scrollToBooking}
                    className="bg-white text-amber-700 hover:bg-white/90"
                  >
                    Одоо Захиалах
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
