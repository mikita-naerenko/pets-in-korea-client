"use client";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";

import { Article } from "@/lib/type";
import { useCurrentProps } from "@/hooks/use-current-props";

import Fallback from "@/public/fallback.jpg";
import { styleSubheader, styleList } from "./style";

export default function OtherArticles({ articles }: { articles: Article[] }) {
  const currentProps = useCurrentProps();
  const handleClick = (article: Article) => {
    currentProps.setCurrentArticle(article);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <List
      subheader={
        <ListSubheader
          component="h2"
          id="nested-list-subheader"
          sx={styleSubheader}
        >
          Ещё статьи по теме:
        </ListSubheader>
      }
      sx={styleList}
    >
      {articles.map((article, i) => {
        const image =
          article.images?.[0] && article.images?.[0].url
            ? article.images?.[0].url
            : Fallback.src;
        return (
          <ListItemButton
            component="li"
            onClick={() => handleClick(article)}
            alignItems="flex-start"
            key={article.id}
            divider={i !== articles.length - 1}
          >
            <ListItemAvatar>
              <Image
                src={image}
                quality={70}
                width={50}
                height={40}
                alt={`${article.title} `}
              />
            </ListItemAvatar>
            <ListItemText
              primary={article.title}
              itemProp="name"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {article.description.slice(0, 50)}...
                  </Typography>
                </>
              }
            />
          </ListItemButton>
        );
      })}
    </List>
  );
}
