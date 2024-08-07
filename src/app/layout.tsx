import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "500" });

export const metadata: Metadata = {
  title: "Foundr",
  description: "Share your journey and connect with other founders. Foundr is a web page bulder that allows you to create a personalized single page website to share your accomplishments, experiences, and goals with the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
