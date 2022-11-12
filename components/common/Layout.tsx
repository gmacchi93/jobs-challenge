import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
