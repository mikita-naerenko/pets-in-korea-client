import getTags from "@/actions/get-tags";
import ArticelSet from "@/components/articles-set-personal/article-set";

export default async function Page() {
  const tags = await getTags();

  return <ArticelSet tags={tags} />;
}
