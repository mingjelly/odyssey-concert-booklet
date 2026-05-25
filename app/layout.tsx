import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Concert Booklet",
  description: "A concert program booklet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
