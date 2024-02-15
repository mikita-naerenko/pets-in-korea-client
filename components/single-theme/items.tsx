import { Theme } from "@/lib/type";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";
import Placeholder from "@/components/ui/placeholder";
import {
  stileListItemButton,
  styleListItemText,
  styleListItemTranscription,
  styleListItemTranslate,
} from "./style";

export default function Items({ theme }: { theme: Theme }) {
  return (
    <>
      {theme.phrases.length > 0 ? (
        theme.phrases.map((item, i) => {
          return (
            <ListItemButton
              sx={stileListItemButton}
              component="li"
              key={item.id}
              divider
            >
              <ListItemText sx={styleListItemText} primary={item.phrase} />
              <ListItemText
                sx={styleListItemTranslate}
                primary={item.rusTranslates[0].translate}
                secondary={
                  <>
                    <Typography
                      sx={styleListItemTranscription}
                      component="span"
                      variant="body2"
                    ></Typography>
                    {item.rusTranslates[0].transcription}
                  </>
                }
              />
            </ListItemButton>
          );
        })
      ) : (
        <Placeholder />
      )}
    </>
  );
}
