"use client";

import { Tag } from "@/lib/type";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import fallback from "../../public/fallback.jpg";

export default function ArticlesSetList({ tags }: { tags: Tag[] }) {
  const router = useRouter();

  const handleClick = (tag: string) => {
    router.push(`/articles-set/${tag}`);
  };
  return (
    <Container maxWidth="md" sx={{ height: "100:", minHeight: 1000 }}>
      <Box
        component="ul"
        display={"flex"}
        sx={{
          //   flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        {tags.map((tag) => {
          return (
            <Button
              component="li"
              key={tag.id}
              onClick={() => handleClick(tag.label)}
              sx={{
                width: { xs: "100%", sm: "50%" },
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Image
                src={
                  tag.images[0] && tag.images[0].url
                    ? tag.images[0].url
                    : fallback.src
                }
                width={100}
                height={80}
                style={{ width: "auto" }}
                alt={tag.rusTitle}
              />
              <Typography
                sx={{ ml: 2, fontSize: { xs: "0.8rem", md: "1rem" } }}
              >
                {tag.rusTitle}
              </Typography>
            </Button>
          );
        })}
      </Box>
    </Container>
  );
}
