import Vet from "../public/vet.jpg";
import Airport from "../public/airport.jpg";
import Rent from "../public/rent.jpg";
import Adopt from "../public/how-to-adopt.jpg";

export const THEMATIC_ARTICLES = [
  {
    title: "Советы по аренде жилья ",
    img: Rent.src,
    href: "/articles-set",
    tagId: "real-estate",
  },
  {
    title: "Как увезти моего питомца на родину?",
    img: Airport.src,
    href: "/articles-set",
    tagId: "departure",
  },
  {
    title: "Я хочу завести питомца, с чего начать?",
    img: Adopt.src,
    href: "/articles-set",
    tagId: "adoption",
  },
  {
    title: "Поход к ветеринару",
    img: Vet.src,
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
