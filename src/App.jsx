import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landingCard">
        <h1 style={{ marginTop: 0 }}>Welcome to Paradise Nursery</h1>
        <p style={{ fontSize: 18, lineHeight: 1.5 }}>
          Welcome to Paradise Nursery — your online destination for beautiful houseplants.
          Browse categories, add plants to your cart, and manage quantities easily.
        </p>

        <div className="actions" style={{ justifyContent: "center" }}>
          <button className="primaryBtn" onClick={() => navigate("/plants")}>
            Get Started
          </button>
          <button className="smallBtn" onClick={() => navigate("/about")}>
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <AboutUs />
          </>
        }
      />
      <Route
        path="/plants"
        element={
          <>
            <Navbar />
            <ProductList />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <CartItem />
          </>
        }
      />
    </Routes>
  );
}
