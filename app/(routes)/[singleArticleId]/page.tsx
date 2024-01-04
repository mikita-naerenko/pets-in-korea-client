import React from "react";
import getArticle from "@/actions/get-article";
import SingleArticle from "@/components/single-article";

export default async function page({
  params,
}: {
  params: { singleArticleId: string };
}) {
  const articleId = params.singleArticleId;
  const article = await getArticle({ id: articleId });

  return <SingleArticle article={article} />;
}
