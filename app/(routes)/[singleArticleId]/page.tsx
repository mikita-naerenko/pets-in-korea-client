import React, { Suspense } from "react";
import getArticle from "@/actions/get-article";
import SingleArticle from "@/components/single-article";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

export default async function page({
  params,
}: {
  params: { singleArticleId: string };
}) {
  const articleId = params.singleArticleId;
  const article = await getArticle({ id: articleId });
  const imageURL = article?.images?.[0].url;

  return (
    <>
      <BasicBreadcrumbs currentPage={article.title} />
      <SingleArticle article={article} />
    </>
  );
}
