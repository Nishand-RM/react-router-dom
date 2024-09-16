import React from 'react';
import Product from './Product';

function ProductList(props) {
  const { products, onAdd, onRemove, cartItems } = props;

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Product
              product={product}
              onAdd={onAdd}
              onRemove={onRemove}
              inCart={cartItems.some(item => item.id === product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;