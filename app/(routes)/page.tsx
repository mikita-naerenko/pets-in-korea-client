import getArticles from "@/actions/get-articles";
import getNews from "@/actions/get-news";
import getThemes from "@/actions/get-themes";
import ImportantArticles from "@/components/important-articles/important-articles";
import MainNavigationButtons from "@/components/main-navigation-buttons/main-navigation-buttons";
import ImportantNews from "@/components/important-news/important-news";
import DictionaryList from "@/components/dictionarys-list/dictionary-list";
import { Suspense } from "react";
import { DictionarySkeleton } from "@/components/ui/skeletons";
import HiddenSEOTitle from "@/components/ui/hidden-SEO-title";

export default async function Home() {
  const importantArticles = await getArticles({
    tagLabel: "actual",
  });
  const latest4News = await getNews({ quantity: 4 });
  const themes = await getThemes();

  return (
    <>
      <HiddenSEOTitle />
      <MainNavigationButtons />
      <ImportantArticles items={importantArticles} title={"Важные темы"} />
      <ImportantNews latestNews={latest4News} />
      <Suspense fallback={<DictionarySkeleton />}>
        <DictionaryList themes={themes} />
      </Suspense>
    </>
  );
}
