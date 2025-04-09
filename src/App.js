import React from "react";
import Todo from "./features/todo/Todo";
import User from "./features/user/User";
import Login from "./features/user/Login";
import Header from "./features/Header/Header"
import Footer from "./features/Footer/Footer"
import Home from "./features/Home/Home"
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
export default App;