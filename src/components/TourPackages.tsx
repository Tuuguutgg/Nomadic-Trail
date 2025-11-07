import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Users, MapPin, Check, Eye, Star } from "lucide-react";
import { TourDetailDialog } from "./TourDetailDialog";
import { tourPackages, TourPackage } from "../lib/tourData";

export function TourPackages() {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (tour: TourPackage) => {
    setSelectedTour(tour);
    setDialogOpen(true);
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-4">Аялалын Хөтөлбөрүүд</h2>
        <p className="text-center mb-16 text-slate-600 max-w-2xl mx-auto">
          Танд тохирох аялалын хөтөлбөрийг сонгоорой. Бүх хөтөлбөр хувийн болон бүлгийн аялалд тохиромжтой.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative">
                <div className="h-56 bg-slate-200 relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-amber-600 shadow-lg">
                    ⭐ Хамгийн Алдартай
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="group-hover:text-amber-600 transition-colors flex-1">{pkg.name}</CardTitle>
                  <div className="flex items-center gap-1 text-amber-600 flex-shrink-0">
                    <Star className="w-4 h-4 fill-amber-600" />
                    <span className="text-sm">{pkg.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-3">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>Монгол</span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-slate-500">
                  {pkg.reviews} сэтгэгдэл
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {pkg.highlights.slice(0, 3).map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                  {pkg.highlights.length > 3 && (
                    <p className="text-sm text-slate-500 pl-7">+ {pkg.highlights.length - 3} бусад...</p>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t">
                  <div>
                    <div className="text-slate-500">1 хүнд</div>
                    <div className="text-amber-600">{pkg.price}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      onClick={() => handleViewDetails(pkg)}
                      className="border-amber-600 text-amber-600 hover:bg-amber-50"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Дэлгэрэнгүй
                    </Button>
                    <Button 
                      onClick={scrollToBooking} 
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      Захиалах
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <TourDetailDialog 
        tour={selectedTour}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
