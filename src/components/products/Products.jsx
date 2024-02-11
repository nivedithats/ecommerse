import React from 'react'
import './style.css'
const products = [
    {
        image:"https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/original/brooks-product/410366362008/665/410366362008_1_8358.webp?compress=true",
        oldPrice:"14000",
        newPrice:"8000",
        title:"Mens Shirt",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui error dolor voluptates iure esse eos cum temporibus facilis modi."
    },
    {
        image:"https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/original/brooks-product/410366314008/665/410366314008_1_5109.webp?compress=true",
        oldPrice:"14000",
        newPrice:"8000",
        title:"Mens Shirt",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui error dolor voluptates iure esse eos cum temporibus facilis modi."
    },
    {
        image:"https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/original/brooks-product/410366314008/665/410366314008_1_5109.webp?compress=true",
        oldPrice:"14000",
        newPrice:"8000",
        title:"Mens Shirt",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui error dolor voluptates iure esse eos cum temporibus facilis modi."
    },
    {
        image:"https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/original/brooks-product/410391076008/665/410391076008_1_8713.webp?compress=true",
        oldPrice:"14000",
        newPrice:"8000",
        title:"Mens Shirt",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui error dolor voluptates iure esse eos cum temporibus facilis modi."
    },
    {
        image:"https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/original/brooks-product/410391259004/665/410391259004_1_6735.webp?compress=true",
        oldPrice:"14000",
        newPrice:"8000",
        title:"Mens Shirt",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui error dolor voluptates iure esse eos cum temporibus facilis modi."
    },
    {
        image:"https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/original/brooks-product/410366362008/665/410366362008_1_8358.webp?compress=true",
        oldPrice:"14000",
        newPrice:"8000",
        title:"Mens Shirt",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui error dolor voluptates iure esse eos cum temporibus facilis modi."
    },
    {
        image:"https://cdn.pixelbin.io/v2/black-bread-289bfa/YjKxP4/original/brooks-product/410391756008/665/410391756008_2_6653.webp?compress=true",
        oldPrice:"14000",
        newPrice:"8000",
        title:"Mens Shirt",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui error dolor voluptates iure esse eos cum temporibus facilis modi."
    },
    {
        image:"https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/original/brooks-product/410340090007/665/410340090007_1_1451.webp?compress=true",
        oldPrice:"14000",
        newPrice:"8000",
        title:"Mens Shirt",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui error dolor voluptates iure esse eos cum temporibus facilis modi."
    }
]
function Products() {
  return (
    <section className='product-container container-fluid bg-light p-2 p-md-4 py-5'>
       <div className="row">
       {
            products.map((item, index)=>(
               <div className="col-6 col-sm-6 col-md-4 col-lg-3">
               <a href="/product/view" className="text-decoration-none text-dark">

               <div className="product-card mb-3 p-2 bg-white">
                    <img src={item.image} alt="" className="w-100" />
                    <span className="fs-5 d-block fw-bold">{item.title}</span>
                    {/* <small className="small desc">{(item.desc).slice(0, 100)}</small> */}
                    <div className="w-100 gap-3 d-flex align-items-center justify-conten-between">
                        <span className="fs-5 muted strike"><del>&#8377;{item.oldPrice}</del></span>
                        <span className="fs-5">&#8377;{item.newPrice}</span>
                    </div>
                </div>
               </a>
               </div> 
            ))
          }
       </div>
    </section>
  )
}

export default Products
