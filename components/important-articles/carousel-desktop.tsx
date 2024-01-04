"use client";
import { Article } from "@/lib/type";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useEffect, useRef, useState } from "react";

type ScrollContainerType = React.RefObject<HTMLDivElement>;

export default function CarouselDesktop({ items }: { items: Article[] }) {
  const scrollContainerRef: ScrollContainerType = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      return;
    }
    const containerWidth = scrollContainer.clientWidth;
    const scrollWidth = scrollContainer.scrollWidth;

    const scrollInterval = setInterval(() => {
      scrollContainer.scrollLeft += 290;
      if (scrollContainer.scrollLeft + containerWidth >= scrollWidth) {
        scrollContainer.scrollLeft = 0;
      }
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <Container
      maxWidth={"xl"}
      disableGutters
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        p: 0,
      }}
    >
      <Box
        ref={scrollContainerRef}
        sx={{
          display: "-webkit-box",
          overflow: "auto",
          py: 1,
          px: 0,
          scrollBehavior: "smooth",
          "::-webkit-scrollbar": {
            display: "none",
          },
          scrollbaWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((article) => {
          return (
            <Card
              sx={{
                mr: 2,
                width: "280px",
                height: "390px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
              key={article.id}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: "200px" }}
                  image={article?.images?.[0]?.url ?? "fallback-image-url"}
                  alt={article.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    fontSize={"1.2rem"}
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={"0.9rem"}
                  >
                    {article.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                // ref={buttonRef}
                sx={{
                  alignSelf: "center",
                  flexShrink: 1,
                  marginTop: "auto",
                }}
              >
                <Button size="small" color="primary">
                  читать
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
