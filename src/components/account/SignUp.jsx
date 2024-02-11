import React from 'react'
import './style.css'

function SignUp() {
  return (
    <div className='account-container container-fluid p-3 p-md-5 bg-light'>
        <div className="row h-100 align-items-center ">
            <div className="col-md-4 offset-md-4">
                <div className="card shadow border-0">
                    <div className="card-header p-0">
                        <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="image" className="w-100" />
                    </div>
                    <div className="card-body py-3">
                        <h1 className="fs-5">Sign Up to save your order</h1>

                       <div className="form-group">
                        <small className="small text-secondary">Phone number</small>
                        <input type="text" className="form-control rounded-0 mt-2 p-3" placeholder='+91 000-0000-000' />
                       </div>
                       <button className="btn bg-black rounded-0 text-white w-100 mt-3 p-3 fs-5">Continue</button>
                    </div>
                    <div className="card-footer text-center">
                        <small className="small text-secondary">By continuing, you agree to Meesho’ <a href="" className='text-decoration-none'>Terms & Conditions</a> and <a href="" className='text-decoration-none'>Privacy Policy</a></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
