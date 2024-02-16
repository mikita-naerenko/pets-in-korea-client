"use client";
import Typography from "@mui/material/Typography";

const styleTypography = {
  mt: { xs: 3, md: 0 },
  mb: 0.5,
  mr: 0.5,
  fontSize: { md: "2.3rem" },
  fontWeight: "600",
  textAlign: "start",
};

export default function ArticleTitle({
  children,
  itemProp,
}: {
  itemProp?: string;
  children: React.ReactNode;
}) {
  return (
    <Typography
      sx={styleTypography}
      variant="h5"
      component="h1"
      itemProp={itemProp}
    >
      {children}
    </Typography>
  );
}
