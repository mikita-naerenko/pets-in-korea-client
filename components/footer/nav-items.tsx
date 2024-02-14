import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NAV_ITEMS } from "@/lib/constants";
import { theme } from "../theme";

export default function NavItems() {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        justifyContent: "space-between",
        display: { xs: "none", md: "flex" },
        ml: { md: 10 },
        flexWrap: "wrap",
        mx: "auto",
      }}
    >
      {NAV_ITEMS.map((item, i) => {
        return (
          <Link
            key={item.href + item.label}
            href={item.href}
            style={{ width: "29%", height: "fit-content" }}
          >
            <Typography
              sx={{
                color: `${
                  pathname === item.href
                    ? theme.palette.secondary.main
                    : "#ffffff"
                }`,
              }}
            >
              {item.label}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
}
