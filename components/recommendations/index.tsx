"use client";
import { Article, News } from "@/lib/type";
import { useEffect, useState } from "react";
import getArticles from "@/actions/get-articles";
import getNews from "@/actions/get-news";
import ArticlesList from "./articles-list";
import NewsList from "./news-list";

export default function Recommendations() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesData = await getArticles({ random: 3 });
        setArticles(articlesData);
        setLoadingArticles(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews({ random: 3 });
        setNews(news);
        setLoadingNews(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <ArticlesList loadingArticles={loadingArticles} articles={articles} />
      <NewsList loadingNews={loadingNews} news={news} />
    </>
  );
}
