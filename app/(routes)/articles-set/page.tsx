import getTags from "@/actions/get-tags";
import ArticlesSetList from "@/components/articles-set-list";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

export default async function Page() {
  const tags = await getTags();
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <ArticlesSetList tags={tags} />
    </>
  );
}
