import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from '../store/cartSlice';

const CartItem = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, event) => {
    const newQuantity = Number(event.target.value);
    dispatch(updateItemQuantity({ id, quantity: newQuantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="50" />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <select value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e)}>
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
              <p>Total Price: ${item.totalPrice.toFixed(2)}</p>
            </div>
          ))}
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartItem;
