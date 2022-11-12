import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode,
  className?: string,
};

const Layout = ({ children, className }: Props) => {
  return (
    <div className={className ? className : ""}>
      <header>
        <Navbar />
      </header>
      <div className={className !== undefined ? className : "container mx-auto"}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
