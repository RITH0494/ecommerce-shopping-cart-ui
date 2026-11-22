import React from "react";

export default function OrderConfirmation({ order, onContinueShopping }) {
  if (!order) return null;

  return (
    <section style={styles.box}>
      <h3 style={{ color: "#15803d" }}>Order Placed Successfully!</h3>
      <p>
        <strong>Order ID:</strong> {order.orderId}
      </p>
      <p>
        <strong>Customer Name:</strong> {order.customer.firstName} {order.customer.lastName}
      </p>
      <p>
        <strong>Order Date:</strong> {order.orderDate}
      </p>
      <p>
        <strong>Shipping Method:</strong> {order.shippingLabel}
      </p>
      <p>
        <strong>Ordered Products:</strong>
      </p>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} — QTY: {item.qty} (${item.price * item.qty})
          </li>
        ))}
      </ul>
      <p>
        <strong>Total Amount:</strong> ${order.grandTotal}
      </p>
      <p>
        <strong>Order Status:</strong> {order.status}
      </p>

      <button style={styles.primaryBtn} onClick={onContinueShopping}>
        Continue Shopping
      </button>
    </section>
  );
}

const styles = {
  box: { border: "1px solid #ddd", borderRadius: 8, padding: 20, background: "#fff" },
  primaryBtn: { padding: "10px 16px", borderRadius: 6, border: "none", background: "#2563eb", color: "#fff", cursor: "pointer", fontWeight: "bold" },
};