import React from "react";
import getNewsById from "@/actions/get-news-by-id";
import SingleArticle from "@/components/single-article";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

export default async function Page({ params }: { params: { newsId: string } }) {
  const singleNews = await getNewsById({ id: params.newsId });

  return (
    <>
      <BasicBreadcrumbs currentPage={singleNews.title} />
      <SingleArticle article={singleNews} />
    </>
  );
}
