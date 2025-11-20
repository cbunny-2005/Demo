import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sathvik Chekkali | Computer Science Graduate",
  description: "B.Tech Computer Science Graduate specializing in Python, Machine Learning, and Backend Development. Passionate about data science and building innovative solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
