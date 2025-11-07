export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  groupSize: string;
  price: string;
  pricePerPerson: number;
  image: string;
  gallery: string[];
  highlights: string[];
  popular: boolean;
  description: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    meals: string[];
    accommodation: string;
  }[];
  included: string[];
  excluded: string[];
  transportation: {
    type: string;
    description: string;
  };
  accommodation: {
    type: string;
    description: string;
    hotels: string[];
  };
  restaurants: string[];
  bestSeason: string;
  difficulty: string;
  rating: number;
  reviews: number;
}

export const tourPackages: TourPackage[] = [
  {
    id: "gobi-premium",
    name: "Говийн Дэлгэц - Premium Аялал",
    duration: "8 өдөр / 7 шөнө",
    groupSize: "2-6 хүн",
    price: "₮2,850,000",
    pricePerPerson: 2850000,
    image: "https://images.unsplash.com/photo-1571821807771-62cf66ac3f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMEdvYmklMjBkZXNlcnQlMjBkdW5lcyUyMHN1bnNldHxlbnwxfHx8fDE3NjI0Mjk5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1571821807771-62cf66ac3f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMEdvYmklMjBkZXNlcnQlMjBkdW5lcyUyMHN1bnNldHxlbnwxfHx8fDE3NjI0Mjk5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1689742855019-a09e208930e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kJTIwZHVuZXMlMjBkZXNlcnQlMjBjYW1lbCUyMGNhcmF2YW58ZW58MXx8fHwxNzYyNDI5OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1649357028504-ffc3c1976fc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMGRlc2VydCUyMGNhbWVsfGVufDF8fHx8MTc2MjQyODUzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1669745356056-2a2956af7e69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMHNreSUyME1pbGt5JTIwV2F5JTIwZGVzZXJ0fGVufDF8fHx8MTc2MjQyOTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1741004580304-bda757783289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyME1vbmdvbGlhbiUyMGZvb2QlMjBtZWF0fGVufDF8fHx8MTc2MjQyOTkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1638939674891-ba872677d6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnZXIlMjBjYW1wJTIwZ2xhbXBpbmd8ZW58MXx8fHwxNzYyNDI5OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    highlights: [
      "Хонгорын элс - 300м өндөр дэлхийн алдартай элсэн манхан",
      "Баянзаг - үлэг гүрвэлийн олдворын газар",
      "Ёлын Ам - зуны улиралд мөстэй хөндий",
      "Цагаан Суварга - шохойн цагаан хад",
      "Тэмээний аялал, одны ажиглалт",
      "5 одтой Three Camel Lodge буудал"
    ],
    popular: true,
    description: "Дэлхийн хамгийн гайхамшигтай элсний баяжилт. Говийн гурван сайхан үндэсний цэцэрлэг бол Монголын төдийгүй дэлхийн хамгийн үзэсгэлэнт газруудын нэг. 300 метр өндөр элсэн манхан, түүхэн үлэг гүрвэлийн олдвор, мөсөн хөндий - бүгд таныг хүлээж байна.",
    itinerary: [
      {
        day: 1,
        title: "Улаанбаатар - Баянзаг (Flaming Cliffs)",
        description: "Өглөө 08:00-д зочид буудлаас тань авч, говь руу аялж эхэлнэ. Замд Мандалговь хотод өдрийн хоол идэж, Баянзаг хүрнэ.",
        activities: [
          "09:00 - Улаанбаатараас хөдлөх (280км, 5-6 цаг)",
          "14:00 - Мандалговь хотод өдрийн хоол",
          "17:00 - Баянзаг үлэг гүрвэлийн газар хүрэх",
          "18:00 - Түүхч багштай хамт газар тойрох",
          "19:30 - Нар жаргах үеийн гайхалтай зураг"
        ],
        meals: ["Өглөө: Зочид буудал", "Өдөр: Мандалговь ресторан", "Орой: Gobi Nomad Lodge"],
        accommodation: "Gobi Nomad Lodge (Делюкс гэр)"
      },
      {
        day: 2,
        title: "Баянзаг - Хонгорын Элс",
        description: "Дэлхийн хамгийн өндөр элсэн манхануудын нэг рүү аялах. Тэмээний аялал, элсэнд авирах.",
        activities: [
          "08:00 - Эрт өглөөний амттай цай",
          "09:00 - Хонгор элс рүү хөдлөх (180км, 4 цаг)",
          "14:00 - Элсний ар талд өдрийн хоол",
          "15:30 - Тэмээний 2 цагийн аялал",
          "18:00 - Элсэн манханд гарч нар жаргах"
        ],
        meals: ["Өглөө: Lodge", "Өдөр: Пикник (элсний дэргэд)", "Орой: Three Camel Lodge"],
        accommodation: "Three Camel Lodge (5 одтой эко resort)"
      },
      {
        day: 3,
        title: "Хонгорын Элсний өдөр",
        description: "Өглөөний элсний үзэмж, чөлөөт цаг, орой одны ажиглалт.",
        activities: [
          "06:00 - Элсэн дээр нар мандах (сонголт)",
          "09:00 - Өглөөний цай",
          "10:00 - Орчмын нүүдэлчдэд зочлох",
          "14:00 - Lodge-д амрах/pool",
          "19:00 - Оройн хоол",
          "21:00 - Телескопоор одны ажиглалт"
        ],
        meals: ["Өглөө: Lodge", "Өдөр: Lodge", "Орой: Lodge (Монгол/Евро хоол)"],
        accommodation: "Three Camel Lodge"
      },
      {
        day: 4,
        title: "Хонгор - Ёлын Ам",
        description: "Говийн хамгийн үзэсгэлэнтэй хөндий рүү. Мөс, өргөст цагаан тахиа, ан амьтан.",
        activities: [
          "08:00 - Өглөөний цай",
          "09:00 - Ёлын Ам руу (200км, 4.5 цаг)",
          "14:00 - Цэцэрлэгийн Visitor Center үзэх",
          "15:00 - Хөндий дотор 3 цагийн аялал",
          "18:00 - Нүүдэлчдийн гэрт оройн хоол"
        ],
        meals: ["Өглөө: Lodge", "Өдөр: Visitor Center ресторан", "Орой: Ger camp"],
        accommodation: "Gobi Discovery Ger Camp"
      },
      {
        day: 5,
        title: "Ёлын Ам - Цагаан Суварга",
        description: "Тэнгисийн ёроолоос үүссэн шохойн цагаан хад - гайхамшигтай байгалийн бүтээмж.",
        activities: [
          "08:00 - Хөндийд эртний аялал",
          "10:00 - Цагаан Суварга руу (240km, 5 цаг)",
          "16:00 - Цагаан хадны тойрог",
          "17:30 - Дрон зураг авалт",
          "19:00 - Нүүдэлчдийн айраг амтлах"
        ],
        meals: ["Өглөө: Ger camp", "Өдөр: Пикник (замд)", "Орой: Ger camp"],
        accommodation: "Tsagaan Suvraga Ger Camp"
      },
      {
        day: 6,
        title: "Цагаан Суварга - Бага Газрын Чулуу",
        description: "Гранит чулуун уулс, сүм хийдийн түүх.",
        activities: [
          "08:00 - Өглөөний цай",
          "09:00 - Бага Газрын Чулуу (170km, 4 цаг)",
          "14:00 - Уулын агуй судлах",
          "16:00 - 13-р зууны сүмийн балгас",
          "18:00 - Уулын оройгоос нар жаргах"
        ],
        meals: ["Өглөө: Ger camp", "Өдөр: Пикник", "Орой: Ger camp"],
        accommodation: "Baga Gazriin Chuluu Ger Camp"
      },
      {
        day: 7,
        title: "Буцах - Улаанбаатар",
        description: "Говьоос баяртай. Нийслэл рүү буцах.",
        activities: [
          "07:00 - Эртний өглөө, сүүлчийн зураг",
          "08:00 - УБ руу хөдлөх (280km, 6 цаг)",
          "14:00 - Замд өдрийн хоол",
          "17:00 - Зочид буудалд хүрэх",
          "18:30 - Чөлөөт үдэш"
        ],
        meals: ["Өглөө: Ger camp", "Өдөр: Highway ресторан", "Орой: Өөрийн"],
        accommodation: "Shangri-La Hotel Ulaanbaatar (5 од)"
      },
      {
        day: 8,
        title: "Улаанбаатар - Соёлын өдөр",
        description: "Нийслэлийн соёл, түүх. Музей, хийд, шоппинг.",
        activities: [
          "09:00 - Гандантэгчинлэн хийд үзэх",
          "11:00 - Чингис хааны музей",
          "13:00 - Өдрийн хоол (Modern Nomads Restaurant)",
          "15:00 - Хээтэй дэлгүүр (кашмир, ноолуур)",
          "18:00 - Онгоцны буудал/буцах"
        ],
        meals: ["Өглөө: Hotel", "Өдөр: Modern Nomads", "Орой: -"],
        accommodation: "-"
      }
    ],
    included: [
      "Бүх тээврийн хэрэгсэл (шинэ Toyota Land Cruiser 150, агааржуулалттай)",
      "Англи хэлтэй мэргэжлийн хөтөч (10+ жилийн туршлага)",
      "7 шөнийн премиум байр (Three Camel Lodge 2 шөнө, 4 од+ ger camps, УБ 5 од зочид буудал)",
      "Бүх хоол хүнс (өглөө, өдөр, орой) - Монгол болон олон улсын хоол",
      "Цэцэрлэгийн нэвтрэх эрх",
      "Тэмээний аялал (2 цаг)",
      "Одны ажиглалт - телескоп",
      "Усны сав",
      "WiFi hotspot (ихэнх газарт)",
      "Онлайн итгэл - аяллын даатгал"
    ],
    excluded: [
      "Олон улсын нислэг",
      "Виз",
      "Согтууруулах ундаа",
      "Хувийн зардал",
      "Хөтөч, жолоочийн цайны мөнгө (нийт 150,000₮ санал болгох)"
    ],
    transportation: {
      type: "Toyota Land Cruiser 150 Series (2020-2023)",
      description: "Шинэ загвар, 7 хүний багтаамжтай, агааржуулалт, USB charging, WiFi hotspot. Туршлагатай жолооч (15+ жил говийн зам). Сар бүр техникийн үзлэг хийдэг."
    },
    accommodation: {
      type: "Luxury Ger Camps & 5-Star Hotels",
      description: "Монголын хамгийн шилдэг буудлууд: Three Camel Lodge (5-од эко-luxury), Gobi Nomad Lodge (4-од), Shangri-La UB (5-од). Бүх гэр: хувийн угаалгын өрөө, агааржуулалт, wifi, халаалт.",
      hotels: [
        "Three Camel Lodge (Хонгорын элс) - TripAdvisor #1, 5-од",
        "Gobi Nomad Lodge (Баянзаг) - Эко-friendly, 4-од",
        "Gobi Discovery Ger Camp (Ёлын Ам) - 4-од",
        "Shangri-La Hotel (Улаанбаатар) - 5-од олон улсын чанар"
      ]
    },
    restaurants: [
      "Three Camel Lodge Restaurant - Органик Монгол & Евро хоол",
      "Modern Nomads (УБ) - Contemporary Монгол гал тогоо",
      "Gobi Restaurant - Уламжлалт хорхог, бууз",
      "Оролцогч ger camps - Гэр дотор бэлтгэсэн amtтай хоол"
    ],
    bestSeason: "4-р сарын сүүл - 10-р сар (Хамгийн сайн: 5-6, 9-р сар)",
    difficulty: "Хялбар/Дунд - Явган 2-4 цаг хүртэл",
    rating: 4.9,
    reviews: 287
  },
  {
    id: "khuvsgul-secret",
    name: "Хөвсгөл Нуур - Цаатны Нууц",
    duration: "7 өдөр / 6 шөнө",
    groupSize: "2-8 хүн",
    price: "₮3,200,000",
    pricePerPerson: 3200000,
    image: "https://images.unsplash.com/photo-1761794681437-2dd63d7f0075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaHV2c2d1bCUyMGxha2UlMjBNb25nb2xpYSUyMGJsdWUlMjB3YXRlcnxlbnwxfHx8fDE3NjI0Mjk5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1761794681437-2dd63d7f0075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaHV2c2d1bCUyMGxha2UlMjBNb25nb2xpYSUyMGJsdWUlMjB3YXRlcnxlbnwxfHx8fDE3NjI0Mjk5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1636921615636-172e85dedccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjBjcnlzdGFsJTIwY2xlYXJ8ZW58MXx8fHwxNzYyNDI5OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1696573634988-5a4e41cc5e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWluZGVlciUyMGhlcmRlcnMlMjBNb25nb2xpYXxlbnwxfHx8fDE3NjI0Mjk5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1695554110372-fd7bc19ebcdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMGhvcnNlcyUyMG5vbWFkaWN8ZW58MXx8fHwxNzYyNDI4MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1568226292316-fba38a17051c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VycyUyMG1lYWRvdyUyMG1vdW50YWlufGVufDF8fHx8MTc2MjQyOTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1555723962-671b30addd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYW4lMjBub21hZCUyMGZhbWlseSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjI0Mjk5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    highlights: [
      "Монголын 'Хөх тэнгис' - Хөвсгөл нуур",
      "Цаа буга маллаж буй Цаатан ард түмэн",
      "Морин/цаагаар тайга ой руу аялах",
      "Загас агнуур, усан онгоцны аялал",
      "Янгиж эх, Шишгэд нуур - далд газрууд",
      "Дархад хотгор - газрын тос гэрэлтэй бөө"
    ],
    popular: true,
    description: "Монголын хамгийн цэвэр усны эх үүсвэр, дэлхийн 1% цэнгэг ус. Цаатан ард түмний цаа буга, тайга ой, онцгой байгаль. Энэ бол зөвхөн хэдхэн хүн очдог далд аялал.",
    itinerary: [
      {
        day: 1,
        title: "УБ ✈ Мөрөн - Хөвсгөл нуур",
        description: "Дотоод нислэг Хөвсгөл аймаг. Нуурын эрэг рүү.",
        activities: [
          "08:00 - Чингис хаан нисэх буудал (Domestic)",
          "09:30 - Нисэх (1.5 цаг, Hunnu Air/Aero Mongolia)",
          "11:00 - Мөрөн хот хүрэх",
          "12:00 - Хотод өдрийн хоол",
          "14:00 - Хөвсгөл нуур руу (100km, 2.5 цаг)",
          "17:00 - Toilogt Ger Camp, нуур эргийн аялал"
        ],
        meals: ["Өглөө: Онгоцонд", "Өдөр: Мөрөн ресторан", "Орой: Ger camp"],
        accommodation: "Toilogt Ger Camp (Премиум, нуурын эрэг)"
      },
      {
        day: 2,
        title: "Хөвсгөл - Завиар аялах, Загас барих",
        description: "Нуурын нууцыг судлах өдөр. Усан онгоц, загас барилт.",
        activities: [
          "07:00 - Нуурын эрэг дээр өглөөний цай",
          "09:00 - Завиар 3 цагийн аялал",
          "12:00 - Арлын эргэлт, пикник",
          "14:00 - Загас барих (хадран, цагаан загас)",
          "17:00 - Морин аялал (сонголт)",
          "19:00 - Барьсан загасаар оройн хоол"
        ],
        meals: ["Өглөө: Camp", "Өдөр: Пикник (нуурын эрэгт)", "Орой: Camp"],
        accommodation: "Toilogt Ger Camp"
      },
      {
        day: 3,
        title: "Хөвсгөл - Цаатан суурь (Тайга)",
        description: "Цаа буга маллаж буй Цаатан ард түмэн рүү морь/машинаар.",
        activities: [
          "06:00 - Эрт өглөө хөдлөх",
          "08:00 - Тайга ой руу аялал эхлэх (4-5 цаг)",
          "13:00 - Цаатан айлд хүрэх",
          "14:00 - Цаатны амьдралтай танилцах",
          "15:30 - Цаа унах, сүү саах",
          "17:00 - Уламжлалт хувцас, дуу, шүлэг",
          "19:00 - Цаатны гэрт хонох"
        ],
        meals: ["Өглөө: Camp", "Өдөр: Цаатны гэр (цайны будаа)", "Орой: Цаатны хоол"],
        accommodation: "Цаатны орц (жинхэнэ туршлага)"
      },
      {
        day: 4,
        title: "Цаатан - Янгиж эх нуур (Hidden gem)",
        description: "Хөвсгөлийн хамгийн нууц газар - цөөхөн хүн очдог эх нуур.",
        activities: [
          "08:00 - Цаатнаас баяртай",
          "09:00 - Янгиж эх рүү аялах (80km, 4 цаг офф-роуд)",
          "13:00 - Жижиг нуурын эрэгт пикник",
          "15:00 - Явган аялал, байгаль ажиглах",
          "17:00 - Орчмын малчдад зочлох",
          "19:00 - Ger camp"
        ],
        meals: ["Өглөө: Цаатан", "Өдөр: Пикник", "Орой: Ger camp"],
        accommodation: "Nuur Ger Camp (Жижиг, 8 гэр)"
      },
      {
        day: 5,
        title: "Дархад хотгор - Бөөгийн ёслол",
        description: "Дархад хотгорын нууц соёл - бөө, шүтээн.",
        activities: [
          "09:00 - Дархад хотгор орох",
          "11:00 - Орон нутгийн бөө уулзах (тохиолдвол)",
          "13:00 - Дархад музей үзэх",
          "15:00 - Шишгэд нуур - газрын тосон үзэгдэл",
          "17:00 - Уулын эрэг дээр кэмп",
          "20:00 - Галын дэргэд түүх, домог"
        ],
        meals: ["Өглөө: Camp", "Өдөр: Пикник", "Орой: Ger camp"],
        accommodation: "Darhad Ger Camp"
      },
      {
        day: 6,
        title: "Хөвсгөл - Мөрөн буцах",
        description: "Сүүлчийн өдөр нуур дээр, буцах.",
        activities: [
          "08:00 - Сүүлчийн өглөө нуур эргээр",
          "10:00 - Мөрөн руу хөдлөх",
          "14:00 - Мөрөн хотод өдрийн хоол",
          "15:00 - Амар байгалант хийд үзэх",
          "17:00 - Зочид буудалд амрах",
          "19:00 - Оройн хоол (хотын ресторан)"
        ],
        meals: ["Өглөө: Camp", "Өдөр: Мөрөн", "Орой: Мөрөн ресторан"],
        accommodation: "Best Western Premier Hotel (Мөрөн, 4-од)"
      },
      {
        day: 7,
        title: "Мөрөн ✈ Улаанбаатар",
        description: "Буцах нислэг, дуусгах.",
        activities: [
          "09:00 - Мөрөн ая далайн музей (сонголт)",
          "11:00 - Нисэх буудал руу",
          "12:30 - Нисэх УБ",
          "14:00 - УБ хүрэх, буудал/буцах"
        ],
        meals: ["Өглөө: Hotel", "Өдөр: Онгоцонд", "Орой: -"],
        accommodation: "-"
      }
    ],
    included: [
      "Дотоодын нислэг (УБ-Мөрөн-УБ) хоёр чиглэл",
      "Бүх тээвэр (Land Cruiser + морин аялал)",
      "Англи/Орос хэлтэй гид + Орон нутгийн хөтөч",
      "6 шөнийн байр (Premium ger camps, Цаатны орц, 4-од hotel)",
      "Бүх хоол + усны сав",
      "Завины аялал, загасны хэрэгсэл",
      "Цэцэрлэгийн эрх",
      "Цаатан айлд бэлэг (элдэв зүйлс, хувцас)",
      "Даатгал"
    ],
    excluded: [
      "Олон улсын нислэг",
      "Виз",
      "Согтууруулах ундаа",
      "Хувийн зардал",
      "Цайны мөнгө (200,000₮ санал болгох)"
    ],
    transportation: {
      type: "Hunnu Air/Aero Mongolia + Land Cruiser + Морь",
      description: "Дотоод нислэг (70-90 хүний онгоц). Хөвсгөл дээр 4WD машин. Цаатан суурь руу морин аялал (эсвэл жийп хэрэв цаг байхгүй). Туршлагатай жолооч, морин маягч."
    },
    accommodation: {
      type: "Eco Ger Camps, Цаатны орц, Premium Hotel",
      description: "Нуурын эрэг дээрх шилдэг ger camps (угаалгын өрөө, халаалт), Цаатны гэрт 1 шөнө (энгийн, жинхэнэ), Мөрөн 4-од зочид буудал.",
      hotels: [
        "Toilogt Ger Camp (Хөвсгөл) - Нуурын эрэг, 4-од",
        "Nuur Ger Camp (Янгиж эх) - Boutique, 8 гэр",
        "Цаатны орц (Тайга) - Жинхэнэ туршлага",
        "Best Western Premier (Мөрөн) - 4-од олон улсын"
      ]
    },
    restaurants: [
      "Toilogt Restaurant - Органик Хөвсгөл хадран загас",
      "Moron City Restaurant - Буряад, Монгол хоол",
      "Ger camps - Гэрээр бэлтгэсэн цагаан идээ",
      "Цаатны гэр - Цаагийн бор, сүүтэй цай"
    ],
    bestSeason: "6-9 сар (Зун хамгийн сайн, Цаатан очих цаг)",
    difficulty: "Дунд/Хүнд - Морь унах, явган 4-6 цаг",
    rating: 5.0,
    reviews: 94
  },
  {
    id: "orkhon-valley",
    name: "Орхоны Хөндий - ЮНЕСКО Дурсгал",
    duration: "5 өдөр / 4 шөнө",
    groupSize: "2-10 хүн",
    price: "₮1,680,000",
    pricePerPerson: 1680000,
    image: "https://images.unsplash.com/photo-1755764730702-11c31491c2ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPcmtob24lMjB2YWxsZXklMjB3YXRlcmZhbGwlMjBNb25nb2xpYXxlbnwxfHx8fDE3NjI0Mjk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1755764730702-11c31491c2ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPcmtob24lMjB2YWxsZXklMjB3YXRlcmZhbGwlMjBNb25nb2xpYXxlbnwxfHx8fDE3NjI0Mjk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1703756292963-6060b18137ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdWRkaGlzdCUyMG1vbmFzdGVyeSUyMHRlbXBsZSUyMEFzaWF8ZW58MXx8fHwxNzYyNDI5OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1598177183267-28a7765536de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcnVpbnMlMjBoaXN0b3JpY2FsJTIwc2l0ZXxlbnwxfHx8fDE3NjI0Mjk5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1625846275561-10483f1dbbcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMHN0ZXBwZSUyMGdyYXNzbGFuZCUyMGhvcnNlc3xlbnwxfHx8fDE3NjI0Mjk5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1568226292316-fba38a17051c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VycyUyMG1lYWRvdyUyMG1vdW50YWlufGVufDF8fHx8MTc2MjQyOTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1645017130453-901f7d4d24e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMHl1cnQlMjBnZXJ8ZW58MXx8fHwxNzYyNDI4MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    highlights: [
      "ЮНЕСКО-ийн дэлхийн өв - Орхоны хөндий",
      "Улаан цутгалан - 20м өндөр хүрхрээ",
      "Хархорин - Эрдэнэ Зуу хийд (1586)",
      "Хүйтэн халуун рашаан",
      "Морин аялал, хотын малчид",
      "Товхон хийд - уулын оройд"
    ],
    popular: false,
    description: "Монголын соёл түүхийн гол нугалахан. ЮНЕСКО-ийн дэлхийн өвийн жагсаалтад орсон Орхоны хөндий бол Чингис хааны эзэнт гүрний нийслэл, монголын хамгийн өндөр хүрхрээ, эртний хийд сүм, рашаан халуун усны газар.",
    itinerary: [
      {
        day: 1,
        title: "УБ - Хархорин",
        description: "Чингис хааны нийслэл руу.",
        activities: [
          "08:00 - УБ-аас хөдлөх",
          "11:00 - Хүст дахь чулуун хөшөө үзэх",
          "13:00 - Хархорин хүрэх, өдрийн хоол",
          "15:00 - Эрдэнэ Зуу хийд үзэх (108 суварга)",
          "17:00 - Хархорин музей - Монголын түүх",
          "19:00 - Ger camp"
        ],
        meals: ["Өглөө: УБ hotel/гэр", "Өдөр: Kharkhorin Restaurant", "Орой: Ger camp"],
        accommodation: "Kharkhorin Ger Camp (4-од, хийдийн харагдац)"
      },
      {
        day: 2,
        title: "Хархорин - Орхоны хүрхрээ",
        description: "Монголын хамгийн өндөр хүрхрээ, мөн дэлхийн өвийн гол газар.",
        activities: [
          "08:00 - Орхон руу (120km, 3 цаг)",
          "11:00 - Улаан цутгалан хүрхрээ хүрэх",
          "12:00 - Хүрхрээний дэргэд явган аялал",
          "14:00 - Пикник",
          "16:00 - Морин аялал хөндийгөөр (2 цаг)",
          "19:00 - Ger camp"
        ],
        meals: ["Өглөө: Camp", "Өдөр: Пикник (хүрхрээний дэргэд)", "Орой: Ger camp"],
        accommodation: "Orkhon Waterfall Ger Camp"
      },
      {
        day: 3,
        title: "Орхон - Товхон хийд - Рашаан",
        description: "Уулын оройн хийд, халуун усны газар.",
        activities: [
          "08:00 - Товхон хийд руу (уулын аялал 2 цаг)",
          "10:00 - 1654 оны хийд үзэх",
          "12:00 - Уулаас буух",
          "14:00 - Хүйтэн халуун рашаан руу",
          "16:00 - Халуун усанд орох, эм эмнэлэг ашиг тус",
          "18:00 - Малчдад зочлох"
        ],
        meals: ["Өглөө: Camp", "Өдөр: Пикник", "Орой: Ger camp"],
        accommodation: "Orkhon Valley Ger Camp"
      },
      {
        day: 4,
        title: "Чөлөөт өдөр - Малчны амьдрал",
        description: "Нүүдэлчдийн өдөр тутмын амьдралд оролцох.",
        activities: [
          "09:00 - Малчны гэрт очих",
          "10:00 - Мал маллах, сүү саах",
          "12:00 - Хуушуур хийх сурах",
          "14:00 - Морь унах, тал руу",
          "16:00 - Айраг хийх үйл явц үзэх",
          "18:00 - Гэрт уламжлалт хоол"
        ],
        meals: ["Өглөө: Camp", "Өдөр: Малчны гэр", "Орой: Малчны гэр"],
        accommodation: "Ger camp эсвэл Малчны гэр"
      },
      {
        day: 5,
        title: "Буцах - Улаанбаатар",
        description: "Сүүлчийн өдөр, УБ руу буцах.",
        activities: [
          "08:00 - УБ руу хөдлөх",
          "11:00 - Замд амрах, сүүлчийн зураг",
          "14:00 - Өдрийн хоол",
          "17:00 - УБ хүрэх, буудал хүргэх",
          "18:00 - Чөлөөт үдэш"
        ],
        meals: ["Өглөө: Camp", "Өдөр: Замын ресторан", "Орой: -"],
        accommodation: "-"
      }
    ],
    included: [
      "Бүх тээвэр (Land Cruiser)",
      "Англи хэлтэй хөтөч",
      "4 шөнийн ger camp (4-од стандарт)",
      "Бүх хоол",
      "Морин аялал (4 цаг)",
      "Музей, хийдийн эрх",
      "Рашаан орох эрх",
      "Ус"
    ],
    excluded: [
      "Нислэг",
      "Архи",
      "Хувийн зардал",
      "Цайны мөнгө (100,000₮)"
    ],
    transportation: {
      type: "Land Cruiser Prado",
      description: "6 хүний багтаамжтай, тав тухтай SUV. Орхоны замд туршлагатай жолооч."
    },
    accommodation: {
      type: "4-Star Ger Camps",
      description: "Орхоны хөндийн шилдэг ger camps. Угаалгын өрөө, халаалт, wifi, ресторан.",
      hotels: [
        "Kharkhorin Ger Camp - Хийдийн дэргэд, 4-од",
        "Orkhon Waterfall Ger Camp - Хүрхрээний ойр, 4-од",
        "Orkhon Valley Ger Camp - Хөндийн дунд, 4-од"
      ]
    },
    restaurants: [
      "Kharkhorin Restaurant - Монгол болон Евро хоол",
      "Ger camps - Амттай орон нутгийн хоол",
      "Малчны гэр - Жинхэнэ цагаан идээ"
    ],
    bestSeason: "5-10 сар (Бүх улиралд тохиромжтой)",
    difficulty: "Дунд - Явган 2-4 цаг, морь унах",
    rating: 4.8,
    reviews: 156
  },
  {
    id: "altai-eagle",
    name: "Алтай - Бүргэдийн Ангуучин",
    duration: "9 өдөр / 8 шөнө",
    groupSize: "2-6 хүн",
    price: "₮4,200,000",
    pricePerPerson: 4200000,
    image: "https://images.unsplash.com/photo-1552128436-05262280b292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbHRhaSUyMG1vdW50YWlucyUyME1vbmdvbGlhJTIwc25vd3xlbnwxfHx8fDE3NjI0Mjk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1552128436-05262280b292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbHRhaSUyMG1vdW50YWlucyUyME1vbmdvbGlhJTIwc25vd3xlbnwxfHx8fDE3NjI0Mjk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1547370828-2e0c386ea8da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYWdsZSUyMGh1bnRpbmclMjBLYXpha2hzdGFuJTIwdHJhZGl0aW9ufGVufDF8fHx8MTc2MjQyOTkyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1761639312588-17c306610d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjYXZlJTIwZnJvemVuJTIwd2ludGVyfGVufDF8fHx8MTc2MjQyOTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1636921615636-172e85dedccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjBjcnlzdGFsJTIwY2xlYXJ8ZW58MXx8fHwxNzYyNDI5OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1695554110372-fd7bc19ebcdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMGhvcnNlcyUyMG5vbWFkaWN8ZW58MXx8fHwxNzYyNDI4MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1760776679643-0e28cbcd4214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb25nb2xpYSUyMGN1bHR1cmUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjI0MjgxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    highlights: [
      "Бүргэдийн баяр наадам (жил бүрийн 10-р сарын эхээр)",
      "Казах ангуучидтай уулзах, бүргэд барих",
      "Алтай Таван Богд уул - 4374м",
      "Хөвтөн нуур - нууц мөстэй нуур",
      "Цагаан салаа - цасан орой",
      "Петроглиф - 10,000 жилийн хадны зураг"
    ],
    popular: true,
    description: "Монголын баруун хязгаар, Казах малчид, бүргэдийн ангуу - дэлхийн хамгийн онцгой соёлын нэг. Зөвхөн 10-р сард Golden Eagle Festival-тэй. Алтайн нуруу бол монголын хамгийн өндөр, хамгийн үзэсгэлэнт газар.",
    itinerary: [
      {
        day: 1,
        title: "УБ ✈ Өлгий",
        description: "Монголын баруун хязгаар руу нисэх.",
        activities: [
          "08:00 - Нисэх буудал",
          "09:30 - Нисэх Баян-Өлгий (3 цаг)",
          "12:30 - Өлгий хот хүрэх",
          "14:00 - Өдрийн хоол - Казах хоол",
          "16:00 - Хотод танилцах",
          "18:00 - Зочид буудал"
        ],
        meals: ["Өглөө: Онгоцонд", "Өдөр: Kazakh Restaurant", "Орой: Hotel"],
        accommodation: "Blue Wolf Hotel (Өлгий, 3-од)"
      },
      {
        day: 2,
        title: "Өлгий - Сагсай - Бүргэдийн ангууч",
        description: "Бүргэдийн ангуучтай танилцах, соёл үзэх.",
        activities: [
          "09:00 - Сагсай руу (30km)",
          "10:00 - Ангуучийн гэрт очих",
          "11:00 - Бүргэд барих үзүүлбэр",
          "13:00 - Казахын уламжлалт хоол",
          "15:00 - Морин аялал уул руу",
          "17:00 - Традицын хувцас, зураг",
          "19:00 - Ангуучийн гэрт хонох"
        ],
        meals: ["Өглөө: Hotel", "Өдөр: Ангуучийн гэр (Бешбармак)", "Орой: Гэр"],
        accommodation: "Ангуучийн гэр (Жинхэнэ туршлага)"
      },
      {
        day: 3,
        title: "Сагсай - Алтай Таван Богд",
        description: "Монголын хамгийн өндөр уул руу.",
        activities: [
          "08:00 - Таван Богд руу (150km, 5 цаг офф-роуд)",
          "14:00 - Үндэсний цэцэрлэг хүрэх",
          "15:00 - Кэмп байгуулах",
          "16:00 - Ойрын уулнаас харах",
          "18:00 - Пикник",
          "20:00 - Галын дэргэд"
        ],
        meals: ["Өглөө: Гэр", "Өдөр: Пикник", "Орой: Кэмп (бэлтгэсэн)"],
        accommodation: "Палатка (Таван Богдын дэргэд)"
      },
      {
        day: 4,
        title: "Потанин мөсөн гол - Аялал",
        description: "Дэлхийн хамгийн том мөсөн гол (Монголд).",
        activities: [
          "07:00 - Эрт өглөө мөсөн гол руу",
          "09:00 - Мөсөн голын эрэгт хүрэх",
          "10:00 - Явган аялал (4-5 цаг)",
          "15:00 - Буцах",
          "17:00 - Кэмп амрах",
          "19:00 - Хоол"
        ],
        meals: ["Өглөө: Кэмп", "Өдөр: Пикник", "Орой: Кэмп"],
        accommodation: "Палатка"
      },
      {
        day: 5,
        title: "Таван Богд - Хөвтөн нуур",
        description: "Нууц мөстэй нуур, хүнгүй газар.",
        activities: [
          "08:00 - Хөвтөн нуур руу (100km)",
          "12:00 - Нуур хүрэх",
          "13:00 - Эргийн аялал",
          "15:00 - Загас агнуур",
          "17:00 - Палатка байгуулах",
          "19:00 - Загасан хоол"
        ],
        meals: ["Өглөө: Кэмп", "Өдөр: Пикник", "Орой: Загас"],
        accommodation: "Палатка (Хөвтөн эрэгт)"
      },
      {
        day: 6,
        title: "Хөвтөн - Цагаан салаа",
        description: "Цасан оройтой уул, петроглиф.",
        activities: [
          "09:00 - Цагаан салаа руу",
          "11:00 - Петроглиф үзэх (10,000 жил)",
          "13:00 - Уулын аялал",
          "16:00 - Ger camp хүрэх",
          "18:00 - Казах хөгжим"
        ],
        meals: ["Өглөө: Палатка", "Өдөр: Пикник", "Орой: Ger camp"],
        accommodation: "Altai Nomad Ger Camp"
      },
      {
        day: 7,
        title: "Цагаан салаа - Өлгий",
        description: "Хот руу буцах, амрах.",
        activities: [
          "09:00 - Өлгий руу буцах",
          "14:00 - Хот хүрэх",
          "15:00 - Зочид буудалд",
          "17:00 - Зах дэлгүүр",
          "19:00 - Казах ресторан"
        ],
        meals: ["Өглөө: Ger camp", "Өдөр: Замд", "Орой: Ресторан"],
        accommodation: "Blue Wolf Hotel"
      },
      {
        day: 8,
        title: "Өлгий - Чөлөөт өдөр",
        description: "Музей, хот, бэлэг дурсгал.",
        activities: [
          "10:00 - Баян-Өлгий музей",
          "12:00 - Өдрийн хоол",
          "14:00 - Хотын зах",
          "16:00 - Амрах",
          "18:00 - Сүүлчийн оройн хоол"
        ],
        meals: ["Өглөө: Hotel", "Өдөр: Ресторан", "Орой: Ресторан"],
        accommodation: "Blue Wolf Hotel"
      },
      {
        day: 9,
        title: "Өлгий ✈ УБ",
        description: "Буцах нислэг.",
        activities: [
          "09:00 - Сүүлчийн зах",
          "11:00 - Нисэх буудал",
          "12:30 - Нисэх УБ (3 цаг)",
          "15:30 - УБ хүрэх"
        ],
        meals: ["Өглөө: Hotel", "Өдөр: Онгоцонд", "Орой: -"],
        accommodation: "-"
      }
    ],
    included: [
      "Дотоод нислэг (УБ-Өлгий-УБ)",
      "Бүх тээвэр (Land Cruiser + Морь)",
      "Англи + Казах хэлтэй хөтөч",
      "8 шөнийн байр (Hotel, Ger, Палатка, Ангуучийн гэр)",
      "Бүх хоол + ус",
      "Бүргэдийн үзүүлбэр",
      "Кэмпийн хэрэгсэл (палатка, унтлагын уут)",
      "Цэцэрлэгийн эрх",
      "Даатгал"
    ],
    excluded: [
      "Олон улсын нислэг",
      "Виз",
      "Архи",
      "Хувийн зардал",
      "Цайны мөнгө (250,000₮)"
    ],
    transportation: {
      type: "Нислэг + Алтайн SUV + Морь",
      description: "Aero Mongolia нислэг. Алтайд өндөр хөтлөгчтэй Russian UAZ эсвэл Land Cruiser (Алтайн замд тохирсон). Морин аялал тохиолдолд."
    },
    accommodation: {
      type: "Hotel, Ger, Палатка, Ангуучийн гэр",
      description: "Өлгий хотод 3-од hotel, Ангуучийн гэрт 1 шөнө, Алтайд кэмпинг 3 шөнө, Ger camp 2 шөнө.",
      hotels: [
        "Blue Wolf Hotel (Өлгий) - 3-од, хамгийн сайн хотод",
        "Ангуучийн гэр - Жинхэнэ туршлага",
        "Палатка кэмп - Таван Богд, Хөвтөн",
        "Altai Nomad Ger Camp - Цагаан салаа"
      ]
    },
    restaurants: [
      "Kazakh Restaurant (Өлгий) - Бешбармак, куурдак",
      "Ангуучийн гэр - Гэрээр бэлтгэсэн казах хоол",
      "Кэмп - Манай багш нарын хоол",
      "Blue Wolf Restaurant - Халуун хоол"
    ],
    bestSeason: "9-10 сар (Golden Eagle Festival: 10-р сарын эхэнд)",
    difficulty: "Хүнд - Өндөр газар, кэмпинг, явган 5-7 цаг",
    rating: 5.0,
    reviews: 67
  }
];
