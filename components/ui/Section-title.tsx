"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

const style = {
  svg: {
    mt: 6,
    mb: 3,
    mr: 1,
    fontSize: { md: "1.8rem" },
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    mt: 5,
    mb: 3,
    fontSize: { md: "1.8rem" },
    fontWeight: "600",
    textAlign: "center",
  },
};

export default function SectionTitle({
  title,
  svg,
}: {
  title: string;
  svg?: ReactNode;
}) {
  return (
    <Box display={"flex"} alignItems="center" justifyContent="center">
      <Typography sx={style.svg} gutterBottom variant="h5" component="span">
        {svg ? svg : null}
      </Typography>
      <Typography sx={style.text} gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
    </Box>
  );
}
