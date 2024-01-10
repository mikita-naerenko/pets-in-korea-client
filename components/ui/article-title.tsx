"use client";
import Typography from "@mui/material/Typography";
import { theme } from "../theme";

export default function ArticleTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Typography
      sx={{
        mt: { xs: 3, md: 0 },
        mb: 0.5,
        mr: 0.5,
        fontSize: { md: "1.8rem" },
        fontWeight: "600",
      }}
      textAlign={"start"}
      //   gutterBottom
      variant="h5"
      component="h2"
    >
      {children}
    </Typography>
  );
}
