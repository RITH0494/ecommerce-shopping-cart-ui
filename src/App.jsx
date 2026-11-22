import React, { useState } from "react";
import "./App.css";

const TRANSLATIONS = {
  en: {
    products: "Products",
    cart: "Cart",
    checkout: "Checkout",
    viewCart: "View Cart",
    eyebrow: "Practical Exercise 1–3",
    heroTitle: "Modern Tech Gear & Accessories",
    heroSub: "Select products into your cart and proceed smoothly to checkout.",
    featuredTitle: "Featured Products",
    featuredSub: "4 sample items ready for shopping cart & order flow",
    inStock: "In Stock",
    addToCart: "Add to Cart",
    addedToast: (name) => `Added "${name}" to cart`,
    cartTitle: "Shopping Cart",
    cartSub: "Review and update product quantities before checkout",
    continueShopping: "Continue Shopping",
    emptyCart: "Your shopping cart is empty.",
    browseProducts: "Browse Products",
    colProduct: "Product",
    colPrice: "Price",
    colQty: "QTY",
    colSubtotal: "Subtotal",
    colAction: "Action",
    removeQty: "Remove QTY",
    cartSummary: "Cart Summary",
    itemsLabel: (count) => `Items (${count})`,
    subtotal: "Subtotal",
    grandTotal: "Grand Total",
    proceedCheckout: "Proceed to Checkout",
    backToCart: "Back to Cart",
    customerInfo: "Customer Information",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone Number",
    address: "Address",
    shippingMethod: "Shipping Method",
    orderSummary: "Order Summary",
    shipping: "Shipping",
    placeOrder: "Place Order",
    errFirstName: "First name is required.",
    errLastName: "Last name is required.",
    errEmailRequired: "Email is required.",
    errEmailInvalid: "Enter a valid email address.",
    errPhone: "Phone number is required.",
    errAddress: "Address is required.",
    orderSuccessBadge: "Order Placed Successfully!",
    orderConfirmTitle: "Order Confirmation",
    orderId: "Order ID",
    customerName: "Customer Name",
    orderDate: "Order Date",
    orderStatus: "Order Status",
    orderedProducts: "Ordered Products",
    totalAmount: "Total Amount",
    productsData: {
      1: { name: "Laptop", category: "Computers" },
      2: { name: "Mouse", category: "Accessories" },
      3: { name: "Keyboard", category: "Accessories" },
      4: { name: "Monitor", category: "Displays" },
    },
    shippingOptions: [
      { id: "standard", label: "Standard Delivery (2-3 days)", fee: 5 },
      { id: "express", label: "Express Delivery (Same day)", fee: 15 },
      { id: "pickup", label: "Store Pickup", fee: 0 },
    ],
  },
  km: {
    products: "ផលិតផល",
    cart: "កន្ត្រក",
    checkout: "ទូទាត់ប្រាក់",
    viewCart: "មើលកន្ត្រក",
    eyebrow: "លំហាត់អនុវត្តទី១ – ទី៣",
    heroTitle: "ឧបករណ៍បច្ចេកវិទ្យា និងគ្រឿងបន្ថែមទំនើប",
    heroSub: "ជ្រើសរើសផលិតផលដាក់ចូលកន្ត្រកទំនិញ និងបន្តទៅទំព័រ Checkout",
    featuredTitle: "ផលិតផលពិសេស",
    featuredSub: "ផលិតផលទាំង ៤ មុខសម្រាប់សាកល្បងកម្ម៉ង់",
    inStock: "មានក្នុងស្តុក",
    addToCart: "ដាក់ចូលកន្ត្រក",
    addedToast: (name) => `បានបន្ថែម "${name}" ចូលកន្ត្រក`,
    cartTitle: "កន្ត្រកទំនិញ",
    cartSub: "ពិនិត្យ និងកែប្រែចំនួនផលិតផលមុនបញ្ជាទិញ",
    continueShopping: "បន្តទិញទំនិញ",
    emptyCart: "កន្ត្រកទំនិញរបស់អ្នកកំពុងទទេ។",
    browseProducts: "មើលផលិតផល",
    colProduct: "ផលិតផល",
    colPrice: "តម្លៃ",
    colQty: "ចំនួន",
    colSubtotal: "សរុបមុខទំនិញ",
    colAction: "សកម្មភាព",
    removeQty: "លុបចេញ",
    cartSummary: "សង្ខេបកន្ត្រក",
    itemsLabel: (count) => `មុខទំនិញ (${count})`,
    subtotal: "សរុបរង",
    grandTotal: "តម្លៃសរុប",
    proceedCheckout: "បន្តទៅទូទាត់ប្រាក់",
    backToCart: "ត្រឡប់ទៅកន្ត្រក",
    customerInfo: "ព័ត៌មានអតិថិជន",
    firstName: "នាមខ្លួន",
    lastName: "គោត្តនាម",
    email: "អ៊ីមែល",
    phone: "លេខទូរស័ព្ទ",
    address: "អាសយដ្ឋាន",
    shippingMethod: "វិធីដឹកជញ្ជូន",
    orderSummary: "សង្ខេបការកម្ម៉ង់",
    shipping: "ថ្លៃដឹកជញ្ជូន",
    placeOrder: "បញ្ជាទិញ",
    errFirstName: "សូមបញ្ចូលនាមខ្លួន។",
    errLastName: "សូមបញ្ចូលគោត្តនាម។",
    errEmailRequired: "សូមបញ្ចូលអ៊ីមែល។",
    errEmailInvalid: "សូមបញ្ចូលអ៊ីមែលឱ្យបានត្រឹមត្រូវ។",
    errPhone: "សូមបញ្ចូលលេខទូរស័ព្ទ។",
    errAddress: "សូមបញ្ចូលអាសយដ្ឋាន។",
    orderSuccessBadge: "ការបញ្ជាទិញបានជោគជ័យ!",
    orderConfirmTitle: "បញ្ជាក់ការកម្ម៉ង់",
    orderId: "លេខកម្ម៉ង់",
    customerName: "ឈ្មោះអតិថិជន",
    orderDate: "កាលបរិច្ឆេទកម្ម៉ង់",
    orderStatus: "ស្ថានភាពកម្ម៉ង់",
    orderedProducts: "ផលិតផលដែលបានកម្ម៉ង់",
    totalAmount: "ទឹកប្រាក់សរុប",
    productsData: {
      1: { name: "កុំព្យូទ័រយួរដៃ (Laptop)", category: "កុំព្យូទ័រ" },
      2: { name: "កណ្តុរ (Mouse)", category: "គ្រឿងបន្ថែម" },
      3: { name: "ក្តារចុច (Keyboard)", category: "គ្រឿងបន្ថែម" },
      4: { name: "អេក្រង់ (Monitor)", category: "អេក្រង់" },
    },
    shippingOptions: [
      { id: "standard", label: "ដឹកជញ្ជូនធម្មតា (២–៣ ថ្ងៃ)", fee: 5 },
      { id: "express", label: "ដឹកជញ្ជូនរហ័ស (ក្នុងថ្ងៃតែមួយ)", fee: 15 },
      { id: "pickup", label: "ទទួលយកនៅហាងផ្ទាល់", fee: 0 },
    ],
  },
};

