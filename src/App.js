import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./features/todo/Todo";
import User from "./features/user/User";
import Login from "./features/user/Login";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import Home from "./features/Home/Home";
const App = () => {
  return (
    <div className="App-Container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Todo />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;