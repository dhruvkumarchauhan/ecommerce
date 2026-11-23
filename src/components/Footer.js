import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>Dhruv<span>Shopping</span></h2>
          <p>
            Your one-stop destination for fashion,
            electronics and lifestyle products.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
        </div>

        <div className="footer-box">
          <h3>Customer Service</h3>
          <a href="/">My Account</a>
          <a href="/">Shopping Cart</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>

        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>Email: support@dhruvshopping.com</p>
          <p>Phone: +91 7984042507</p>
          <p>Location: Ahmedabad, Gujarat</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Dhruv Shopping. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;