import React, { useState } from 'react'
import './style.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 const data = {
    mainImage:"https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/t.resize(w:800)/brooks-product/410391238008/665/410391238008_2_9104.webp",
    images:[
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/t.resize(w:250)/brooks-product/410391238008/665/410391238008_1_6703.webp",
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/t.resize(w:250)/brooks-product/410391238008/665/410391238008_2_9104.webp",
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/t.resize(w:250)/brooks-product/410391238008/665/410391238008_3_8449.webp",
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/YjKxP4/t.resize(w:250)/brooks-product/410391238008/665/410391238008_4_7869.webp"
    ],
    product:"Cotton Twill Stretch Soho Chinos",
    description:"97% cotton, 3% spandex woven in Italy. Super soft with stretch for added comfort. Finished with heather grey details on interior and real corozo buttons.",
    price:"8,000.00",
    oldPrice:"16,000.00",
    color:"Oatmeal",
    fit:"slim",
    sizes:['m', 'xl', 'xxl', 'sm'],
    details:""
 }
function ProductView() {
    const image = {
        src: 'path-to-your-image.jpg', // Replace with the actual path to your image
        alt: 'Image Alt Text',
        className: 'zoom-image', // Add any additional class names if needed
      };
    const [quantity, setQuantity] = useState(0)
    const [num, setNum] = useState(null)
    const Imagesettings = {
        dots: true,
        infinite: true,
        speed:1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // cssEase:'linear',
        // fade:true,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <section className='product-view container-fluid py-5 overflow-hidden'  >
        <h1>{num}</h1>
      <div className="row">
        <div className="col-12 col-md-6">
        <Slider {...Imagesettings}>
   {
    data.images.map((item, index)=>(
        <div className="product-view-left w-100">
            <img src={item} alt="" className="w-100" />
          
        </div>
    ))

   }

   </Slider>
  <div className="product-images mt-3">
  <div className="row">
                   
                   {
   data.images.map((item, index)=>(
       <div className="col-3">
       <img src={item} alt="" className="w-100" />
       </div>
   ))

  }
               </div>
  </div>
        </div>
        <div className="col-12 col-md-6">
            <div className="product-right p-0 p-md-3 py-5">
                <h1 className="fs-3">{data.product}</h1>
                <p className="lead">{data.description}</p>

                <div className="rate d-flex gap-3">
                    <span className="fs-2">MRP &#8377; {data.price}</span>
                    <span className="fs-2 text-muted"> &#8377; {data.oldPrice}</span>
                   
                </div>
                <span className="small">Price inclusive of all taxes</span>

                <p className="fw-bold mt-3"><b>Colour:</b> {data.color}</p>
                <div className="row">
                    <div className="col-3">
                        <img src={data.mainImage} alt="" className="w-100" />
                    </div>
                </div>
                <p className="fw-bold mt-3"><b>Fit:</b> {data.fit}</p>
                <div className="row mt-2">
                    <div className="col-6">
                        <span className="fs-6">Sizes</span>
                        <select name="" id="" className='form-control p-3'>
                            <option disabled selected>Select Size</option>
                            {
                                data.sizes.map((item, index)=>(
                                    <option value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-6">
                        <span className="fs-6">Quantinty</span>
                        <div className="quantity d-flex gap-3">
                            <button className='btn bg-black text-white fs-4' onClick={()=>setQuantity(quantity+1)}><i className='bi bi-plus'></i></button>
                        <input type="number" className="form-control" value={quantity} />
                        <button className='btn bg-black text-white fs-4' onClick={()=>{
                            if(quantity>=1){
                                setQuantity(quantity-1)
                            }
                        }}><i className='bi bi-dash'></i></button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 align-items-center">
                    <div className="col-10 col-md-8">
                        <button className="w-100 btn-dark btn p-3 bg-black rounded-0">ADD TO BAG</button>
                    </div>
                    <div className="col-2 col-md-4 text-center">
                        <button className="btn fs-2 cart"><i className='bi bi-cart'></i></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductView
