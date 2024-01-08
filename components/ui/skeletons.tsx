import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Container from "@mui/material/Container";
import { BookType } from "lucide-react";
import SectionTitle from "./Section-title";
import List from "@mui/material/List";

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
        <RecommendationsSkeleton />
        <RecommendationsSkeleton />
        <RecommendationsSkeleton />
        <RecommendationsSkeleton />
        <RecommendationsSkeleton />
        <RecommendationsSkeleton />
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
