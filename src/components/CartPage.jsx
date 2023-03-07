import React from 'react';
import './CartPage.css';

function CartPage() {
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        <div className="cart-item">
          <img src="https://via.placeholder.com/150" alt="Product Image" />
          <div className="cart-item-details">
            <h2>Product Title</h2>
            <p>Price: $10.00</p>
            <p>Quantity: 2</p>
          </div>
          <button>Remove</button>
        </div>
        <div className="cart-item">
          <img src="https://via.placeholder.com/150" alt="Product Image" />
          <div className="cart-item-details">
            <h2>Product Title</h2>
            <p>Price: $20.00</p>
            <p>Quantity: 1</p>
          </div>
          <button>Remove</button>
        </div>
      </div>
      <div className="cart-summary">
        <p>Total Items: 3</p>
        <p>Total Price: $40.00</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;