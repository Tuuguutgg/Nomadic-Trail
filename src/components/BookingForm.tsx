import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    people: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.package || !date) {
      toast.error("Хэрэгтэй мэдээллийг бүрэн бөглөнө үү");
      return;
    }

    // In a real application, this would send data to a backend
    toast.success("Таны захиалга амжилттай илгээгдлээ! Бид удахгүй холбогдох болно.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      package: "",
      people: "",
      message: ""
    });
    setDate(undefined);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div id="booking" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Аялал Захиалах</CardTitle>
            <CardDescription>
              Доорх маягтыг бөглөснөөр бид танд тохирсон аялалын хөтөлбөр санал болгох болно
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Овог нэр *</Label>
                  <Input
                    id="name"
                    placeholder="Таны нэр"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">И-мэйл *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Утасны дугаар *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+976 xxxx xxxx"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="package">Аялалын хөтөлбөр *</Label>
                  <Select value={formData.package} onValueChange={(value) => handleChange("package", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gobi">Говийн Адал Явдал (7 хоног)</SelectItem>
                      <SelectItem value="nomadic">Нүүдэлчдийн Амьдрал (5 хоног)</SelectItem>
                      <SelectItem value="khuvsgul">Хөвсгөл Нуурын Аялал (6 хоног)</SelectItem>
                      <SelectItem value="history">Түүхэн Газар Аялал (4 хоног)</SelectItem>
                      <SelectItem value="custom">Хувийн хөтөлбөр</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Огноо *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? date.toLocaleDateString('mn-MN') : "Огноо сонгох"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="people">Хүний тоо</Label>
                  <Input
                    id="people"
                    type="number"
                    min="1"
                    placeholder="2"
                    value={formData.people}
                    onChange={(e) => handleChange("people", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Нэмэлт мэдээлэл</Label>
                <Textarea
                  id="message"
                  placeholder="Танд анхаарах зүйл, асуулт байвал энд бичнэ үү..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Захиалга Илгээх
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
