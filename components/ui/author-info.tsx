import { Article, News, titlePreview } from "@/lib/type";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Link from "next/link";
import { theme } from "../theme";

const styleTypography = {
  color: theme.palette.text.secondary,
  fontSize: "0.8rem",
  textAlign: "end",
};

const styleLink = { color: theme.palette.primary.main };

export default function AuthorInfo({
  article,
}: {
  article: Article | News | titlePreview;
}) {
  const hrefResource = article.linkToSource ? article.linkToSource : "#";
  const hrefAuthor = article.authorLink ? article.authorLink : "#";
  return (
    <Box>
      {article.nameOfSource && (
        <Typography sx={styleTypography}>
          Переведенная статья с ресурса:{" "}
          <Link href={hrefResource} style={styleLink}>
            {article.nameOfSource}
          </Link>
        </Typography>
      )}

      {article.authorName && (
        <Typography sx={styleTypography}>
          Автор статьи:{" "}
          <Link style={styleLink} href={hrefAuthor}>
            {article.authorName}
          </Link>
        </Typography>
      )}
    </Box>
  );
}
