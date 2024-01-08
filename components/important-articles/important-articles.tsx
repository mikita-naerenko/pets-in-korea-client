"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";
import { Article } from "@/lib/type";
import { Dog, MousePointerSquareDashed } from "lucide-react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";
import SectionTitle from "../ui/Section-title";
import { useState } from "react";
import Fallback from "../../public/fallback.jpg";

export default function ImportantArticles({
  items,
  title,
}: {
  items: Article[];
  title: string;
}) {
  const offset = 3;
  const [showedItems, setShowedItems] = useState<number>(6);

  const handleClickMoreButton = () => {
    showedItems > items.length
      ? setShowedItems(items.length)
      : setShowedItems(showedItems + offset);
  };

  const handleClickSingleItem = (item: Article) => {
    window.location.assign(`/${item.id}`);
  };

  return (
    <Container disableGutters>
      <SectionTitle title={title} svg={<MousePointerSquareDashed />} />
      <Box display={"flex"} flexDirection="column" alignItems="center">
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
          {items.slice(0, showedItems).map((item) => {
            const image =
              item.images?.[0] && item.images?.[0].url
                ? item.images?.[0].url
                : Fallback.src;
            return (
              <ImageListItem
                key={item.id}
                onClick={() => handleClickSingleItem(item)}
              >
                <Image
                  src={image}
                  width={300}
                  height={400}
                  quality={80}
                  alt={item.title}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    display: "block",
                    flexGrow: 1,
                  }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.description}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: { xs: "100%", md: "30%" }, margin: "0 auto" }}
          variant="contained"
          endIcon={<Dog />}
          onClick={handleClickMoreButton}
          disabled={showedItems >= items.length}
        >
          Боольше интересных статей
        </Button>
      </div>
    </Container>
  );
}
