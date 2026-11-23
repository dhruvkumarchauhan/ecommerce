import React, { useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Studio Wireless Headphones",
    category: "Tech",
    price: 3499,
    old: 4999,
    rating: 4.9,
    reviews: 128,
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
  },
  {
    id: 2,
    name: "Minimal Smart Watch",
    category: "Tech",
    price: 5299,
    old: 6999,
    rating: 4.8,
    reviews: 96,
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
  },
  {
    id: 3,
    name: "Everyday Runner Sneakers",
    category: "Fashion",
    price: 2899,
    old: 3999,
    rating: 4.7,
    reviews: 214,
    tag: "-28%",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
  },
  {
    id: 4,
    name: "Urban Explorer Backpack",
    category: "Lifestyle",
    price: 1799,
    old: 2499,
    rating: 4.8,
    reviews: 87,
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900",
  },
  {
    id: 5,
    name: "Everyday Classic Shades",
    category: "Fashion",
    price: 1299,
    old: 1899,
    rating: 4.6,
    reviews: 73,
    tag: "TRENDING",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900",
  },
  {
    id: 6,
    name: "Creator Mirrorless Camera",
    category: "Tech",
    price: 24999,
    old: 29999,
    rating: 4.9,
    reviews: 54,
    tag: "PRO PICK",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900",
  },
  {
    id: 7,
    name: "Soft Knit Weekend Hoodie",
    category: "Fashion",
    price: 2199,
    old: 2999,
    rating: 4.7,
    reviews: 142,
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900",
  },
  {
    id: 8,
    name: "Ceramic Coffee Set",
    category: "Lifestyle",
    price: 999,
    old: 1499,
    rating: 4.8,
    reviews: 61,
    tag: "GIFT PICK",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=900",
  },
  {
    id: 9,
    name: "Portable Bluetooth Speaker",
    category: "Tech",
    price: 1999,
    old: 2799,
    rating: 4.6,
    reviews: 109,
    tag: "-29%",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900",
  },
  {
    id: 10,
    name: "Modern Desk Lamp",
    category: "Lifestyle",
    price: 1599,
    old: 2199,
    rating: 4.7,
    reviews: 45,
    tag: "JUST IN",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900",
  },
  {
    id: 11,
    name: "Leather Everyday Wallet",
    category: "Fashion",
    price: 899,
    old: 1299,
    rating: 4.5,
    reviews: 88,
    tag: "VALUE",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900",
  },
  {
    id: 12,
    name: "Sleek Travel Bottle",
    category: "Lifestyle",
    price: 699,
    old: 999,
    rating: 4.6,
    reviews: 120,
    tag: "ECO PICK",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900",
  },
];

