import "./index.scss";
import React from "react";
import Header from "./components/Header/index";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
