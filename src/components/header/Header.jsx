import React from 'react'
import './style.css'
import logo from '../../images/logo.png'
import Products from '../products/Products'

function Header() {
  return (
    <header className='bg-white'>
      <nav class="navbar navbar-expand-md align-items-center">
  <div class="container-fluid d-flex align-items-center justify-content-between flex-nowrap ">
      <a class="nav-link mx-2 d-none d-md-block" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
      <h1 className="fs-5 d-inline"><i className='bi bi-plus'></i>Contact us</h1>
    </a>
    <img src={logo} alt="" width={180} className='mx-3' />

    <div class="collapse navbar-collapse d-none d-md-block" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
      
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" >Categories</a>
        </li>
      </ul>
        
    </div>
    <div className="d-flex gap-3 align-items-center">
  <i class="bi bi-search fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"></i>
  <i class="bi bi-bag-check fs-3"></i>
    <button data-bs-toggle="offcanvas" className='menu d-flex gap-2' href="#menu" role="button" aria-controls="menu"><i className='bi bi-list'></i>Menu</button>
  </div>
  </div>

</nav>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">CONTACT US</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className='mb-3'>
     <p className="d-flex gap-2 fw-bold"><i className='bi bi-phone'></i>CALL US +1.877.482.2430</p>
     <small className='small'>Our Client Advisors are available Monday through Saturday, 9:00AM - 11:00PM (EST) and Sunday, 10:00AM - 9:00PM (EST), excluding holidays.</small>
    </div>
    <div className='mb-3'>
     <p className="d-flex gap-2 fw-bold"><i className='bi bi-whatsapp'></i>WHATSAPP US
        </p>
     <small className='small'>Our Client Advisors are available to answer your WhatsApp messages Monday through Saturday, 9:00AM - 8:00PM EST, and Sunday 10:00AM – 7:00PM EST, excluding holidays.</small>
    </div>
    <div className='mb-3'>
     <p className="d-flex gap-2 fw-bold"><i className='bi bi-chat'></i>LIVE CHAT

        </p>
     <small className='small'>Our Client Advisors are available to chat Monday through Saturday, 9:00AM - 11:00PM (EST) and Sunday, 10:00AM - 9:00PM (EST), excluding holidays. The option to chat will become active during these hours once an advisor is available.</small>
    </div>
    <span className="fs-5 fw-bold">Do you need further assistance?</span>
    <a href="" className="mt-3 d-block">Get in Contact with Us</a>
  
  </div>
</div>


{/* menu  */}
<div class="offcanvas offcanvas-end" tabindex="-1" id="menu" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">CONTACT US</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <ul type="none">
        <li className='fs-4'><a href="">Gifts</a></li>
        <li className='fs-4'><a href="">New in</a></li>
        <li className='fs-4'><a href="">Handbags</a></li>
        <li className='fs-4'><a href="">Travel</a></li>
        <li className='fs-4'><a href="">Women</a></li>
        <li className='fs-4'><a href="">Men</a></li>
        <li className='fs-4'><a href="">Children</a></li>
        <li className='fs-4'><a href="">Jewelry & watches</a></li>
        <li className='fs-4'><a href="">Jewelry & watches</a></li>
        <li className='fs-4'><a href="">Frangrances and Make-Up</a></li>
    </ul>
  
  </div>
</div>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Search products</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
  <select name="" id="" className="form-select">
    <option value="">Men</option>
    <option value="">Women</option>
    <option value="">Kids</option>
  </select>
  <div className="form-group mt-3 d-flex gap-2">
    <input type="text" className="form-control" placeholder='Search' />
    <button className="btn bg-black fs-3 text-white"><i className='bi bi-search'></i></button>
  </div>
  <Products/>
  </div>
</div>
    </header>
  )
}

export default Header
