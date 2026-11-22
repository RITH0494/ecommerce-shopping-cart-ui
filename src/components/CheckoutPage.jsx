import React, { useState } from "react";

export default function CheckoutPage({
  cart,
  shippingMethods,
  subtotal,
  onBackToShop,
  onPlaceOrder,
}) {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    shippingMethod: shippingMethods[0]?.id || "standard",
  });
  const [errors, setErrors] = useState({});

  const selectedShipping =
    shippingMethods.find((m) => m.id === customer.shippingMethod) || shippingMethods[0];
  const shippingFee = cart.length > 0 ? selectedShipping.fee : 0;
  const grandTotal = subtotal + shippingFee;

  const validateForm = () => {
    const newErrors = {};
    if (!customer.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!customer.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!customer.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(customer.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!customer.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!customer.address.trim()) newErrors.address = "Address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!validateForm()) return;

    onPlaceOrder({
      customer: { ...customer },
      shippingLabel: selectedShipping.label,
      shippingFee,
      subtotal,
      grandTotal,
    });
  };

  if (cart.length === 0) {
    return (
      <section style={styles.box}>
        <h3>Practical Exercise: Checkout Form</h3>
        <p>No items in cart to checkout.</p>
        <button style={styles.primaryBtn} onClick={onBackToShop}>
          Back to Shop
        </button>
      </section>
    );
  }

  return (
    <section>
      <h3>Practical Exercise: Checkout Form</h3>
      <form onSubmit={handleSubmit} style={styles.checkoutLayout}>
        <div style={styles.box}>
          <h4>Customer Information</h4>

          <div style={styles.field}>
            <label>First Name *</label>
            <input
              style={styles.input}
              type="text"
              value={customer.firstName}
              onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })}
            />
            {errors.firstName && <span style={styles.error}>{errors.firstName}</span>}
          </div>

          <div style={styles.field}>
            <label>Last Name *</label>
            <input
              style={styles.input}
              type="text"
              value={customer.lastName}
              onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })}
            />
            {errors.lastName && <span style={styles.error}>{errors.lastName}</span>}
          </div>

          <div style={styles.field}>
            <label>Email *</label>
            <input
              style={styles.input}
              type="email"
              value={customer.email}
              onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>

          <div style={styles.field}>
            <label>Phone Number *</label>
            <input
              style={styles.input}
              type="tel"
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
            />
            {errors.phone && <span style={styles.error}>{errors.phone}</span>}
          </div>

          <div style={styles.field}>
            <label>Address *</label>
            <textarea
              style={styles.input}
              rows="3"
              value={customer.address}
              onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
            />
            {errors.address && <span style={styles.error}>{errors.address}</span>}
          </div>

          <div style={styles.field}>
            <label>Shipping Method</label>
            <select
              style={styles.input}
              value={customer.shippingMethod}
              onChange={(e) => setCustomer({ ...customer, shippingMethod: e.target.value })}
            >
              {shippingMethods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.label} (${method.fee})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={styles.box}>
          <h4>Order Summary</h4>
          <ul style={{ paddingLeft: 18 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: 6 }}>
                {item.name} x {item.qty} = <strong>${item.price * item.qty}</strong>
              </li>
            ))}
          </ul>
          <hr />
          <p>Items Subtotal: ${subtotal}</p>
          <p>
            Shipping ({selectedShipping.label}): ${shippingFee}
          </p>
          <h4>Grand Total: ${grandTotal}</h4>

          <button type="submit" style={styles.primaryBtn}>
            Place Order
          </button>
        </div>
      </form>
    </section>
  );
}

const styles = {
  box: { border: "1px solid #ddd", borderRadius: 8, padding: 20, background: "#fff" },
  checkoutLayout: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" },
  field: { display: "flex", flexDirection: "column", marginBottom: 12, gap: 4 },
  input: { padding: 8, borderRadius: 4, border: "1px solid #ccc", fontSize: 14 },
  error: { color: "#dc2626", fontSize: 12 },
  primaryBtn: { padding: "10px 16px", borderRadius: 6, border: "none", background: "#2563eb", color: "#fff", cursor: "pointer", fontWeight: "bold" },
};