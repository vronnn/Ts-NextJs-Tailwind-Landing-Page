import exp from "constants";
import { type } from "os";
import React from "react";
import Footer from "./Footer";

type PageLayout = {
  children: React.ReactNode;
};

const Layout = ({ children }: PageLayout) => {
  return (
    <>
      <section id="home" className="pt-24">
        <div className="container">
          <div className="flex flex-wrap">{children}</div>
        </div>
      </section>
    </>
  );
};

export default Layout;
