"use client";
import React, { ReactNode, useState } from "react";
import { AdminFooter, AdminHeader, AdminLeftSide } from "../adminPannel";
import { RequireAuthProvider } from "@/providers";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const toogleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <RequireAuthProvider role="admin">
      <div className="w-screeen flex ">
        <AdminLeftSide
          sideBarOpen={sideBarOpen}
          toogleSideBar={toogleSideBar}
        />
        <main className="flex-1 flex flex-col bg-gray-50 h-screen">
          <header>
            <AdminHeader
              sideBarOpen={sideBarOpen}
              toogleSideBar={toogleSideBar}
            />
          </header>

          <div className="flex-1 px-4 overflow-auto">{children}</div>
          <footer>
            <AdminFooter />
          </footer>
        </main>
      </div>
    </RequireAuthProvider>
  );
}
