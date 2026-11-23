import React from "react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>Dhruv<span>Shopping</span></h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
        />
        <button>🔍</button>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="cart-btn">🛒 Cart</button>
      </div>

    </nav>
  );
}

export default Navbar;