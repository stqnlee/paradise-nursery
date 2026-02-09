import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
  selectCartItems,
  selectCartTotal
} from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

export default function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="container">
      <h1 style={{ marginTop: 0 }}>Shopping Cart</h1>

      {items.length === 0 ? (
        <>
          <p>Your cart is empty. Add some plants to get started.</p>
          <button className="smallBtn" onClick={() => navigate("/plants")}>
            Continue Shopping
          </button>
        </>
      ) : (
        <>
          {items.map((item) => (
            <div className="cartItem" key={item.id}>
              <img className="cartThumb" src={item.img} alt={item.name} />

              <div>
                <div style={{ fontWeight: 900, fontSize: 18 }}>{item.name}</div>
                <div style={{ opacity: 0.85 }}>Unit Price: ${item.price.toFixed(2)}</div>
                <div style={{ marginTop: 8, fontWeight: 800 }}>
                  Item Total: ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>

              <div style={{ justifySelf: "end" }}>
                <div className="qtyBox">
                  <button
                    className="smallBtn"
                    onClick={() => dispatch(decreaseQty(item.id))}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <div style={{ fontWeight: 900, minWidth: 24, textAlign: "center" }}>
                    {item.quantity}
                  </div>
                  <button
                    className="smallBtn"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                </div>

                <div style={{ marginTop: 10 }}>
                  <button
                    className="smallBtn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="totalBox">
            <div style={{ fontWeight: 900, fontSize: 18 }}>
              Total Amount: ${total.toFixed(2)}
            </div>

            <div className="actions">
              <button
                className="smallBtn"
                onClick={() => alert("Checkout: Coming Soon!")}
              >
                Checkout
              </button>

              <button className="smallBtn" onClick={() => navigate("/plants")}>
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}