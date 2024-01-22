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
    href: "/shelter",
    // tagId: "real-estate",
  },
  {
    title: "Как увезти моего питомца на родину?",
    img: Airport.src,
    blur: AirportBlur.src,
    href: "/departure",
    // tagId: "departure",
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
    tagId: "veterinarian",
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
    href: `/shelter`,
    label: "Приюты",
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

export const LINKS: {
  url: string;
  lastModified: string;
  changeFrequency: "yearly";
  priority: number;
}[] = [
  {
    url: "https://www.pets-in-korea.com/0648f721-20ab-4f02-9085-baf6d08c2858",
    lastModified: "2024-01-15T07:00:41.886Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/3957ccbf-26a6-480f-8b8b-9828ae7002fc",
    lastModified: "2024-01-15T15:05:56.595Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/48b89593-d21f-49f1-99fd-8e71d6d2ca1b",
    lastModified: "2024-01-16T04:34:44.112Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/7adaca07-5704-405a-8810-99b05933e518",
    lastModified: "2024-01-16T07:59:59.897Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/801142b8-948c-4de1-9169-a20bfc782a32",
    lastModified: "2024-01-15T07:00:51.067Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/887158fb-97de-418b-82e7-c7c084e1399b",
    lastModified: "2024-01-15T09:14:28.115Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/95b06944-8dac-47c3-84f0-a08f99c90b6c",
    lastModified: "2024-01-15T15:43:20.092Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/9f2d5b88-f1a4-46b1-9dc2-11ed43910a3f",
    lastModified: "2024-01-15T07:00:31.098Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/a7e7548a-3841-4afa-a6c4-fca2ccd4740e",
    lastModified: "2024-01-15T09:01:05.930Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/f4ab72d9-7012-47e4-bd23-6f209b7a793e",
    lastModified: "2024-01-22T06:46:53.643Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/news/25406ace-1eaf-46b7-b890-dfa798bd0029",
    lastModified: "2024-01-22T07:26:06.057Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/news/bc3eb631-0958-4755-b146-d9160aa26a61",
    lastModified: "2024-01-16T05:30:08.323Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/news/9e4175ee-1072-4a94-bc22-147e1280e7a3",
    lastModified: "2024-01-16T04:59:04.656Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/news/b92ceae3-74d2-42e5-989c-bffdfedcc8ae",
    lastModified: "2024-01-16T03:45:37.561Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/news/3e46b48e-13d3-448e-8455-c22a3772f6eb",
    lastModified: "2024-01-16T03:03:12.794Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/news/f9a33e40-0da9-47fb-afd4-2986b56f0caa",
    lastModified: "2024-01-15T16:13:56.247Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://www.pets-in-korea.com/news/d5d9aed6-5e06-4c7c-aee1-385523520839",
    lastModified: "2024-01-15T09:54:05.039Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
];
