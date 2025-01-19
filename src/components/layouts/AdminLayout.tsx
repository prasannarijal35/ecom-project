"use client";
import React, { ReactNode, useState } from "react";
import { AdminFooter, AdminHeader, AdminLeftSide } from "../adminPannel";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const toogleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <div className="w-screeen flex ">
      <AdminLeftSide sideBarOpen={sideBarOpen} toogleSideBar={toogleSideBar} />
      <main className="flex-1 h-screen flex flex-col bg-gray-50">
        <header>
          <AdminHeader
            sideBarOpen={sideBarOpen}
            toogleSideBar={toogleSideBar}
          />
        </header>

        <div className="flex-1 p-4 overflow-auto">{children}</div>
        <footer>
          <AdminFooter />
        </footer>
      </main>
    </div>
  );
}
