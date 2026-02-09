import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/CartSlice";

export default function Navbar() {
  const count = useSelector(selectCartCount);

  return (
    <div className="nav">
      <div style={{ fontWeight: 900 }}>Paradise Nursery</div>

      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          Cart <span className="badge">{count}</span>
        </Link>
      </div>
    </div>
  );
}