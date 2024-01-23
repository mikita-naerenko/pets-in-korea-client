import getThemes from "@/actions/get-themes";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { BookType } from "lucide-react";
import SectionTitle from "../ui/Section-title";
import { RecommendationsSkeleton } from "../ui/skeletons";
import ItemsList from "./items-list";

export default async function DictionaryList(): Promise<JSX.Element> {
  const themes = await getThemes();
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
        {themes ? (
          <ItemsList themes={themes} />
        ) : (
          <>
            <RecommendationsSkeleton />
            <RecommendationsSkeleton />
            <RecommendationsSkeleton />
            <RecommendationsSkeleton />
            <RecommendationsSkeleton />
            <RecommendationsSkeleton />
          </>
        )}
        {/* {themes.slice(0, showedItems).map((item, i) => {
          const image =
            item.images?.[0] && item.images?.[0].url
              ? item.images?.[0].url
              : Fallback.src;
          return (
            <ListItemButton
              component="li"
              onClick={() => handleClick(item)}
              alignItems="flex-start"
              sx={{ width: { md: "50%" } }}
              key={item.id}
              divider
            >
              <ListItemAvatar>
                <Image
                  src={image}
                  quality={70}
                  width={50}
                  height={40}
                  alt={`${item.label} `}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.rusLabel}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.description}...
                  </>
                }
              />
            </ListItemButton>
          );
        })} */}
      </List>
    </Container>
  );
}
