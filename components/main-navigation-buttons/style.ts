import { CSSProperties } from "react";

export const styleWrapper = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  flexWrap: "wrap",
  minWidth: 300,
  width: "100%",
  p: 1,
};

export const styleTitle = {
  color: "inherit",
  position: "relative",
  p: 4,
  pt: 2,
  pb: 2,
};

export const styleImage: CSSProperties = {
  objectFit: "cover",
  borderRadius: "10px",
};
