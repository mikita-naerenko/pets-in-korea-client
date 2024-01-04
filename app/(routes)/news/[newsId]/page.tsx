import React from "react";
import getNewsById from "@/actions/get-news-by-id";
import SingleArticle from "@/components/single-article";

export default async function Page({ params }: { params: { newsId: string } }) {
  const singleNews = await getNewsById({ id: params.newsId });

  return <SingleArticle article={singleNews} />;
}
