import React from 'react'
import './style.css'

const data = [
    {
        video:"https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/0725b263-cc8b-4454-8c2d-c8e0128219de/6e8fdcfc-a1c6-471c-a936-173f4f01126f/main.mp4?fastly_token=NjViOWE3MDFfNzBlZjJiZTk3OTEyYWUxMzYxODFkMTM3Y2ZiZGM0YTI0MDgwYTQ1MWU2M2RhM2I2ODhiNDdkNDEwZTA5MjVlMl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS8wNzI1YjI2My1jYzhiLTQ0NTQtOGMyZC1jOGUwMTI4MjE5ZGUvNmU4ZmRjZmMtYTFjNi00NzFjLWE5MzYtMTczZjRmMDExMjZmL21haW4ubXA0",
        title:"PERSONALIZATION",
        description:"Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.",
        button:"Discover The Collection"
    },
    {
        video:"https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/0725b263-cc8b-4454-8c2d-c8e0128219de/6e8fdcfc-a1c6-471c-a936-173f4f01126f/main.mp4?fastly_token=NjViOWE3MDFfNzBlZjJiZTk3OTEyYWUxMzYxODFkMTM3Y2ZiZGM0YTI0MDgwYTQ1MWU2M2RhM2I2ODhiNDdkNDEwZTA5MjVlMl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS8wNzI1YjI2My1jYzhiLTQ0NTQtOGMyZC1jOGUwMTI4MjE5ZGUvNmU4ZmRjZmMtYTFjNi00NzFjLWE5MzYtMTczZjRmMDExMjZmL21haW4ubXA0",
        title:"PERSONALIZATION",
        description:"Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.",
        button:"Explore Gucci’s Packaging"
    },
    {
        video:"https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/0725b263-cc8b-4454-8c2d-c8e0128219de/6e8fdcfc-a1c6-471c-a936-173f4f01126f/main.mp4?fastly_token=NjViOWE3MDFfNzBlZjJiZTk3OTEyYWUxMzYxODFkMTM3Y2ZiZGM0YTI0MDgwYTQ1MWU2M2RhM2I2ODhiNDdkNDEwZTA5MjVlMl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS8wNzI1YjI2My1jYzhiLTQ0NTQtOGMyZC1jOGUwMTI4MjE5ZGUvNmU4ZmRjZmMtYTFjNi00NzFjLWE5MzYtMTczZjRmMDExMjZmL21haW4ubXA0",
        title:"PERSONALIZATION",
        description:"Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.",
        button:"Discover How"
    }
]
function Services() {
  return (
    <div className='services-container p-2 p-md-4'>
      <h1 className="fs-3 text-center">Services</h1>
      <div className="row">
        {
            data.map((item, index)=>(
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="services-card text-center mb-3">
                        <video src={item.video} className="w-100" controls loop muted autoPlay></video>
                        <h1 className="fs-4">{item.title}</h1>
                        <p className="lead">{item.description}</p>
                        <button className="btn bg-black text-white rounded-0 p-2 mt-3">Explore Gucci s Packaging</button>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Services
