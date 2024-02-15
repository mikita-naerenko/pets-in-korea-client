import List from "@mui/material/List";

import { Theme } from "@/lib/type";
import Items from "./items";
import { styleList } from "./style";

export default function ListItems({ theme }: { theme: Theme }) {
  return (
    <List sx={styleList}>
      <Items theme={theme} />
    </List>
  );
}
