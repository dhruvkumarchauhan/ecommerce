import React from "react";

function Categories() {

  const categories = [
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400"
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400"
    },
    {
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
      name: "Watches",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
    }
  ];

  return (
    <section className="categories">

      <h2>Shop By Category</h2>

      <p>Explore Our Popular Categories</p>

      <div className="category-container">

        {categories.map((category, index) => (

          <div className="category-card" key={index}>

            <img src={category.image} alt={category.name} />

            <h3>{category.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;