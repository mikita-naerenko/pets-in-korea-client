import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";

export const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  width: "100% !important",
  borderRadius: "10px",
  transition: "0.5s ease-in-out",
  marginBottom: "1%",
  boxShadow:
    "rgba(67, 71, 85, 0.27) 0px 0px 0.8em, rgba(90, 125, 188, 0.05) 0px 0.5em 1em",
  [theme.breakpoints.up("md")]: {
    width: "49.5% !important",
    marginBottom: "0.7%",
  },
  "& .MuiTypography-root": {
    border: `3px solid rgba(255, 255, 255, 0)`,
    transition: "0.2s linear",
  },
  "& .TitleButton-root": {
    fontSize: "1.5rem",
  },
  "&:hover": {
    boxShadow:
      "rgba(67, 71, 85, 0.50) 0px 0px 0.8em, rgba(90, 125, 188, 0.3) 0px 0.5em 1em",
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      width: "100%",
      marginRight: "5px",
      marginLeft: "5px",
      borderRadius: "10px",
      border: `3px solid rgba(255, 255, 255, 1)`,
      boxShadow:
        "rgba(67, 71, 85, 0.50) 0px 0px 0.8em, rgba(90, 125, 188, 0.3) 0px 0.5em 1em",
    },
    "& .TitleButton-root": {
      fontSize: "1.53rem",
    },
  },
}));
export const ImageContainer = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  borderRadius: "10px",
});

export const Content = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  borderRadius: "10px",
}));

export const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
  borderRadius: "10px",
}));

export const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 30,
  backgroundColor: `#ffffff`,
  position: "absolute",
  bottom: -3,
  left: "calc(50% - 14px)",
  transition: theme.transitions.create("opacity"),
}));
