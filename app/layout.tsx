import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeSage - Digital Agency",
  description: "Modern digital agency specializing in web development and 3D experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
