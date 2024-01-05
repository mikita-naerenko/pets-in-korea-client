"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function NotFound() {
  const router = useRouter();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography mb={5} variant="h2">
        Кажется, что-то пошло не так :{"("}
      </Typography>
      <Button
        sx={{ width: { xs: "100%", md: "30%" }, margin: "0 auto" }}
        variant="contained"
        onClick={router.back}
      >
        Попробовать снова
      </Button>
    </Container>
  );
}
