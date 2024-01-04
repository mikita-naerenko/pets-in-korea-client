import getTags from "@/actions/get-tags";
import getArticles from "@/actions/get-articles";
import getNews from "@/actions/get-news";
import getThemes from "@/actions/get-themes";
import ImportantArticles from "@/components/important-articles/important-articles";
import ThematicSetOfArticles from "@/components/thematic-set-of-articles/thematic-set-of-articles";
import ImportantNews from "@/components/important-news/important-news";
import DictionaryList from "@/components/dictionarys-list/dictionary-list";

export default async function Home() {
  const tags = await getTags();
  const actual = tags.find((tag) => tag.label === "actual");

  const importantArticles = await getArticles({
    tagId: actual ? actual.id : "",
  });
  const latest4News = await getNews({ quantity: 4 });
  const themes = await getThemes();

  return (
    <>
      <ThematicSetOfArticles />
      <ImportantArticles items={importantArticles} />
      <ImportantNews latestNews={latest4News} />
      <DictionaryList themes={themes} />
    </>
  );
}
