import React from "react";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { RecommendationsSkeleton } from "../ui/skeletons";
import Fallback from "@/public/fallback.jpg";
import { News } from "@/lib/type";

export default function NewsList({
  loadingNews,
  news,
}: {
  loadingNews: boolean;
  news: News[];
}) {
  const handleClickNews = (item: News) => {
    window.location.assign(`/news/${item.id}`);
  };
  return (
    <List
      subheader={
        <ListSubheader sx={{ fontSize: "1.5rem" }}>Что нового:</ListSubheader>
      }
      sx={{ width: "100%", bgcolor: "background.paper", pt: 0 }}
    >
      {" "}
      {loadingNews ? (
        <>
          <RecommendationsSkeleton />
          <RecommendationsSkeleton />
          <RecommendationsSkeleton />
        </>
      ) : (
        news.map((item, i) => {
          return (
            <ListItemButton
              component="li"
              onClick={() => handleClickNews(item)}
              alignItems="flex-start"
              key={item.id}
              divider={i !== news.length - 1}
            >
              <ListItemAvatar>
                <Image
                  src={item?.images?.[0].url || Fallback.src}
                  quality={70}
                  width={50}
                  height={40}
                  alt={`${item.title} `}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.description.slice(0, 50)}...
                  </>
                }
              />
            </ListItemButton>
          );
        })
      )}
    </List>
  );
}
