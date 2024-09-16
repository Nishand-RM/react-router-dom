import React from 'react';
import './Product.css'; 

function Product(props) {
  const { product, onAdd, onRemove, inCart } = props;

  const renderRating = (rating) => {
    return Array.from({ length: 5 }, (v, i) => (
      <span
        key={i}
        className={`star ${i < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="card mb-4">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.description}
        </p>
        <p className="card-price">{product.price}</p>
        {product.category === 'Popular' && (
          <div className="rating">
            {renderRating(product.rating)}
          </div>
        )}
        {inCart ? (
          <button className="btn btn-danger" onClick={() => onRemove(product)}>
            Remove from Cart
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;