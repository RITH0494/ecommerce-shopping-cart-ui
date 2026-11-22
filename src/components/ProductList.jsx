import React from "react";

export default function ProductList({ products, addToCart, totalItems, onGoToCart }) {
  return (
    <section>
      <h3>Practical Exercise 1: Products</h3>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h4>{product.name}</h4>
            <p style={styles.price}>${product.price}</p>
            <button style={styles.primaryBtn} onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <button style={styles.secondaryBtn} onClick={onGoToCart}>
          Go to Shopping Cart ({totalItems} items)
        </button>
      </div>
    </section>
  );
}

const styles = {
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 16 },
  card: { border: "1px solid #ddd", borderRadius: 8, padding: 16, background: "#fafafa" },
  price: { fontSize: 18, fontWeight: "bold", color: "#2563eb" },
  primaryBtn: { padding: "10px 16px", borderRadius: 6, border: "none", background: "#2563eb", color: "#fff", cursor: "pointer", fontWeight: "bold" },
  secondaryBtn: { padding: "10px 16px", borderRadius: 6, border: "1px solid #2563eb", background: "#eff6ff", color: "#2563eb", cursor: "pointer", fontWeight: "bold" },
};