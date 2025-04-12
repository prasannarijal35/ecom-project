import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Webiste",
  description: "Ecommerce website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
