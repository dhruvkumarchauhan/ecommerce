import React from "react";

function Products() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1499,
      oldPrice: 1999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      oldPrice: 2999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 1999,
      oldPrice: 2499,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 4,
      name: "Stylish Backpack",
      price: 999,
      oldPrice: 1499,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 799,
      oldPrice: 1199,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 6,
      name: "Camera",
      price: 15999,
      oldPrice: 18999,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="products">

      <h2>Trending Products</h2>

      <p>Discover Our Best Selling Products</p>

      <div className="product-container">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <div className="product-info">

              <h3>{product.name}</h3>

              <p>{product.rating}</p>

              <h4>
                ₹{product.price}
                <del> ₹{product.oldPrice}</del>
              </h4>

              <button className="add-cart">
                Add To Cart 🛒
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;
