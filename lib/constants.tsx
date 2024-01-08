import Vet from "../public/vet.jpg";
import Airport from "../public/airport.jpg";
import Rent from "../public/rent.jpg";
import Adopt from "../public/how-to-adopt.jpg";
import VetBlur from "../public/vet-blur.jpg";
import AirportBlur from "../public/airport-blur.jpg";
import RentBlur from "../public/rent-blur.jpg";
import AdoptBlur from "../public/how-to-adopt-blur.jpg";

export const THEMATIC_ARTICLES = [
  {
    title: "Приюты для домашних животных",
    img: Rent.src,
    blur: RentBlur.src,
    href: "/articles-set",
    tagId: "real-estate",
  },
  {
    title: "Как увезти моего питомца на родину?",
    img: Airport.src,
    blur: AirportBlur.src,
    href: "/articles-set",
    tagId: "departure",
  },
  {
    title: "Я хочу завести питомца, с чего начать?",
    img: Adopt.src,
    blur: AdoptBlur.src,
    href: "/articles-set",
    tagId: "adoption",
  },
  {
    title: "Поход к ветеринару",
    img: Vet.src,
    blur: VetBlur.src,
    href: "/articles-set",
    tagId: "vet",
  },
];

export const NAV_ITEMS = [
  {
    href: `/`,
    label: "Главная",
  },
  {
    href: `/arrive`,
    label: "Привезти в Корею",
  },
  {
    href: `/departure`,
    label: "Забираем на Родину",
  },
  {
    href: `/articles-set`,
    label: "Подборки статей",
  },
  {
    href: `/life`,
    label: "Жизнь с питомцем в Корее",
  },
  {
    href: `/news`,
    label: "Важные новости",
  },
  {
    href: `/dictionary`,
    label: "Разговорник",
  },
];
