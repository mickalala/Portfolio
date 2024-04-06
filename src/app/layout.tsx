import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import "./globals.scss";

const inter = Lusitana({
    subsets: ["latin"],
    weight: ['400', '700']
  });

export const metadata: Metadata = {
  title: "Mickaelly Larissa",
  description: "Mickaelly Larissa is a Full-Stack Software Developer...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
