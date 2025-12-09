import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

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
      <body>
        <SmoothScrolling />
        {children}
      </body>
    </html>
  );
}
