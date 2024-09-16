import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  { id: 1, name: 'Product 1', description: 'Popular Item', price: '$20', image: 'https://via.placeholder.com/150',category: 'Popular', rating: 4  },
  { id: 2, name: 'Product 2', description: 'Special Item', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', description: 'Popular Item', price: '$25', image: 'https://via.placeholder.com/150',category: 'Popular', rating: 3  },
  { id: 4, name: 'Product 4', description: 'Special Item', price: '$40', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', description: 'Popular Item', price: '$15', image: 'https://via.placeholder.com/150',category: 'Popular', rating: 4  },
  { id: 6, name: 'Product 6', description: 'Special Item', price: '$35', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Product 7', description: 'Popular Item', price: '$50', image: 'https://via.placeholder.com/150' ,category: 'Popular', rating: 5 },
  { id: 8, name: 'Product 8', description: 'Special Item', price: '$45', image: 'https://via.placeholder.com/150' },
  

];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  addToCart = (product) => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, product]
    }));
  };

  removeFromCart = (product) => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(item => item.id !== product.id)
    }));
  };

  render() {
    const cartItemCount = this.state.cartItems.length;

    return (
      <div>
        <header className="header">
          <h1>Shop in Style</h1>
          <p>With this shop homepage template</p>
          <Cart cartItemCount={cartItemCount} />
        </header>
        <main>
          <ProductList
            products={products}
            onAdd={this.addToCart}
            onRemove={this.removeFromCart}
            cartItems={this.state.cartItems}
          />
        </main>
      </div>
    );
  }
}

export default App;