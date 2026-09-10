import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rešite se problema sa javnim izvršiteljima",
  description:
    "Razumite šta se dešava kada izvršitelj blokira račun, platu ili imovinu. Dobijte jasnu početnu orijentaciju i sledeći korak.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
