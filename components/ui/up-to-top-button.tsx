"use client";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "@mui/material/Button";

export default function UpToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      size="large"
      aria-label="up-to-top"
      variant="contained"
      onClick={handleClick}
      sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 10 }}
    >
      <ArrowUpwardIcon />
    </Button>
  );
}
