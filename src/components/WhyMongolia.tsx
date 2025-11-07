import { Globe, Tent, Mountain, Users } from "lucide-react";

export function WhyMongolia() {
  const reasons = [
    {
      icon: Globe,
      title: "Гайхамшигт Байгаль",
      description: "Говийн элс, уулархаг нуруу, өргөн тал нутаг - байгалийн олон төрлийн үзэсгэлэнт газрууд"
    },
    {
      icon: Tent,
      title: "Нүүдэлчдийн Соёл",
      description: "Монголын гэр, морь, малчдын амьдралын хэв маяг - хадгалагдсан түүхэн соёл"
    },
    {
      icon: Mountain,
      title: "Адал Явдалт Аялал",
      description: "Морь унах, байгаль орчинд явган аялал, уул авирах, соёлын наадам"
    },
    {
      icon: Users,
      title: "Халуун Дотно Ард Түмэн",
      description: "Монголчууд нь зочиндоо халуун дотно, үнэнч найрсаг ард түмэн юм"
    }
  ];

  return (
    <div className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-4">
          Яагаад Монголд Ирэх Ёстой вэ?
        </h2>
        <p className="text-center mb-16 text-slate-600 max-w-2xl mx-auto">
          Монгол бол дэлхийн хамгийн онцгой аялалын газруудын нэг. 
          Энд таны хайж байсан адал явдал, амар тайван, соёл түүх бий.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center mb-4">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
