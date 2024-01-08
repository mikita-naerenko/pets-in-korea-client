import React from "react";
import getNews from "@/actions/get-news";
import LatestNews from "@/components/latest-news";
import NewsList from "@/components/news-list";
import getCountOf from "@/actions/get-count-of";

export default async function Page() {
  const latest6News = await getNews({ quantity: 6 });
  const news = await getNews({ quantity: 1 });
  const countOfNews = await getCountOf({ target: "news" });

  return (
    <>
      <LatestNews latest6News={latest6News} />

      <NewsList news={news} countOfNews={+countOfNews} />
    </>
  );
}
