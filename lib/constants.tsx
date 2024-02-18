import Vet from "../public/vet.jpg";
import Airport from "../public/airport.jpg";
import Rent from "../public/rent.jpg";
import Adopt from "../public/how-to-adopt.jpg";
import RentMobile from "@/public/rent-mobile.jpg";
import AirportMobile from "@/public/airport-mobile.jpg";
import AdoptMobile from "../public/how-to-adopt-mobile.jpg";
import VetMobile from "../public/vet-mobile.jpg";

export const THEMATIC_ARTICLES = [
  {
    title: "Приюты для домашних животных",
    img: Rent.src,
    mobileImg: RentMobile.src,
    href: "/shelter",
  },
  {
    title: "Как увезти моего питомца на родину?",
    img: Airport.src,
    mobileImg: AirportMobile.src,
    href: "/departure",
  },
  {
    title: "Я хочу завести питомца, с чего начать?",
    img: Adopt.src,
    mobileImg: AdoptMobile.src,
    href: "/adoption",
  },
  {
    title: "Поход к ветеринару",
    img: Vet.src,
    mobileImg: VetMobile.src,
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
    href: `/adoption`,
    label: "Усыновление",
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
    url: "https://pets-in-korea.com/0648f721-20ab-4f02-9085-baf6d08c2858",
    lastModified: "2024-01-15T07:00:41.886Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/0e00fed2-6348-4a14-a499-aeb1d647a816",
    lastModified: "2024-01-24T10:11:39.532Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/1ddd39d9-d479-4fee-9dc4-3dd0c28319fb",
    lastModified: "2024-01-24T16:51:43.234Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/3957ccbf-26a6-480f-8b8b-9828ae7002fc",
    lastModified: "2024-01-15T15:05:56.595Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/48b89593-d21f-49f1-99fd-8e71d6d2ca1b",
    lastModified: "2024-01-16T04:34:44.112Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/5a0a27c3-5f14-4efd-b8b7-4b1e9a8e053b",
    lastModified: "2024-01-25T02:48:12.836Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/7adaca07-5704-405a-8810-99b05933e518",
    lastModified: "2024-01-16T07:59:59.897Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/801142b8-948c-4de1-9169-a20bfc782a32",
    lastModified: "2024-01-15T07:00:51.067Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/887158fb-97de-418b-82e7-c7c084e1399b",
    lastModified: "2024-01-15T09:14:28.115Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/95b06944-8dac-47c3-84f0-a08f99c90b6c",
    lastModified: "2024-01-15T15:43:20.092Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/979e28ba-af94-4bcb-bc8f-bbb8222138c7",
    lastModified: "2024-01-25T02:52:15.922Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/9f2d5b88-f1a4-46b1-9dc2-11ed43910a3f",
    lastModified: "2024-01-15T07:00:31.098Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/a7e7548a-3841-4afa-a6c4-fca2ccd4740e",
    lastModified: "2024-01-15T09:01:05.930Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/cdad46f9-b415-4901-8d46-d5056f9be5ec",
    lastModified: "2024-01-24T16:23:18.204Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/f4ab72d9-7012-47e4-bd23-6f209b7a793e",
    lastModified: "2024-01-25T03:40:17.135Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/b97f6dfe-3e1a-44dc-b70f-178e0e5bafc2",
    lastModified: "2024-01-24T06:20:59.101Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/717b23c9-c7ab-4c70-8912-9a04aac7faf3",
    lastModified: "2024-01-24T05:53:58.402Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/ea796e07-376d-4082-8da7-e839e03b3304",
    lastModified: "2024-01-23T03:16:40.983Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/25406ace-1eaf-46b7-b890-dfa798bd0029",
    lastModified: "2024-01-22T07:26:06.057Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/bc3eb631-0958-4755-b146-d9160aa26a61",
    lastModified: "2024-01-16T05:30:08.323Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/9e4175ee-1072-4a94-bc22-147e1280e7a3",
    lastModified: "2024-01-24T08:22:57.932Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/b92ceae3-74d2-42e5-989c-bffdfedcc8ae",
    lastModified: "2024-01-16T03:45:37.561Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/3e46b48e-13d3-448e-8455-c22a3772f6eb",
    lastModified: "2024-01-16T03:03:12.794Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/f9a33e40-0da9-47fb-afd4-2986b56f0caa",
    lastModified: "2024-01-15T16:13:56.247Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "https://pets-in-korea.com/news/d5d9aed6-5e06-4c7c-aee1-385523520839",
    lastModified: "2024-01-15T09:54:05.039Z",
    changeFrequency: "yearly",
    priority: 0.5,
  },
];
