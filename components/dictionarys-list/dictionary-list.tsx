"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Theme } from "@/lib/type";
import {
  Button,
  Container,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material";
import { BookType } from "lucide-react";
import SectionTitle from "../ui/Section-title";
import { useState } from "react";
import Image from "next/image";
import Fallback from "../../public/fallback.jpg";

export default function DictionaryList({ themes }: { themes: Theme[] }) {
  const theme = useTheme();
  const [showedItems, setShowedItems] = useState<number>(10);
  const offset = 3;
  const handleClickMoreButton = () => {
    showedItems > themes.length
      ? setShowedItems(themes.length)
      : setShowedItems(showedItems + offset);
  };
  const handleClick = (item: Theme) => {
    window.location.assign(`/dictionary/${item.id}`);
  };
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
        {themes.slice(0, showedItems).map((item, i) => {
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
                  src={Fallback.src}
                  quality={70}
                  width={50}
                  height={40}
                  alt={`${item.label} `}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.label}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    Описание для темы разговорника
                    {/* {item.description.slice(0, 50)}... */}
                  </>
                }
              />
            </ListItemButton>
          );
        })}
      </List>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: { xs: "100%", md: "30%" }, margin: "0 auto" }}
          variant="contained"
          endIcon={<BookType />}
          onClick={handleClickMoreButton}
          disabled={showedItems >= themes.length}
        >
          Смотреть ещё
        </Button>
      </div>
    </Container>
  );
}
