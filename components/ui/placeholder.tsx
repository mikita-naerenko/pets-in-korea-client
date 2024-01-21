"use client";
import Img from "../../public/placeholder.png";
import GradientButton from "./gradient-button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Placeholder() {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
    >
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "1rem", md: "2rem" }, my: 2 }}
      >
        Эта страница ещё в разработке, загляните позже
      </Typography>
      <Image
        src={Img}
        alt={"Страница в разработке"}
        width={400}
        height={400}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "400px",
          marginBottom: "30px",
        }}
      />
      <GradientButton
        title="Вернуться на главную"
        handleClick={() => router.push("/")}
      />
    </Box>
  );
}
