import { Register } from "@/components/common/register";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Generated using nextjs",
};

export default function page() {
  return <Register />;
}
