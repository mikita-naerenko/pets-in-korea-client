import { Article } from "@/lib/type";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { RecommendationsSkeleton } from "../ui/skeletons";
import Fallback from "@/public/fallback.jpg";

export default function ArticlesList({
  loadingArticles,
  articles,
}: {
  loadingArticles: boolean;
  articles: Article[];
}) {
  const handleClickArticle = (item: Article) => {
    window.location.assign(`/${item.id}`);
  };
  return (
    <List
      subheader={
        <ListSubheader sx={{ fontSize: "1.5rem" }}>
          Читайте также:
        </ListSubheader>
      }
      sx={{ width: "100%", bgcolor: "background.paper", pt: 0 }}
    >
      {loadingArticles ? (
        <>
          <RecommendationsSkeleton />
          <RecommendationsSkeleton />
          <RecommendationsSkeleton />
        </>
      ) : (
        articles.map((item, i) => {
          const image =
            item.images?.[0] && item.images?.[0].url
              ? item.images?.[0].url
              : Fallback.src;

          return (
            <ListItemButton
              component="li"
              onClick={() => handleClickArticle(item)}
              alignItems="flex-start"
              key={item.id}
              divider={i !== articles.length - 1}
            >
              <ListItemAvatar>
                <Image
                  src={image}
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
