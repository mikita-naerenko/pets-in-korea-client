"use client";

import { Tag } from "@/lib/type";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import fallback from "../../public/fallback.jpg";
import {
  boxWrapper,
  styleContainer,
  styleButton,
  styleImage,
  styleTypography,
} from "./style";

export default function ArticlesSetList({ tags }: { tags: Tag[] }) {
  const router = useRouter();

  const handleClick = (tag: string) => {
    router.push(`/articles-set/${tag}`);
  };
  return (
    <Container sx={styleContainer}>
      <Box component="ul" sx={boxWrapper}>
        {tags.map((tag) => {
          const image =
            tag.images[0] && tag.images[0].url
              ? tag.images[0].url
              : fallback.src;
          return (
            <Button
              component="li"
              key={tag.id}
              onClick={() => handleClick(tag.label)}
              sx={styleButton}
            >
              <Image
                src={image}
                width={100}
                height={80}
                style={styleImage}
                alt={tag.rusTitle}
              />
              <Typography sx={styleTypography}>{tag.rusTitle}</Typography>
            </Button>
          );
        })}
      </Box>
    </Container>
  );
}
