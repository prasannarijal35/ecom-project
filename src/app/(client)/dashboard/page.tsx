import { RequireAuthProvider } from "@/providers";
import React from "react";

export default function page() {
  return (
    <RequireAuthProvider>
      <div> user ko dashboard</div>
    </RequireAuthProvider>
  );
}
