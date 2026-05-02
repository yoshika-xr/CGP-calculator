import React, { useEffect, useState } from "react";
import Header from "./componant/Header";
import Content from "./componant/content";
import Sidebar from "./componant/Sidebar";
import Footer from "./componant/Footer";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <Header />
      <div className="main-section">
        <div className="left">
          <Content />
        </div>
        <div className="right">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
