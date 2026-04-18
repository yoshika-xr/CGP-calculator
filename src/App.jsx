import React from "react";
import Header from "./componant/Header";
import Footer from "./componant/Footer";
import Content from "./componant/content";
import Sidebar from "./componant/Sidebar";

function App(){
  return(
    <div>
      <Header />
      <diV className="main-container">
      <Content />
      <Sidebar />
      </diV>
      <Footer />
    </div>
  )
}

export default App;