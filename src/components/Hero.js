import React from "react";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h4>WELCOME TO DHRUV SHOPPING</h4>

        <h1>
          Discover Your
          <span> Style & Lifestyle</span>
        </h1>

        <p>
          Shop the latest fashion, electronics and accessories
          at amazing prices.
        </p>

        <button className="shop-btn">
          Shop Now →
        </button>

      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
          alt="Shopping"
        />
      </div>

    </section>
  );
}

export default Hero;