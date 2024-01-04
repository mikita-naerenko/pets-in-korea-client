import { Article, News } from "@/lib/type";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Link from "next/link";
import { theme } from "../theme";

export default function AuthorInfo({ article }: { article: Article | News }) {
  const hrefResource = article.linkToSource ? article.linkToSource : "#";
  const hrefAuthor = article.authorLink ? article.authorLink : "#";
  return (
    <Box>
      {article.nameOfSource && (
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "0.8rem",
            textAlign: "end",
          }}
        >
          Переведенная статья с ресурса:{" "}
          <Link
            href={hrefResource}
            style={{ color: theme.palette.primary.main }}
          >
            {article.nameOfSource}
          </Link>
        </Typography>
      )}

      {article.authorName && (
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "0.8rem",
            textAlign: "end",
          }}
        >
          Автор статьи:{" "}
          <Link style={{ color: theme.palette.primary.main }} href={hrefAuthor}>
            {article.authorName}
          </Link>
        </Typography>
      )}
    </Box>
  );
}
