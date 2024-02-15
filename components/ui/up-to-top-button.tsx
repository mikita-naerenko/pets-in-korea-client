"use client";
import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "@mui/material/Button";

export default function UpToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < prevScrollPosition && scrollPosition > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      setPrevScrollPosition(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <>
      <Button
        size="large"
        aria-label="up-to-top"
        variant="contained"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: { xs: 50, md: 90, lg: 20 },
          backgroundColor: "rgba(43, 22, 84, 0.5)",
          right: 20,
          zIndex: 10,
          opacity: showButton ? 1 : 0,
          transition: " 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(43, 22, 84, 1)",
          },
        }}
      >
        <ArrowUpwardIcon />
      </Button>
    </>
  );
}
