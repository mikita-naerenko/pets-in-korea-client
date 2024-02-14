import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Container from "@mui/material/Container";
import { BookType, MousePointerSquareDashed } from "lucide-react";
import SectionTitle from "./Section-title";
import List from "@mui/material/List";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import image from "next/image";
import GradientButton from "./gradient-button";

export function RecommendationsSkeleton() {
  return (
    <ListItemButton divider>
      <ListItemAvatar>
        <Skeleton variant="rectangular" width={50} height={40} />
      </ListItemAvatar>

      <ListItemText>
        <Skeleton variant="text" width={210} height={20} />
        <Skeleton variant="text" width={210} height={20} />
      </ListItemText>
    </ListItemButton>
  );
}

export function NewsItemSkeleton() {
  return (
    <ListItemButton divider>
      <ListItemAvatar>
        <Skeleton
          variant="rectangular"
          sx={{ width: { xs: 40, sm: 70 }, height: { xs: 30, sm: 60 } }}
        />
      </ListItemAvatar>

      <ListItemText>
        <Skeleton variant="rectangular" width={"100%"} height={30} />
      </ListItemText>
    </ListItemButton>
  );
}

export function AuthorInfoSkeleton() {
  return (
    <Box>
      <Skeleton variant="text" width={210} height={20} />
      <Skeleton variant="text" width={210} height={20} />
    </Box>
  );
}

export function DictionaryItemList() {
  return (
    <ListItemButton
      alignItems="flex-start"
      divider
      component="li"
      sx={{ width: { md: "50%" } }}
    >
      <ListItemAvatar>
        <Skeleton variant="rectangular" width={50} height={40} />
      </ListItemAvatar>

      <ListItemText
        primary={<Skeleton variant="text" width={210} height={20} />}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            ></Typography>
            <Skeleton variant="text" width={210} height={20} />
          </>
        }
      ></ListItemText>
    </ListItemButton>
  );
}

export function DictionarySkeleton() {
  return (
    <Container disableGutters component={"section"}>
      <SectionTitle
        title="Русско-корейский разговорник по темам:"
        svg={<BookType />}
      />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          pt: 0,
          display: { md: "flex" },
          flexWrap: "wrap",
        }}
      >
        <DictionaryItemList />
        <DictionaryItemList />
        <DictionaryItemList />
        <DictionaryItemList />
        <DictionaryItemList />
        <DictionaryItemList />
      </List>
    </Container>
  );
}

export function ArticlePageSkeleton() {
  return (
    <Container disableGutters>
      <Box sx={{ display: { md: "flex" } }}>
        <Box
          sx={{
            width: { md: "60%" },
            display: { md: "flex" },
            flexDirection: "column",
          }}
        >
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              mr: 2,
              alignSelf: "end",
              marginTop: "auto",
            }}
          >
            <AuthorInfoSkeleton />
          </Box>
        </Box>
        <Box sx={{ width: { md: "40%" } }}>
          <Skeleton variant="rectangular" width={250} height={300} />
        </Box>
      </Box>
      <Box sx={{ display: { md: "flex" }, mt: { md: 3 } }}>
        <Box sx={{ width: { md: "70%" } }}>
          <Skeleton variant="rectangular" width={"100%"} height={600} />
          <AuthorInfoSkeleton />
        </Box>
        {/* <Box sx={{ width: { md: "30%" } }}>
          <OtherArticles articles={otherArticles} />
        </Box> */}
      </Box>
    </Container>
  );
}

export function ImageListItemSkeleton({ delay }: { delay: number }) {
  return (
    <ImageListItem
      sx={{
        boxShadow:
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
        borderRadius: "10px",
        animation: "fadeIn 0.2s ease-in-out",

        "@keyframes fadeIn": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
          "& .MuiImageListItemBar-root": {
            height: "8rem",
            background: "rgba(0, 0, 0, 0.7)",
          },
          "& .MuiImageListItemBar-subtitle": {
            whiteSpace: "normal",
          },
        },
      }}
    >
      <Skeleton sx={{ transform: "scale(1)" }} width={"100%"} height={250} />

      <ImageListItemBar
        title={<Skeleton width={"100%"} height={40} />}
        subtitle={<Skeleton width={"100%"} height={40} />}
        sx={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          height: { xs: "6rem" },
          transition: "height 0.2s ease-in-out, background 0.2s ease-in-out",
          "& .MuiImageListItemBar-title": {
            paddingBottom: "0.7rem",
            display: "flex",
            alignItems: "center",
            whiteSpace: "normal",
          },
          "& .MuiImageListItemBar-subtitle": {
            paddingBottom: "0.3rem",
            display: { xs: "none", md: "block" },
          },
        }}
      />
    </ImageListItem>
  );
}

export function ImportantArticlesSkeleton({ title }: { title: string }) {
  return (
    <Container disableGutters>
      <SectionTitle title={title} svg={<MousePointerSquareDashed />} />
      <Box display={"flex"} flexDirection="column" alignItems="center">
        <ImageList
          sx={{
            overflow: "hidden",
            width: "100%",
            mb: 3,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            p: 1,
          }}
          cols={0}
          gap={15}
        >
          <ImageListItemSkeleton delay={0} />
          <ImageListItemSkeleton delay={1} />
          <ImageListItemSkeleton delay={2} />
          <ImageListItemSkeleton delay={3} />
          <ImageListItemSkeleton delay={4} />
          <ImageListItemSkeleton delay={5} />
          <ImageListItemSkeleton delay={6} />
          <ImageListItemSkeleton delay={7} />
          <ImageListItemSkeleton delay={8} />
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
