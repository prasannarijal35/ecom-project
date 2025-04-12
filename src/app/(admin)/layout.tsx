import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { AdminLayout } from "@/components/layouts";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Generated using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AdminLayout>{children}</AdminLayout>

        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
