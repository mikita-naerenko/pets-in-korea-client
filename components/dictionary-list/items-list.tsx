"use client";
import { useState } from "react";
import Image from "next/image";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { Theme } from "@/lib/type";

import Fallback from "@/public/fallback.jpg";
import getThemes from "@/actions/get-themes";

// export async function getStaticProps() {
//   const themes = await getThemes();

//   return {
//     props: {
//       themes,
//     },
//   };
// }

export default function ItemsList({ themes }: { themes: Theme[] }) {
  const [showedItems, setShowedItems] = useState<number>(6);

  const handleClick = (item: Theme) => {
    window.location.assign(`/dictionary/${item.id}`);
  };
  return (
    <>
      {themes.slice(0, showedItems).map((item, i) => {
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
      })}
    </>
  );
}
