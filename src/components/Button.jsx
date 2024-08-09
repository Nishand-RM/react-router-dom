import React from 'react'

function Button({data}) {
    return (
        <div>
            <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 triangle-pill">cart:{data}</span>
                
            </button>
        </div>
        
    )
}

export default Button;