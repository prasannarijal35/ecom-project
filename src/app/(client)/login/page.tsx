import { Login } from "@/components/login";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Generated using nextjs",
};

export default function page() {
  return (
    <>
      <Login />
    </>
  );
}
