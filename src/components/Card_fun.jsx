import React from 'react'
import './Card_fun.css'
import Button from './Button';


const val =+1;
const clickhere =()=>{
   
  
   <Button  data ={val} />
  
}



function Card_fun({det,increment}) {
  return (
    <div className='card_box'>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 ">
                    <div className="col mb-5">
                        <div className="card100">
                           
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{det.product_name}</h5>
                                    
                                    <p>{det.value && '⭐⭐⭐⭐'}</p>
                                    <i>{det.product_price}</i>

                                </div>
                            </div>
                            
                            
                                <div className='buttonbox'>
                                <button className="btn btn-outline-dark mt-auto" onClick={increment}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    </section>
    </div>
  )
}

export default Card_fun;