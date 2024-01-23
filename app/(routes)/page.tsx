import getArticles from "@/actions/get-articles";
import getNews from "@/actions/get-news";
import getThemes from "@/actions/get-themes";
// import ImportantArticles from "@/components/important-articles/important-articles";
import ImportantArticles from "@/components/important-articles/index";
import MainNavigationButtons from "@/components/main-navigation-buttons/main-navigation-buttons";
import DictionaryList from "@/components/dictionarys-list/index";
import { Suspense } from "react";
import {
  DictionarySkeleton,
  ImportantArticlesSkeleton,
} from "@/components/ui/skeletons";
import HiddenSEOTitle from "@/components/ui/hidden-SEO-title";

export default async function Home() {
  // const importantArticles = await getArticles({
  //   tagLabel: "actual",
  // });
  // const latest6News = await getNews({ quantity: 6 });

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
      <Suspense fallback={<ImportantArticlesSkeleton title={"Актуальное"} />}>
        <ImportantArticles title={"Актуальное"} type="article" />
      </Suspense>
      <Suspense
        fallback={<ImportantArticlesSkeleton title={"Новости о животных"} />}
      >
        <ImportantArticles title={"Новости о животных"} type="main-page-news" />
      </Suspense>
      {/* <ImportantArticles
        items={importantArticles}
        title={"Актуальное"}
        type="article"
      /> */}
      {/* <ImportantArticles
        items={latest6News}
        title={"Новости о животных"}
        type="news"
      /> */}

      <Suspense fallback={<DictionarySkeleton />}>
        <DictionaryList />
      </Suspense>
    </>
  );
}
