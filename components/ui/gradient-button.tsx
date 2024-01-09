"use client";

import Button from "@mui/material/Button";

interface GradientButtonProps {
  handleClick: () => void;
  disabled: boolean;
  title: string;
}

export default function GradientButton({
  handleClick,
  disabled,
  title,
}: GradientButtonProps) {
  return (
    <Button
      sx={{
        width: { xs: "100%", md: "33%" },
        margin: "0 auto",
        backgroundImage: `linear-gradient(to right, #2b1654 0%, #2575fc 100%)`,
        transition: " 0.5s ease",
        backgroundSize: "300% auto",
        "&:hover": {
          backgroundPosition: "right center",
        },
        "&:disabled": {
          backgroundImage: `linear-gradient(to right, #EEEEEE
                0%, #EEEEEE
                100%)`,
        },
      }}
      variant="contained"
      size="large"
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
}
