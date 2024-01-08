import getTags from "@/actions/get-tags";
import getTag from "@/actions/get-tag";
import ArticleSet from "@/components/articles-set-personal/article-set";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

export default async function Page({
  params,
}: {
  params: { articleSetId: string };
}) {
  const tags = await getTags();
  const tag = await getTag({ tagLabel: params.articleSetId });

  return (
    <>
      <BasicBreadcrumbs currentPage={tag.rusTitle} />
      <ArticleSet tags={tags} />
    </>
  );
}
