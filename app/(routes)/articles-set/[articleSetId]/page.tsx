import getTags from "@/actions/get-tags";
import ArticleSet from "@/components/articles-set-personal/article-set";

export default async function Page() {
  const tags = await getTags();

  return <ArticleSet tags={tags} />;
}
