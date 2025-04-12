import React from "react";
import { RequireAuthProvider } from "@/providers";
import { BreadCrumb } from "@/components/common";
import { Orders } from "@/components/orders";

export default function page() {
  return (
    <RequireAuthProvider>
      <BreadCrumb title="Orders" />
      <Orders />
    </RequireAuthProvider>
  );
}
