"use client";
import * as React from "react";
import { News } from "@/lib/type";
import {
  Container,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { BookType } from "lucide-react";
import SectionTitle from "../ui/Section-title";
import { useState, useEffect } from "react";
import Image from "next/image";
import Fallback from "../../public/fallback.jpg";
import MainPagination from "../ui/main-pagination";
import getNews from "@/actions/get-news";
import { NewsItemSkeleton } from "../ui/skeletons";

export default function NewsList({
  countOfNews,
  news,
}: {
  news: News[];
  countOfNews: number;
}) {
  const [showedNews, setShowedNews] = useState<News[] | []>(news);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 2;

  const router = useRouter();

  const skeletonArray = Array.from({ length: limit }, (_, index) => (
    <NewsItemSkeleton key={index} />
  ));

  const fetchNews = async () => {
    try {
      setLoading(true);
      const result = await getNews({ offset: offset, limit: limit });
      setShowedNews(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const newOffset = (Number(value) - 1) * limit;
    setOffset(newOffset);
  };

  const handleClick = (item: News) => {
    router.prefetch(item.id);
    router.push(`news/${item.id}`);
  };

  useEffect(() => {
    fetchNews();
  }, [offset]);

  return (
    <Container disableGutters component={"section"}>
      <SectionTitle title="Все новости" svg={<BookType />} />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          pt: 0,
        }}
      >
        {loading
          ? skeletonArray.map((item) => item)
          : showedNews.map((item, i) => {
              const image =
                item.images?.[0] && item.images?.[0].url
                  ? item.images?.[0].url
                  : Fallback.src;
              return (
                <ListItemButton
                  component="li"
                  onClick={() => handleClick(item)}
                  alignItems="flex-start"
                  key={item.id}
                  divider
                >
                  <ListItemAvatar sx={{ display: { xs: "none", md: "block" } }}>
                    <Image
                      src={image}
                      quality={70}
                      width={70}
                      height={60}
                      alt={`${item.title} `}
                    />
                  </ListItemAvatar>
                  <ListItemAvatar sx={{ display: { xs: "block", md: "none" } }}>
                    <Image
                      src={image}
                      quality={70}
                      width={40}
                      height={30}
                      alt={`${item.title} `}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      width: { xs: 180, sm: "80%" },
                      flexGrow: 1,
                      flexShrink: 0,
                    }}
                    primary={item.title}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        ></Typography>
                        {item.description.slice(0, 150)}...
                      </>
                    }
                  />
                  <ListItemText
                    sx={{ alignSelf: "center", textAlign: "right" }}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="caption"
                          color="text.secondary"
                        >
                          {new Date(item.createdAt).toLocaleString("ru-RU", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                          })}
                        </Typography>
                      </>
                    }
                  />
                </ListItemButton>
              );
            })}
      </List>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <MainPagination
          countOfNews={countOfNews}
          handleChange={handleChange}
          limit={limit}
        />
      </div>
    </Container>
  );
}
