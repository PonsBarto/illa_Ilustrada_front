import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OurStore from "./pages/OurStore";
import Us from "./pages/Us";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Reserpassword";
import SingleProduct from "./pages/SingelProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact/>} />
            <Route path="product" element={<OurStore/>}/>
            <Route path="product/:id" element={<SingleProduct/>}/>
            <Route path="nosotros" element={<Us/>}/>
            <Route path="favoritos" element={<Wishlist/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="forgot-password" element={<Forgotpassword/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="reset-password" element={<Resetpassword/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
