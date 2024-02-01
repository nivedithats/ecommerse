import React from 'react'
import './style.css'

function Featured() {
  return (
    <div className='featured-container bg-light p-2 py-5'>
        <h1 className="fs-4 text-center mb-3">FEATURED</h1>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-6 mb-3">
                    <div className="featured-left">
                    <img src="https://images.unsplash.com/photo-1619198511074-680af0a21527?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBib3l8ZW58MHx8MHx8fDA%3D" alt=""  />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="featured-right">
                        <h1 className="display-3">FALL WINTER 2024 <br /> FASHION SHOW</h1>
                        <p className="lead">Creative Director Sabato De Sarno makes his menswear <br /> debut at the House with the Fall Winter 2024 collection. </p>
                        <a href=""><button className='btn bg-black text-white rounded-0 p-3 px-5'>DISCOVER MORE</button></a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
