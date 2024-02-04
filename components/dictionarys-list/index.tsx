import getThemes from "@/actions/get-themes";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { BookType } from "lucide-react";
import SectionTitle from "../ui/Section-title";
import ItemsList from "./items-list";

export default async function DictionaryList(): Promise<JSX.Element> {
  const themes = await getThemes();
  return (
    <Container disableGutters component={"section"}>
      <SectionTitle title="Русско-корейский разговорник:" svg={<BookType />} />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          pt: 0,
          display: { md: "flex" },
          flexWrap: "wrap",
        }}
      >
        {themes && <ItemsList themes={themes} />}
      </List>
    </Container>
  );
}
