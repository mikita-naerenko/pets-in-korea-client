import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { BookType } from "lucide-react";

import getThemes from "@/actions/get-themes";
import SectionTitle from "@/components/ui/Section-title";
import ItemsList from "./items-list";
import { styleList } from "./style";

export default async function DictionaryList(): Promise<JSX.Element> {
  const themes = await getThemes();
  return (
    <Container disableGutters component={"section"}>
      <SectionTitle title="Русско-корейский разговорник:" svg={<BookType />} />
      <List sx={styleList}>{themes && <ItemsList themes={themes} />}</List>
    </Container>
  );
}
