import MobileSideBar from "@/components/MobileSideBar";
import SideBar from "@/components/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SideBar/>
      <MobileSideBar/>
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
