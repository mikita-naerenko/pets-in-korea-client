import getArticles from "@/actions/get-articles";
import getNews from "@/actions/get-news";
import getThemes from "@/actions/get-themes";
import ImportantArticles from "@/components/important-articles/important-articles";
import MainNavigationButtons from "@/components/main-navigation-buttons/main-navigation-buttons";
// import DictionaryList from "@/components/dictionarys-list/dictionary-list";
import DictionaryList from "@/components/dictionarys-list/index";
import { Suspense } from "react";
import { DictionarySkeleton } from "@/components/ui/skeletons";
import HiddenSEOTitle from "@/components/ui/hidden-SEO-title";

export default async function Home() {
  const importantArticles = await getArticles({
    tagLabel: "actual",
  });
  const latest6News = await getNews({ quantity: 6 });
  const themes = await getThemes();

  // const allArticles = await await getArticles({});
  // const allNews = await await getNews({});
  // const a = allArticles.map((item) => {
  //   return {
  //     url: `https://www.pets-in-korea.com/${item.id}`,
  //     lastModified: item.updatedAt,
  //     changeFrequency: "yearly",
  //     priority: 0.5,
  //   };
  // });
  // const n = allNews.map((item) => {
  //   return {
  //     url: `https://www.pets-in-korea.com/news/${item.id}`,
  //     lastModified: item.updatedAt,
  //     changeFrequency: "yearly",
  //     priority: 0.5,
  //   };
  // });

  // const result = [...a, ...n];
  // console.log(result);

  return (
    <>
      <HiddenSEOTitle />
      <MainNavigationButtons />
      {/* <ImportantArticles
        items={importantArticles}
        title={"Актуальное"}
        type="article"
      />
      <ImportantArticles
        items={latest6News}
        title={"Новости о животных"}
        type="news"
      /> */}
      {/* @ts-expect-error Server Component */}
      <DictionaryList />
      {/* <Suspense fallback={<DictionarySkeleton />}>
        <DictionaryList themes={themes} />
      </Suspense> */}
    </>
  );
}
