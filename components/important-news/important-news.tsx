"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import { News } from "@/lib/type";
import NoImageNews from "../../public/no-image-news.png";
import { theme } from "../theme";
import Container from "@mui/material/Container";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import SectionTitle from "../ui/Section-title";
import { useState } from "react";
import Fallback from "../../public/fallback.jpg";

export default function ImportantNews({ latestNews }: { latestNews: News[] }) {
  const [showedNews, setShowedNews] = useState<number>(3);
  const offset = 3;
  const handleClickMoreButton = () => {
    showedNews > latestNews.length
      ? setShowedNews(latestNews.length)
      : setShowedNews(showedNews + offset);
  };
  return (
    <Container disableGutters component={"section"}>
      <SectionTitle title="Последние новости:" svg={<PawPrint />} />
      <ImageList
        sx={{
          width: "100%",
          mb: 3,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
        cols={0}
      >
        {latestNews.slice(0, showedNews).map((item) => {
          const image =
            item.images?.[0] && item.images?.[0].url
              ? item.images?.[0].url
              : Fallback.src;
          return (
            <Link href={`/news/${item.id}`} key={item.id}>
              <ImageListItem
                sx={{
                  ".MuiImageListItem-img": {
                    filter: "brightness(0.6)",
                  },
                  "&:hover, &.MuiImageListItem-img": {
                    filter: "brightness(1.3)",
                  },
                }}
              >
                <img
                  src={image}
                  // style={{ filter: "brightness(0.6)" }}
                  width={300}
                  height={400}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    height: "30%",
                    ".MuiImageListItemBar-title": { whiteSpace: "wrap" },
                  }}
                  title={item.title}
                  subtitle={<span>{item.description}</span>}
                  position="bottom"
                />
              </ImageListItem>
            </Link>
          );
        })}
      </ImageList>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: { xs: "100%", md: "30%" }, margin: "0 auto" }}
          variant="contained"
          endIcon={<PawPrint />}
          onClick={handleClickMoreButton}
          disabled={showedNews >= latestNews.length}
        >
          Читать ещё
        </Button>
      </div>
    </Container>
  );
}
