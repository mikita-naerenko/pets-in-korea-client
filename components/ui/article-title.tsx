"use client";
import Typography from "@mui/material/Typography";

export default function ArticleTitle({
  children,
  itemProp,
}: {
  itemProp?: string;
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
      component="h1"
      itemProp={itemProp}
    >
      {children}
    </Typography>
  );
}
