"use client";
import Typography from "@mui/material/Typography";
import { theme } from "../theme";

const styleTypography = {
  mb: 2,
  mr: 0.5,
  fontSize: { md: "1.3rem" },
  // fontStyle: "italic",
  color: `${theme.palette.text.secondary}`,
  textAlign: "start",
};

export default function ArticleDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Typography
      sx={styleTypography}
      variant="body2"
      component="p"
      itemProp="description"
    >
      {children}
    </Typography>
  );
}
