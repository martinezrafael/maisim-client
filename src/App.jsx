import React from "react";
import "./index.css";
import Header from "./components/Global/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import NotFound from "./components/pages/NotFound";
import UserItem from "./components/User/UserItem";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <UserItem />
      <Routes>
        <Route path="/users/:id" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
