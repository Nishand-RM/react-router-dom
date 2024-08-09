import React from 'react'
import { Card } from 'react-bootstrap';
import Card_fun from './Card_fun';
import Button from './Button';


const card_details = [
    {
      product_name :"Fancy Product",
      product_price :"$40-$80",
      value:false
    },
    {
      product_name :"Special Item",
      product_price :"$18",
      value:true
    },
    {
      product_name :"Sale Item",
      product_price :"$25",
      value:true
    },
    {
      product_name :"popular Item",
      product_price :"$28",
      value:true
    },
    {
      product_name :"Sale Item",
      product_price :"$8",
      value:false
    },
    {
      product_name :"popular Item",
      product_price :"$14",
      value:true
    },
    {
      product_name :"Special Item",
      product_price :"$58",
      value:true
    },
    {
      product_name :"Popular Item",
      product_price :"$48",
      value:true
    }
  ]




  

function Web() {

let cartValue = 0;
    const incrementCartValue = () => {
        cartValue += 1;
        // Force re-render by updating the DOM directly
        document.getElementById('cart-value').textContent = cartValue;
    };


  return (
    
    //header bar
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form id="cart-value">
                       <Button  data = {cartValue}/>
                    </form>
                </div>
            </div>
        </nav>

    
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

    
        {card_details.map((det,index)=>(
                <Card_fun key={index}  det={det} increment={incrementCartValue}/>
        ))}
        
    
    
    
    
    
    
    
    
    
    
    </div>
    

    
  )
}

export default Web;