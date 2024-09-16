import React from 'react';

function Cart(props) {
  const { cartItemCount } = props;

  return (
    <div className="position-fixed top-0 end-0 m-3 p-3 bg-dark text-white rounded">
      <h4>Cart: {cartItemCount}</h4>
    </div>
  );
}

export default Cart;