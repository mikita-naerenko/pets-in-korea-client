import type { Metadata } from "next";
import { PT_Sans_Caption } from "next/font/google";
import { Suspense } from "react";

import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "@/components/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";
import UpToTopButton from "@/components/ui/up-to-top-button";
import { Metrika } from "@/components/metrika";

import { ToastProvider } from "@/providers/toast-provider";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import SnippetLogo from "./snippet-logo.png";
import "./globals.css";

const font = PT_Sans_Caption({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
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
      <meta property="og:url" content="https://pets-in-korea.com" />
      <meta
        property="og:image"
        content={`https://pets-in-korea.com${SnippetLogo.src}`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="450" />
      <link
        rel="icon"
        href="https://pets-in-korea.com/favicon.ico"
        type="image/x-icon"
      ></link>

      <ThemeProvider theme={theme}>
        <body className={font.className} style={{ position: "relative" }}>
          <Container maxWidth={"xl"}>
            <Suspense>
              <Metrika />
            </Suspense>
            <ToastProvider />
            <Header>{children}</Header>
            <UpToTopButton />
            <Footer />
          </Container>
          <Analytics />
          <SpeedInsights />
        </body>
      </ThemeProvider>
    </html>
  );
}
