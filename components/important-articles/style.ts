import { CSSProperties } from "react";

export const styleImageList = {
  overflow: "hidden",
  width: "100%",
  mb: 3,
  gridTemplateColumns: {
    xs: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  },
  p: 1,
};

export const styleWrapperButton = {
  width: "100%",
  justifyContent: "center",
  display: "flex",
};

//Image list item

export const styeImage: CSSProperties = {
  borderRadius: "10px",
  boxShadow:
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
  filter: "brightness(0.8)",
  objectFit: "cover",
  width: "100%",
  height: "auto",
  display: "block",
  flexGrow: 1,
  transition: "filter 0.2s ease-in-out",
  opacity: 0,
};

export const styleImageLoaded = {
  opacity: 1,
  transition: "opacity 1s ease",
};

export const styleImageListItem = {
  boxShadow:
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
  borderRadius: "10px",
  animation: "fadeIn 0.2s ease-in-out",

  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.01)",
    "& .MuiImageListItemBar-root": {
      height: "8rem",
      background: "rgba(0, 0, 0, 0.7)",
    },
    "& .MuiImageListItemBar-subtitle": {
      whiteSpace: "normal",
    },
  },
};

export const styleItemBar = {
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  height: { xs: "6rem" },
  transition: "height 0.2s ease-in-out, background 0.2s ease-in-out",
  "& .MuiImageListItemBar-title": {
    paddingBottom: "0.7rem",
    display: "flex",
    alignItems: "center",
    whiteSpace: "normal",
  },
  "& .MuiImageListItemBar-subtitle": {
    paddingBottom: "0.3rem",
    display: { xs: "none", md: "block" },
  },
};

export const hoverStyle = {
  filter: "brightness(1)",
};
