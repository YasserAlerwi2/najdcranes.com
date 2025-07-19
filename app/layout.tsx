import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Najd Cranes",
  description: "Leading construction equipment rental company in Saudi Arabia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
