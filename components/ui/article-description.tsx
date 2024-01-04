"use client";
import Typography from "@mui/material/Typography";
import { theme } from "../theme";

export default function ArticleDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Typography
      sx={{
        mb: 2,
        fontSize: { md: "1.3rem" },
        fontStyle: "italic",
        color: `${theme.palette.text.secondary}`,
      }}
      textAlign={"start"}
      //   gutterBottom
      variant="body2"
      component="p"
    >
      {children}
    </Typography>
  );
}
