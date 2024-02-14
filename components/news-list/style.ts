import { CSSProperties } from "react";

//pagination

export const stylePaginationWrapper: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

// list

export const styleList = {
  width: "100%",
  bgcolor: "background.paper",
  pt: 0,
};

//listItem

export const styleListItemAvatarMD = { display: { xs: "none", md: "block" } };

export const styleListItemAvatarSX = { display: { xs: "block", md: "none" } };

export const styleListItemText = {
  width: { xs: 180, sm: "80%" },
  flexGrow: 1,
  flexShrink: 0,
  pl: 1,
};
