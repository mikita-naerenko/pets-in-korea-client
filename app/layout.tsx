import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { theme } from "@/components/theme";
import Header from "@/components/header/header";
import Container from "@mui/material/Container";
import Footer from "@/components/footer/footer";
import UpToTopButton from "@/components/ui/up-to-top-button";

const font = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Client",
  description: "test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <ThemeProvider theme={theme}>
        <body className={font.className} style={{ position: "relative" }}>
          <Container maxWidth={"xl"}>
            {/* <Header> */}
            {children}
            {/* </Header> */}
            <UpToTopButton />
            <Footer />
          </Container>
        </body>
      </ThemeProvider>
    </html>
  );
}
