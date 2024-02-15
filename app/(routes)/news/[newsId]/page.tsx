import React from "react";
import getNewsById from "@/actions/get-news-by-id";
import SingleArticle from "@/components/single-article/single-article";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs/basic-breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { newsId: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const singleNews = await getNewsById({ id: params.newsId });

  return {
    title: `${singleNews.title} в Корее`,
    description: `${singleNews.description} в Южной Корее`,
    openGraph: {
      title: `${singleNews.title} в Корее`,
      description: `${singleNews.description} в Южной Корее`,
    },
    alternates: {
      canonical: `https://pets-in-korea.com/news/${singleNews.id}`,
    },
  };
}

export default async function Page({ params }: { params: { newsId: string } }) {
  const singleNews = await getNewsById({ id: params.newsId });

  return (
    <>
      <BasicBreadcrumbs currentPage={singleNews.title} />
      <SingleArticle article={singleNews} />
    </>
  );
}
