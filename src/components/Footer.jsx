import React from 'react'

function Footer() {
  return (
    <footer className='bg-black p-2 p-md-5 container-fluid py-5'>
        <div className="row">
            <div className="col-6 col-sm-6 col-md-3">
                <h1 className="fs-6 text-secondary mb-3">MAY WE HELP YOU?</h1>
                <ul className="p-0 text-white">
                <li><a href="" className="text-white">Contact Us</a></li>
                <li><a href="" className="text-white">My Order</a></li>
                <li><a href="" className="text-white">FAQs</a></li>
                <li><a href="" className="text-white">Email Unsubscribe</a></li>
                 <li><a href="" className="text-white">Sitemap</a></li>
                </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
                <h1 className="fs-6 text-secondary mb-3">MAY WE HELP YOU?</h1>
                <ul className="p-0 text-white">
                <li><a href="" className="text-white">About Gucci</a></li>
                <li><a href="" className="text-white">Gucci Equilibrium</a></li>
                <li><a href="" className="text-white">Code of Ethics</a></li>
                <li><a href="" className="text-white">Careers</a></li>
                 <li><a href="" className="text-white">Legal</a></li>
                 <li><a href="" className="text-white">Privacy & Cookie Policy</a></li>
                 <li><a href="" className="text-white">COOKIES SETTINGS</a></li>
                 <li><a href="" className="text-white">Corporate Information</a></li>
                </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
                <h1 className="fs-6 text-secondary mb-3">STORE LOCATOR</h1>
                <input type="text" className="form-control mb-4" placeholder='Country/region, city' />
                <h1 className="fs-6 text-light">SIGN UP FOR GUCCI UPDATES</h1>
                <p className='small mb-4 text-light'>By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our <a href="">Privacy Policy</a></p>
               <input type="text" className="form-control mb-5" placeholder='Country/region, city' />

                <h1 className="fs-6 text-secondary">COUNTRY/REGION</h1>
                <p className='mt-3'><a href="" className='text-white'>UNITED STATES</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
