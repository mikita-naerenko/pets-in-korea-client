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
      noimageindex: true,
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
      <ThemeProvider theme={theme}>
        <body className={font.className} style={{ position: "relative" }}>
          <Container maxWidth={"xl"}>
            <Header>{children}</Header>
            <UpToTopButton />
            <Footer />
          </Container>
        </body>
      </ThemeProvider>
    </html>
  );
}