const categories = [
  { name: "All", icon: "✦", note: "Everything you love" },
  { name: "Tech", icon: "⌁", note: "Smart essentials" },
  { name: "Fashion", icon: "◇", note: "Wear your story" },
  { name: "Lifestyle", icon: "☼", note: "Live beautifully" },
];

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const visibleProducts = useMemo(() => {
    let list = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        p.name.toLowerCase().includes(search.toLowerCase()),
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, search, sort]);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
    setNotice(`${product.name} added to your bag`);
    window.setTimeout(() => setNotice(""), 2300);
  };
  const toggleWishlist = (id) =>
    setWishlist((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const removeFromCart = (index) =>
    setCart((current) => current.filter((_, i) => i !== index));

  return (
    <div className="site-shell">
      <div className="announcement">
        A LITTLE SOMETHING EXTRA — FREE SHIPPING ON ORDERS OVER ₹1,999{" "}
        <span>✦</span>
      </div>
      <header className="header">
        <button
          className="mobile-menu icon-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <a className="brand" href="#home">
          n<span>o</span>va<span className="brand-dot">.</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#shop" onClick={() => setMenuOpen(false)}>
            Shop
          </a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>
            Collections
          </a>
          <a href="#story" onClick={() => setMenuOpen(false)}>
            Our story
          </a>
          <a href="#footer" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <label className="search-box">
            <span>⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
            />
          </label>
          <button
            className="icon-button wishlist-top"
            aria-label="Wishlist"
            onClick={() => {
              setCategory("All");
              setSearch("");
              document
                .getElementById("shop")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>♡</span>
            <i>{wishlist.length}</i>
          </button>
          <button className="bag-button" onClick={() => setCartOpen(true)}>
            <span>Bag</span>
            <b>{cart.length}</b>
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span></span> THE EVERYDAY EDIT · 2026
            </div>
            <h1>
              Find your
              <br />
              <em>next</em> favourite.
            </h1>
            <p>
              Thoughtful finds. Beautiful details. Everyday essentials that make
              the ordinary feel a little more extraordinary.
            </p>
            <div className="hero-buttons">
              <a className="button button-dark" href="#shop">
                Explore the edit <span>↗</span>
              </a>
              <a className="text-link" href="#collections">
                Discover collections <span>→</span>
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <b>J</b>
                <b>A</b>
                <b>M</b>
                <b>+</b>
              </div>
              <div>
                <strong>4.9/5</strong>
                <small>Loved by 12k+ happy customers</small>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-main">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200"
                alt="Curated fashion and lifestyle collection"
              />
            </div>
            <div className="hero-sticker">
              <span>
                GOOD
                <br />
                THINGS
              </span>
              <b>✳</b>
              <small>for good days</small>
            </div>
            <div className="hero-caption">
              <span>01 / 04</span>
              <span>CURATED FOR YOU</span>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Store benefits">
          <div>
            GOOD DESIGN, GOOD ENERGY <span>✳</span> MADE FOR EVERYDAY{" "}
            <span>✳</span> LITTLE DETAILS, BIG JOY <span>✳</span> GOOD DESIGN,
            GOOD ENERGY <span>✳</span> MADE FOR EVERYDAY <span>✳</span>
          </div>
        </section>

        <section className="category-section" id="collections">
          <div className="section-heading">
            <div>
              <div className="eyebrow">A WORLD OF GOOD FINDS</div>
              <h2>
                Browse by <em>mood.</em>
              </h2>
            </div>
            <p>
              Whatever your day looks like,
              <br />
              there's something here for it.
            </p>
          </div>
          <div className="category-grid">
            {categories.slice(1).map((item, i) => (
              <button
                key={item.name}
                className={`category-tile category-${i}`}
                onClick={() => {
                  setCategory(item.name);
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="category-icon">{item.icon}</span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.note}</small>
                </span>
                <b>↗</b>
              </button>
            ))}
          </div>
        </section>

        <section className="shop-section" id="shop">
          <div className="section-heading shop-heading">
            <div>
              <div className="eyebrow">THE GOOD STUFF</div>
              <h2>
                Trending <em>right now.</em>
              </h2>
              <p className="section-subtitle">
                Handpicked pieces worth making room for.
              </p>
            </div>
            <div className="sort-wrap">
              <label htmlFor="sort">Sort by</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </div>
          </div>
          <div className="shop-toolbar">
            <div className="filter-pills">
              {categories.map((item) => (
                <button
                  key={item.name}
                  className={
                    category === item.name
                      ? "filter-pill active"
                      : "filter-pill"
                  }
                  onClick={() => setCategory(item.name)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <span>{visibleProducts.length} thoughtfully picked pieces</span>
          </div>
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900";
                    }}
                  />
                  <span className="product-tag">{product.tag}</span>
                  <button
                    className={
                      wishlist.includes(product.id)
                        ? "heart-button liked"
                        : "heart-button"
                    }
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to wishlist"
                  >
                    {wishlist.includes(product.id) ? "♥" : "♡"}
                  </button>
                  <button
                    className="quick-add"
                    onClick={() => addToCart(product)}
                  >
                    Add to bag <span>+</span>
                  </button>
                </div>
                <div className="product-details">
                  <div className="product-category">{product.category}</div>
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <div>
                      <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                      <del>₹{product.old.toLocaleString("en-IN")}</del>
                    </div>
                    <span className="rating">
                      ★ {product.rating} <small>({product.reviews})</small>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {visibleProducts.length === 0 && (
            <div className="empty-state">
              <span>⌕</span>
              <h3>No finds just yet.</h3>
              <p>Try another search or category.</p>
              <button
                className="button button-dark"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
          <div className="view-all">
            <span>GOOD FINDS, NO END IN SIGHT.</span>
            <span>
              Showing {visibleProducts.length} of {products.length}
            </span>
          </div>
        </section>

        <section className="story-banner" id="story">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
              alt="A thoughtfully curated modern store"
            />
          </div>
          <div className="story-copy">
            <div className="eyebrow">NOT JUST ANOTHER STORE</div>
            <h2>
              Less scrolling.
              <br />
              <em>More loving</em>
              <br />
              what you find.
            </h2>
            <p>
              We believe the best things aren't always the loudest. Nova brings
              together useful, beautiful, feel-good finds — selected with a
              little extra care.
            </p>
            <a href="#shop" className="button button-light">
              Get to know us <span>↗</span>
            </a>
            <div className="story-mark">
              n<span>.</span>
            </div>
          </div>
        </section>

        <section className="promise-row">
          <div>
            <span>✳</span>
            <strong>Good quality, always</strong>
            <small>Pieces made to be kept.</small>
          </div>
          <div>
            <span>↗</span>
            <strong>Easy, happy shopping</strong>
            <small>No fuss. Just good finds.</small>
          </div>
          <div>
            <span>♡</span>
            <strong>Here when you need us</strong>
            <small>Real people, real support.</small>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div>
            <a className="brand footer-brand" href="#home">
              n<span>o</span>va<span className="brand-dot">.</span>
            </a>
            <p>Everyday things. A little more special.</p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <a href="#shop">Shop all</a>
              <a href="#collections">Collections</a>
              <a href="#story">Our story</a>
            </div>
            <div>
              <strong>Need a hand?</strong>
              <a href="mailto:hello@nova.example">Get in touch</a>
              <a href="#footer">Shipping & returns</a>
              <a href="#footer">FAQs</a>
            </div>
            <div>
              <strong>Stay in the loop</strong>
              <p>Good finds, new drops, happy inbox.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNotice("You're on the list — see you in your inbox!");
                  window.setTimeout(() => setNotice(""), 2500);
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  aria-label="Your email address"
                />
                <button aria-label="Subscribe">→</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NOVA STUDIO. MADE FOR EVERYDAY.</span>
          <span>
            INSTAGRAM&nbsp;&nbsp; · &nbsp;&nbsp;PINTEREST&nbsp;&nbsp; ·
            &nbsp;&nbsp;MADE WITH ✳
          </span>
        </div>
      </footer>
      {notice && <div className="toast">✓ &nbsp;{notice}</div>}
      {cartOpen && (
        <div className="drawer-backdrop" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-head">
              <div>
                <div className="eyebrow">YOUR GOOD FINDS</div>
                <h2>
                  Your bag <em>({cart.length})</em>
                </h2>
              </div>
              <button
                className="icon-button close-button"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>
            {cart.length ? (
              <>
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div className="cart-item" key={`${item.id}-${index}`}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <span>₹{item.price.toLocaleString("en-IN")}</span>
                        <button onClick={() => removeFromCart(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>₹{total.toLocaleString("en-IN")}</strong>
                  </div>
                  <small>Shipping calculated at checkout.</small>
                  <button
                    className="button button-dark checkout-button"
                    onClick={() =>
                      setNotice("Checkout demo — payment is not connected yet.")
                    }
                  >
                    Continue to checkout <span>↗</span  >
                  </button>
                </div>
              </>
            ) : (
              <div className="cart-empty">
                <span>♡</span>
                <h3>Your bag is taking a little nap.</h3>
                <p>Let's find something you'll love.</p>
                <button
                  className="button button-dark"
                  onClick={() => {
                    setCartOpen(false);
                    document
                      .getElementById("shop")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore the shop
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
export default App;
