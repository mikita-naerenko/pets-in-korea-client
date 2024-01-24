import type { Metadata } from "next";
import { PT_Sans_Caption } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { theme } from "@/components/theme";
import Header from "@/components/header/header";
import Container from "@mui/material/Container";
import Footer from "@/components/footer/footer";
import UpToTopButton from "@/components/ui/up-to-top-button";
import { ToastProvider } from "@/providers/toast-provider";
import t from "./snippet-logo.png";

const font = PT_Sans_Caption({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Pets in Korea. Информация о домашних животных в Южной Корее",
  description:
    "Информационный портал для русскоязычных владельцев домашних животных в Южной Корее. Советы по перевозке, правила и документы.",
  keywords: [
    "Привезти кошку в Корею",
    "Привезти собаку в Южную Корею",
    "Ветклиники в Южной Корее",
    "Ввоз и вывоз домашних животных Южная Корея",
    "Законы о животных в Южной Корее",
    "Как взять из приюта кошку",
    "Корм и лекарства для домашних животных",
    "Уход за домашними животными в Южной Корее",
    "Аренда квартиры в Корее",
    "Кастрировать кота в Корее цена",
    "Подготовка к переезду с животными в Южной Корее",
    "Стерелизация собаки в Корее",
    "Приюты в Корее",
  ],
  creator: "Mikita Naerenko",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <meta
        property="og:title"
        content="Pets in Korea. информация о домашних животных в южной корее"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.pets-in-korea.com" />
      <meta
        property="og:image"
        content={`https://www.pets-in-korea.com${t.src}`}
      />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="450" />
      {/* <meta
        property="og:image"
        content="https://www.pets-in-korea.com/snippet-logo.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="1024" /> */}
      <ThemeProvider theme={theme}>
        <body className={font.className} style={{ position: "relative" }}>
          <Container maxWidth={"xl"}>
            <ToastProvider />
            <Header>{children}</Header>
            <UpToTopButton />
            <Footer />
          </Container>
        </body>
      </ThemeProvider>
    </html>
  );
}
