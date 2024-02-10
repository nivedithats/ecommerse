import React from 'react'
import './style.css'

function Categorie({data}) {
  return (
    <div className='bg-light container-fluid'>
      {
        data.map((item, index)=>(
            <>
            <h1 className="display-4 py-3">{item.categorie}</h1>
      <div className="categories-container d-flex gap-3 flex-nowrap">
            {
                item.products.map((item, index)=>(
                    <div className="category-card card" key={index}>
                        <div className="card-header bg-transparent p-0">
                            <img src={item.image} alt="" className="w-100" />
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                            <div className="stars d-flex gap-2">
                            {Array.from({ length: item.rating }, (_, i) => (
                                <i key={i} className="bi bi-star-fill text-warning"></i>
                            ))}
                            </div>
                            <p className="fs-5 fw-bold">&#8377; {item.price}/-</p>

                            </div>
                            <h1 className="fs-5 fw-bold">{item.product}</h1>
                            <p className="fs-6">{item.description}</p>
                    </div>
                        <div className="card-footer d-flex flex-nowrap gap-2 bg-transparent">
                            <button className="btn bg-black w-100 p-2 text-white rounded-0">Buy now</button>
                            <button className="btn btn-outline-dark w-100 rounded-0">Add to bag</button>
                        </div>
                    </div>
                ))
            }
      </div>
            </>
        ))
      }
    </div>
  )
}

export default Categorie
