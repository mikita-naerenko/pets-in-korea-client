import React, { Suspense } from "react";
import getNews from "@/actions/get-news";
import NewsList from "@/components/news-list";
import getCountOf from "@/actions/get-count-of";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";
import { Metadata } from "next";
import ImportantArticles from "@/components/important-articles/index";
import { ImportantArticlesSkeleton } from "@/components/ui/skeletons";
import HiddenSEOTitle from "@/components/ui/hidden-SEO-title";

export const metadata: Metadata = {
  title: "Новости о животных в Южной Корее",
  description: "Актуальные новости о животных в Южной Корее на русском языке",
  keywords: [
    "Привезти кошку в Корею",
    "Привезти собаку в Южную Корею",
    "Ветклиники в Южной Корее",
    "Ввоз и вывоз домашних животных Южная Корея",
    "Законы о животных в Южной Корее",
    "Как взять из приюта кошку",
    "Корм и лекарства для домашних животных",
    "Уход за домашними животными в Южной Корее",
    "Аренда квартиры в Корее",
    "Кастрировать кота в Корее цена",
    "Подготовка к переезду с животными в Южной Корее",
    "Стерелизация собаки в Корее",
    "Приюты в Корее",
  ],
  creator: "Mikita Naerenko",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `https://pets-in-korea.com/news`,
  },
};

export default async function Page() {
  const news = await getNews({ quantity: 5 });
  const countOfNews = await getCountOf({ target: "news" });

  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <HiddenSEOTitle title="Новости о животных и их защите в Корее" />
      <Suspense
        fallback={<ImportantArticlesSkeleton title={"Последние новости"} />}
      >
        <ImportantArticles title={"Последние новости"} type="news" />
      </Suspense>
      <NewsList news={news} countOfNews={+countOfNews} />
    </>
  );
}
