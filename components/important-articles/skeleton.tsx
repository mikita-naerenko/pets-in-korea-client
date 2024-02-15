import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Skeleton from "@mui/material/Skeleton";
import { MousePointerSquareDashed } from "lucide-react";
import SectionTitle from "../ui/Section-title";
import { styleImageList, styleImageListItem, styleItemBar } from "./style";

export function ImageListItemSkeleton({ delay }: { delay: number }) {
  return (
    <ImageListItem sx={styleImageListItem}>
      <Skeleton sx={{ transform: "scale(1)" }} width={"100%"} height={250} />

      <ImageListItemBar
        title={<Skeleton width={"100%"} height={40} />}
        subtitle={<Skeleton width={"100%"} height={40} />}
        sx={styleItemBar}
      />
    </ImageListItem>
  );
}

export function ImportantArticlesSkeleton({ title }: { title: string }) {
  return (
    <Container disableGutters>
      <SectionTitle title={title} svg={<MousePointerSquareDashed />} />
      <Box display={"flex"} flexDirection="column" alignItems="center">
        <ImageList sx={styleImageList} cols={0} gap={15}>
          <ImageListItemSkeleton delay={0} />
          <ImageListItemSkeleton delay={1} />
          <ImageListItemSkeleton delay={2} />
          <ImageListItemSkeleton delay={3} />
          <ImageListItemSkeleton delay={4} />
          <ImageListItemSkeleton delay={5} />
          {/* <ImageListItemSkeleton delay={6} />
          <ImageListItemSkeleton delay={7} />
          <ImageListItemSkeleton delay={8} /> */}
        </ImageList>
      </Box>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button
          sx={{
            width: { xs: "100%", md: "33%" },
            margin: "0 auto",
            backgroundImage: `linear-gradient(to right, #2b1654 0%, #2575fc 100%)`,
            transition: " 0.5s ease",
            backgroundSize: "300% auto",
            "&:hover": {
              backgroundPosition: "right center",
            },
            "&:disabled": {
              backgroundImage: `linear-gradient(to right, #EEEEEE
                0%, #EEEEEE
                100%)`,
            },
          }}
          variant="contained"
          size="large"
        >
          Боольше интересных статей
        </Button>
      </div>
    </Container>
  );
}
