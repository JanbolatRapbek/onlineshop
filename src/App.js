import "./index.scss";
import React from "react";
import Header from "./components/Header/index";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart/Cart";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState(" ");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
