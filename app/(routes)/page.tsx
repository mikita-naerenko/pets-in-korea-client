import ImportantArticles from "@/components/important-articles/index";
import MainNavigationButtons from "@/components/main-navigation-buttons";
import DictionaryList from "@/components/dictionary-list/index";
import { Suspense } from "react";
// import { DictionarySkeleton } from "@/components/ui/skeletons";
// import { ImportantArticlesSkeleton } from "@/components/important-articles/skeleton";
import HiddenSEOTitle from "@/components/ui/hidden-SEO-title";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Pets in Korea. Информация о домашних животных в Южной Корее",
  description:
    "Информационный портал для русскоязычных владельцев домашних животных в Южной Корее. Как увезти, как привезти, приюты, инструкции",
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
  alternates: {
    canonical: `https://pets-in-korea.com/`,
  },
};

export default async function Home() {
  return (
    <>
      <HiddenSEOTitle
        title={"Свежая информация для владельцев животных в Корее"}
      />
      <MainNavigationButtons />
      {/* <Suspense fallback={<ImportantArticlesSkeleton title={"Актуальное"} />}> */}
      <ImportantArticles title={"Актуальное"} type="article" />
      {/* </Suspense> */}
      {/* <Suspense
        fallback={<ImportantArticlesSkeleton title={"Новости о животных"} />}
      > */}
      <ImportantArticles title={"Новости о животных"} type="main-page-news" />
      {/* </Suspense> */}

      {/* <Suspense fallback={<DictionarySkeleton />}> */}
      <DictionaryList />
      {/* </Suspense> */}
    </>
  );
}
