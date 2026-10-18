import type { Metadata } from "next";
import "./styles/tokens.css";
import "./styles/components.css";
import "./globals.css";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "The Workshop Shelf",
  description: "A cozy little world of coding projects. Come in and explore.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="day">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&family=Pixelify+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
