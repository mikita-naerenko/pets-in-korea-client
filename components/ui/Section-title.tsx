"use client";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export default function SectionTitle({
  title,
  svg,
}: {
  title: string;
  svg?: ReactNode;
}) {
  return (
    <Typography
      sx={{
        mt: 5,
        mb: 3,
        fontSize: { md: "1.8rem" },
        fontWeight: "600",
      }}
      textAlign={"center"}
      gutterBottom
      variant="h5"
      component="h2"
    >
      {svg ? svg : null} {title}
    </Typography>
  );
}
