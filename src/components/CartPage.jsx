import React from "react";

export default function CartPage({
  cart,
  updateQty,
  removeItem,
  subtotal,
  onBrowseProducts,
  onProceedToCheckout,
}) {
  return (
    <section>
      <h3>Shopping Cart Page</h3>

      {cart.length === 0 ? (
        <div style={styles.box}>
          <p>Your cart is empty.</p>
          <button style={styles.primaryBtn} onClick={onBrowseProducts}>
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Product</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>QTY</th>
                <th style={styles.th}>Subtotal</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td style={styles.td}>{item.name}</td>
                  <td style={styles.td}>${item.price}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => updateQty(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <span style={{ margin: "0 10px" }}>{item.qty}</span>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </td>
                  <td style={styles.td}>${item.price * item.qty}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.dangerBtn}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove QTY
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={styles.summaryBox}>
            <p>
              <strong>Subtotal:</strong> ${subtotal}
            </p>
            <p>
              <strong>Grand Total:</strong> ${subtotal}
            </p>
            <button style={styles.primaryBtn} onClick={onProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
}

const styles = {
  box: { border: "1px solid #ddd", borderRadius: 8, padding: 20, background: "#fff" },
  table: { width: "100%", borderCollapse: "collapse", marginBottom: 16 },
  th: { borderBottom: "2px solid #ddd", textAlign: "left", padding: 10 },
  td: { borderBottom: "1px solid #eee", padding: 10 },
  summaryBox: { textAlign: "right", padding: 16, border: "1px solid #ddd", borderRadius: 8, background: "#fafafa" },
  primaryBtn: { padding: "10px 16px", borderRadius: 6, border: "none", background: "#2563eb", color: "#fff", cursor: "pointer", fontWeight: "bold" },
  qtyBtn: { padding: "4px 10px", cursor: "pointer" },
  dangerBtn: { padding: "6px 10px", borderRadius: 4, border: "none", background: "#dc2626", color: "#fff", cursor: "pointer" },
};