import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
