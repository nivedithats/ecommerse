import React, { useEffect, useState } from 'react';
import './style.css'

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleDelete = (index) => {
    // Remove the item at the specified index from the cartItems array
    const updatedCartItems = cartItems.filter((item, i) => i !== index);

    // Update local storage and state with the updated cartItems
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  return (
    <div className='container-fluid bg-light p-2'>
      <h2>Shopping Cart</h2>
      
      <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="cart-left">
                    {
                        cartItems.map((item, index)=>(
                            <div className="mb-4 rounded-3 cart-item shadow p-2 d-flex justify-content-between gap-2" key={index}>
                               <div className="d-flex gap-3">
                               <img src="https://images.meesho.com/images/products/85745247/4umth_400.webp" alt="" className='rounded-2 h-100' />
                                <div>
                                    <small className="small text-secondary  d-block">Product {index +1}</small>
                                    <small className="fs-5 fw-bold d-block">{item.name}</small>
                                    <small className="  d-block">{item.price}</small>
                                    <small className="fs-6 tex-secondary">Qty: {item.quantity}</small>
                                    <div className="d-flex gap-2 mt-3">
                                        <button className='btn bg-black rounded-0 text-white'>Order now</button>
                                        <button  className='btn bg-delete rounded-0' onClick={()=>{handleDelete(index)}}><i className='bi bi-trash'></i></button>
                                    </div>
                                </div>
                               </div>
                               
                                <p className="fs-5 fw-bold">{item.quantity * item.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Cart;
