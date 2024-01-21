import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2>Кажется, что-то пошло не так :{"("}</h2>
      <Link href={"/"}>
        <Button>
          {/* sx={{ width: { xs: "100%", md: "30%" }, margin: "0 auto" }}
        variant="contained"
        onClick={router.back} */}
          Вернуться на главную
        </Button>
      </Link>
    </main>
  );
}
