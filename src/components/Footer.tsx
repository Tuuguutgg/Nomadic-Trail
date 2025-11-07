import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Монгол Аялал</h3>
            <p className="text-slate-400">
              Монголын гайхамшигт газруудыг судлах таны найдвартай хамтрагч
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Холбоосууд</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#destinations" className="hover:text-amber-600 transition-colors">Газрууд</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Хөтөлбөрүүд</a></li>
              <li><a href="#booking" className="hover:text-amber-600 transition-colors">Захиалах</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Бидний тухай</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Холбоо барих</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+976 88241395</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Mongolaylal@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Улаанбаатар, Монгол</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Биднийг дагаарай</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Монгол Аялал. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}
