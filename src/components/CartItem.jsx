import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartTotal,
} from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

export default function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Checkout: Coming Soon!");
  };

  const handleContinueShopping = () => {
    navigate("/plants");
  };

  return (
    <div className="container">
      <h1 style={{ marginTop: 0 }}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <>
          <p>Your cart is empty. Add some plants to get started.</p>
          <button className="smallBtn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </>
      ) : (
        <>
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div className="cartItem" key={item.id}>
                <img className="cartThumb" src={item.img} alt={item.name} />

                <div>
                  <div style={{ fontWeight: 900, fontSize: 18 }}>{item.name}</div>
                  <div style={{ opacity: 0.85 }}>
                    Unit Price: ${item.price.toFixed(2)}
                  </div>
                  <div style={{ marginTop: 8, fontWeight: 800 }}>
                    Total: ${itemTotal.toFixed(2)}
                  </div>
                </div>

                <div style={{ justifySelf: "end" }}>
                  <div className="qtyBox">
                    <button
                      className="smallBtn"
                      onClick={() => handleDecrement(item)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>

                    <div
                      style={{
                        fontWeight: 900,
                        minWidth: 24,
                        textAlign: "center",
                      }}
                    >
                      {item.quantity}
                    </div>

                    <button
                      className="smallBtn"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>

                  <div style={{ marginTop: 10 }}>
                    <button
                      className="smallBtn"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="totalBox">
            <div style={{ fontWeight: 900, fontSize: 18 }}>
              Total Cart Amount: ${totalAmount.toFixed(2)}
            </div>

            <div className="actions">
              <button className="smallBtn" onClick={handleCheckout}>
                Checkout
              </button>

              <button className="smallBtn" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
