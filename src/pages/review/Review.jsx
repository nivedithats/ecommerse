import React from 'react'
import './style.css'

const data = {
    product:"Fangsu Kids Bags Soft Material to Baby",
    price:135,
    size:"Free Size",
    quantity:5,
    deliveryType:"free Delivery",
    
}
function Review() {
  return (
    <div className='review-container container-fluid p-2 p-md-5'>
     <div className="container">
     <div className="row">
            <div className="col-12 col-sm-12 col-md-7">
                <div className="review-left">
                    <div className="card shadow p-3">
                        <div className="card-header bg-transparent">
                            <p className="fs-5"><i className='bi bi-truck'></i> Estimated Delivery by Wednesday, 21st Feb</p>
                        </div>
                        <div className="card-body">
                           <div className="d-flex align-items-center gap-3">
                           <img src="https://images.meesho.com/images/products/57409918/iucvm_512.webp" alt="" className=' border' />
                            <div>
                                <h1 className="fs-5 fw-bold">{data.product}</h1>
                                <small className="fs-5">&#8377; {data.price}</small>
                               <div className="d-flex gap-3">
                               <p className="fs-5">Size: <small className="text-secondary">{data.size}</small></p>
                               <p className="fs-5">Qty: <small className="text-secondary">{data.quantity}</small></p>
                               </div>
                            </div>
                           </div>
                        </div>
                        <div className="card-footer bg-transparent">
                            <p className="text-end fs-5 text-secondary">{data.deliveryType}</p>
                        </div>
                    </div>
                    <div className="card mt-3 p-3">
                        <p className="fs-5"><i className='bi bi-geo-alt'></i>Delivery Address</p>
                      <div className="p-2">
                      <button className="btn bg-black text-white fs-5 rounded-0 p-3 mt-2 w-100">Add Address</button>
                      </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5">
                <div className="review-right border-left">
                    <div className="card p-3">
                        <p className="fs-4 fw-bold">Price Details</p>
                        <span className="fs-5 d-flex gap-2 justify-content-between text-secondary"><small>Total Product Price</small> <small>&#8377; {data.price}</small></span>
                        <span className="fs-5 d-flex gap-2 justify-content-between"><small>Total Discounts</small> <small>&#8377; 15</small></span>
                        <hr />
                        <p className="fs-4 d-flex justify-content-between"><small>Order Total</small> <small>&#8377; {data.price * data.quantity}</small></p>
                        <div className="alert alert-success">
                           <span className="fs-5 d-flex gap-2 text-success"> <i className='bi bi-check'></i>Yay! Your total discount is ₹15</span>

                        </div>
                        <div className="mt-3">
                            <small className="small">Clicking on ‘Continue’ will not deduct any money</small>
                            <button className="btn w-100 bg-black text-white p-3 fs-5">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Review
