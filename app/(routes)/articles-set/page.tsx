import getTags from "@/actions/get-tags";
import ArticlesSetList from "@/components/articles-set-list";

export default async function Page() {
  const tags = await getTags();
  return <ArticlesSetList tags={tags} />;
}
