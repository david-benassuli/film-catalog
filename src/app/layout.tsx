import type { Metadata } from "next";
import "./globals.css";

import { MovieProvider } from "@/context/MovieContext";

export const metadata: Metadata = {
  title: "Catálogo de filmes",
  description: "Criado por Felipe David",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <MovieProvider>
          {children}
        </MovieProvider>
      </body>
    </html>
  );
}
