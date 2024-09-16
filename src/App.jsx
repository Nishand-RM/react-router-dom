import React from 'react';
import { Provider } from 'react-redux';
import store from './store/cartSlice';  
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <ProductList />
        <CartItem />
      </div>
    </Provider>
  );
};

export default App;
