import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";

// layout itu digunakan untuk base nya

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