const BASE_PRODUCTS = [
  {
    id: 1,
    price: 650,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    price: 15,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    price: 25,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    price: 120,
    image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=600&q=80",
  },
];

function BrandLogoIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState("km");
  const t = TRANSLATIONS[lang];

  const [page, setPage] = useState("shop");
  const [cart, setCart] = useState([]);
  const [addedProductId, setAddedProductId] = useState(null);
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    shippingMethod: "standard",
  });
  const [errors, setErrors] = useState({});
  const [orderDetails, setOrderDetails] = useState(null);

  const products = BASE_PRODUCTS.map((item) => ({
    ...item,
    name: t.productsData[item.id].name,
    category: t.productsData[item.id].category,
  }));

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { id: product.id, image: product.image, price: product.price, qty: 1 }];
    });
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId((current) => (current === product.id ? null : current));
    }, 1800);
  };

  const updateQty = (id, newQty) => {
    if (newQty <= 0) {
      removeItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const selectedShipping =
    t.shippingOptions.find((m) => m.id === customer.shippingMethod) || t.shippingOptions[0];
  const shippingFee = cart.length > 0 ? selectedShipping.fee : 0;
  const grandTotal = subtotal + shippingFee;
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const validateForm = () => {
    const newErrors = {};
    if (!customer.firstName.trim()) newErrors.firstName = t.errFirstName;
    if (!customer.lastName.trim()) newErrors.lastName = t.errLastName;
    if (!customer.email.trim()) {
      newErrors.email = t.errEmailRequired;
    } else if (!/\S+@\S+\.\S+/.test(customer.email)) {
      newErrors.email = t.errEmailInvalid;
    }
    if (!customer.phone.trim()) newErrors.phone = t.errPhone;
    if (!customer.address.trim()) newErrors.address = t.errAddress;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0 || !validateForm()) return;

    setOrderDetails({
      orderId: "ORD-0001",
      customer: { ...customer },
      shippingLabel: selectedShipping.label,
      items: cart.map((item) => ({
        ...item,
        name: t.productsData[item.id].name,
      })),
      grandTotal,
      orderDate: new Date().toLocaleString(),
      status: "Pending",
    });
    setCart([]);
    setPage("confirmation");
  };

  const addedNotice =
    addedProductId !== null ? t.addedToast(t.productsData[addedProductId].name) : "";

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="brand" onClick={() => setPage("shop")}>
          <div className="brand-badge">
            <BrandLogoIcon />
          </div>
          <div>
            Online<span>Store</span>
          </div>
        </div>

        <div className="nav-actions">
          <nav className="nav-links">
            <button
              className={`nav-btn ${page === "shop" ? "active" : ""}`}
              onClick={() => setPage("shop")}
            >
              {t.products}
            </button>
            <button
              className={`nav-btn ${page === "cart" ? "active" : ""}`}
              onClick={() => setPage("cart")}
            >
              {t.cart} <span className="cart-pill">{totalItems}</span>
            </button>
            <button
              className={`nav-btn ${page === "checkout" ? "active" : ""}`}
              onClick={() => setPage("checkout")}
              disabled={cart.length === 0}
            >
              {t.checkout}
            </button>
          </nav>

          <div className="lang-toggle" role="group" aria-label="Language switcher">
            <button
              type="button"
              className={`lang-btn ${lang === "km" ? "active" : ""}`}
              onClick={() => setLang("km")}
            >
              ខ្មែរ
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Page 1: Products */}
      {page === "shop" && (
        <section>
          <div className="hero-banner">
            <div>
              <span className="hero-eyebrow">{t.eyebrow}</span>
              <h1 className="hero-title">{t.heroTitle}</h1>
              <p className="hero-sub">{t.heroSub}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              {addedNotice && (
                <span className="badge-success" style={{ marginBottom: 0 }}>
                  {addedNotice}
                </span>
              )}
              <button className="btn-hero" onClick={() => setPage("cart")}>
                {t.viewCart} ({totalItems})
              </button>
            </div>
          </div>

          <div className="page-header">
            <div>
              <h2 className="section-title">{t.featuredTitle}</h2>
              <p className="section-subtitle">{t.featuredSub}</p>
            </div>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div>
                  <div className="product-thumb">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-meta">
                    <span className="product-tag">{product.category}</span>
                    <span className="product-stock">{t.inStock}</span>
                  </div>
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">${product.price}</div>
                </div>
                <button className="btn-primary" onClick={() => addToCart(product)}>
                  {t.addToCart}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Page 2: Shopping Cart */}
      {page === "cart" && (
        <section>
          <div className="page-header">
            <div>
              <h2 className="section-title">{t.cartTitle}</h2>
              <p className="section-subtitle">{t.cartSub}</p>
            </div>
            <button className="btn-secondary" onClick={() => setPage("shop")}>
              {t.continueShopping}
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="card-box" style={{ textAlign: "center", padding: "52px 24px" }}>
              <p style={{ color: "#64748b", marginBottom: 18 }}>{t.emptyCart}</p>
              <button
                className="btn-primary"
                style={{ width: "auto", padding: "11px 24px" }}
                onClick={() => setPage("shop")}
              >
                {t.browseProducts}
              </button>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="table-wrapper">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>{t.colProduct}</th>
                      <th>{t.colPrice}</th>
                      <th>{t.colQty}</th>
                      <th>{t.colSubtotal}</th>
                      <th>{t.colAction}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => {
                      const itemName = t.productsData[item.id].name;
                      return (
                        <tr key={item.id}>
                          <td style={{ fontWeight: 700 }}>
                            <div className="cart-item-info">
                              <img src={item.image} alt={itemName} className="cart-item-img" />
                              <span>{itemName}</span>
                            </div>
                          </td>
                          <td>${item.price}</td>
                          <td>
                            <div className="qty-control">
                              <button
                                className="qty-btn"
                                onClick={() => updateQty(item.id, item.qty - 1)}
                              >
                                -
                              </button>
                              <span className="qty-value">{item.qty}</span>
                              <button
                                className="qty-btn"
                                onClick={() => updateQty(item.id, item.qty + 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td style={{ fontWeight: 700 }}>${item.price * item.qty}</td>
                          <td>
                            <button className="btn-danger" onClick={() => removeItem(item.id)}>
                              {t.removeQty}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="summary-card">
                <h3 className="summary-heading">{t.cartSummary}</h3>
                <div className="summary-row">
                  <span>{t.itemsLabel(totalItems)}</span>
                  <span>${subtotal}</span>
                </div>
                <div className="summary-row">
                  <span>{t.subtotal}</span>
                  <span>${subtotal}</span>
                </div>
                <div className="summary-total">
                  <span>{t.grandTotal}</span>
                  <span>${subtotal}</span>
                </div>
                <button
                  className="btn-primary"
                  style={{ marginTop: 20 }}
                  onClick={() => setPage("checkout")}
                >
                  {t.proceedCheckout}
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Page 3: Checkout */}
      {page === "checkout" && (
        <section>
          <div className="page-header">
            <div>
              <h2 className="section-title">{t.checkout}</h2>
              <p className="section-subtitle">{t.cartSub}</p>
            </div>
            <button className="btn-secondary" onClick={() => setPage("cart")}>
              {t.backToCart}
            </button>
          </div>

          <form onSubmit={handlePlaceOrder} className="checkout-grid">
            <div className="card-box">
              <h3 className="summary-heading">{t.customerInfo}</h3>

              <div className="form-row">
                <div className="form-group">
                  <label>{t.firstName} *</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Sok"
                    value={customer.firstName}
                    onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })}
                  />
                  {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label>{t.lastName} *</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Dara"
                    value={customer.lastName}
                    onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })}
                  />
                  {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>{t.email} *</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="dara@example.com"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>{t.phone} *</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="012 345 678"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label>{t.address} *</label>
                <textarea
                  className="form-input"
                  rows="3"
                  placeholder="Street, Sangkat, Khan, City"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                />
                {errors.address && <span className="error-text">{errors.address}</span>}
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>{t.shippingMethod}</label>
                <select
                  className="form-input"
                  value={customer.shippingMethod}
                  onChange={(e) => setCustomer({ ...customer, shippingMethod: e.target.value })}
                >
                  {t.shippingOptions.map((method) => (
                    <option key={method.id} value={method.id}>
                      {method.label} (${method.fee})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="summary-card">
              <h3 className="summary-heading">{t.orderSummary}</h3>
              {cart.map((item) => (
                <div key={item.id} className="summary-row">
                  <span>
                    {t.productsData[item.id].name} × {item.qty}
                  </span>
                  <span style={{ fontWeight: 700 }}>${item.price * item.qty}</span>
                </div>
              ))}

              <div
                className="summary-row"
                style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #f1f5f9" }}
              >
                <span>{t.subtotal}</span>
                <span>${subtotal}</span>
              </div>
              <div className="summary-row">
                <span>{t.shipping}</span>
                <span>${shippingFee}</span>
              </div>
              <div className="summary-total">
                <span>{t.grandTotal}</span>
                <span>${grandTotal}</span>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: 20 }}>
                {t.placeOrder}
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Page 4: Order Confirmation */}
      {page === "confirmation" && orderDetails && (
        <section className="confirm-card">
          <span className="badge-success">{t.orderSuccessBadge}</span>
          <h2 className="section-title" style={{ marginBottom: 18 }}>
            {t.orderConfirmTitle}
          </h2>

          <div className="detail-row">
            <span style={{ color: "#64748b" }}>{t.orderId}</span>
            <strong>{orderDetails.orderId}</strong>
          </div>
          <div className="detail-row">
            <span style={{ color: "#64748b" }}>{t.customerName}</span>
            <strong>
              {orderDetails.customer.firstName} {orderDetails.customer.lastName}
            </strong>
          </div>
          <div className="detail-row">
            <span style={{ color: "#64748b" }}>{t.orderDate}</span>
            <span>{orderDetails.orderDate}</span>
          </div>
          <div className="detail-row">
            <span style={{ color: "#64748b" }}>{t.orderStatus}</span>
            <span className="badge-pending">{orderDetails.status}</span>
          </div>

          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#64748b",
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              {t.orderedProducts}
            </div>
            {orderDetails.items.map((item) => (
              <div key={item.id} className="summary-row">
                <span>
                  {item.name} ({t.colQty}: {item.qty})
                </span>
                <strong>${item.price * item.qty}</strong>
              </div>
            ))}
          </div>

          <div className="summary-total" style={{ marginBottom: 22 }}>
            <span>{t.totalAmount}</span>
            <span>${orderDetails.grandTotal}</span>
          </div>

          <button className="btn-primary" onClick={() => setPage("shop")}>
            {t.continueShopping}
          </button>
        </section>
      )}
    </div>
  );
}