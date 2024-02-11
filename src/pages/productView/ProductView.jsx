import React, { useState } from 'react'
import './style.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 const data = {
    id:1,
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
    details:"",
    colors:["#000", "red", "blue"]
 }
function ProductView() {

    const [quantity, setQuantity] = useState(0)
    const [num, setNum] = useState(null)
    const [cart, setCart] = useState([])
    // const [cart, setCart] = ({
    //     productId:"",
    //     Quantity:quantity,
    //     price:null,
    // })
    const Imagesettings = {
        dots: true,
        infinite: true,
        speed:2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // cssEase:'linear',
        // fade:true,
        autoplay: true,
        autoplaySpeed: 2000
      };

      const newCartItem = {
        id: data.id,
        name: data.product,
        price: data.price,
        quantity: quantity
      };

      const addToCart = () =>{
        // Retrieve existing cart items from local storage
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new cart item to the existing items
        const updatedCart = [...existingCartItems, newCartItem];

        // Update the local storage with the updated cart
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
  return (
    <section className='product-view container-fluid py-5 overflow-hidden'  >
        <h1>{num}</h1>
      <div className="row">
      <div className="col-12 col-md-6">
  <Slider {...Imagesettings}>
    {data.images.map((item, index) => (
      <div key={index} className="product-view-left w-100">
        <img src={item} alt="" className="w-100" />
      </div>
    ))}
  </Slider>
  <div className="product-images mt-3">
    <div className="row">
      {data.images.map((item, index) => (
        <div key={index} className="col-3">
          <img src={item} alt="" className="w-100" />
        </div>
      ))}
    </div>
  </div>
</div>
        <div className="col-12 col-md-6">
            <div className="product-right p-0 p-md-3 py-5">
                <h1 className="fs-3">{data.product}</h1>
                <p className="lead">{data.description}</p>

                <div className="rate d-flex gap-3">
                    <span className="fs-2">MRP &#8377; {data.price}</span>
                    <span className="fs-2 text-muted"><del> &#8377; {data.oldPrice}</del></span>
                   
                </div>
                <span className="small">Price inclusive of all taxes</span>

                <p className="fw-bold mt-3"><b>Colour:</b> {data.color}</p>
                <div className="row">
                    <div className="col-3">
                        <img src={data.mainImage} alt="" className="w-100" />
                    </div>
                </div>
                {/* <ul className="d-flex mt-3 p-0 gap-5">
                {
                    data.colors.map((item, index) => (
                        <li className='color' key={index} style={{ backgroundColor: item,border:`2px solid ${item}` }}></li>
                    )) 
                    }
                </ul> */}
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
                        <button className='btn bg-black text-white fs-4' onClick={()=>{
                            if(quantity>=1){
                                setQuantity(quantity-1)
                            }
                        }}><i className='bi bi-dash'></i></button>
                          <input type="number" className="form-control" value={quantity} />
                            <button className='btn bg-black text-white fs-4' onClick={()=>setQuantity(quantity+1)}><i className='bi bi-plus'></i></button>
                      
                       
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2 mt-3 align-items-center bg-white actions">
                <button className="w-100 btn-dark btn p-3 bg-black rounded-0 fs-5" onClick={addToCart}>ADD TO BAG</button>
                      <a href="/review" className='w-100'>
                      <button className="btn fs-5 w-100  p-3 btn-outline-dark rounded-0"><i className='bi bi-cart'></i>Order Now</button>
                      </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductView
