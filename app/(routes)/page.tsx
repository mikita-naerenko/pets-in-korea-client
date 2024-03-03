import ImportantArticles from "@/components/important-articles/index";
import DictionaryList from "@/components/dictionary-list/index";
import HiddenSEOTitle from "@/components/ui/hidden-SEO-title";
import type { Metadata } from "next";
import MainNavigationButtonV2 from "@/components/main-navigation-button_v2";

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
      <MainNavigationButtonV2 />
      <ImportantArticles title={"Актуальное"} type="article" />
      <ImportantArticles title={"Новости о животных"} type="main-page-news" />
      <DictionaryList />
    </>
  );
}
