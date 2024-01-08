import React from "react";
import getNews from "@/actions/get-news";
import LatestNews from "@/components/latest-news";
import NewsList from "@/components/news-list";
import getCountOf from "@/actions/get-count-of";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

export default async function Page() {
  const latest6News = await getNews({ quantity: 6 });
  const news = await getNews({ quantity: 1 });
  const countOfNews = await getCountOf({ target: "news" });

  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <LatestNews latest6News={latest6News} />

      <NewsList news={news} countOfNews={+countOfNews} />
    </>
  );
}
