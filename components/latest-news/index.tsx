"use client";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";

import { News } from "@/lib/type";
import Container from "@mui/material/Container";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import SectionTitle from "../ui/Section-title";
import Fallback from "../../public/fallback.jpg";

export default function LatestNews({ latest6News }: { latest6News: News[] }) {
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
        {latest6News.map((item) => {
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
                    filter: "brightness(0.6)",
                  }}
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
      <div
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      ></div>
    </Container>
  );
}
