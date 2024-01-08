"use client";
import * as React from "react";
import {
  Container,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { BookType } from "lucide-react";
import SectionTitle from "../ui/Section-title";
import { Theme } from "../../lib/type";

export default function SingleTheme({ theme }: { theme: Theme }) {
  return (
    <Container disableGutters component={"section"}>
      <SectionTitle title={theme.label} svg={<BookType />} />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          pt: 0,
        }}
      >
        {theme.phrases.map((item, i) => {
          return (
            <ListItemButton
              sx={{ flexWrap: { xs: "wrap" } }}
              component="li"
              alignItems="flex-start"
              key={item.id}
              divider
            >
              <ListItemText
                sx={{
                  width: "50%",
                  minWidth: "200px",
                  flexGrow: 1,
                  flexShrink: 0,
                }}
                primary={item.phrase}
              />
              <ListItemText
                sx={{
                  width: "50%",
                  minWidth: "200px",
                  flexGrow: 1,
                  flexShrink: 0,
                }}
                primary={item.rusTranslates[0].translate}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.rusTranslates[0].transcription}
                  </>
                }
              />
            </ListItemButton>
          );
        })}
      </List>
    </Container>
  );
}
