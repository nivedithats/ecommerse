import React from 'react'
import HomeHero from '../components/home/HomeHero'
import Featured from '../components/Featured/Featured'
import Services from '../components/services/Services'
import Categorie from '../components/category/Categorie'
const data = [
 {
  categorie:"Mens",
  products:[
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    },
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    },
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    },
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    }
  ]
 },
 {
  categorie:"Women",
  products:[
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    },
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    },
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    },
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    }
  ]
 },
 {
  categorie:"Kids",
  products:[
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    },
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    },
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    },
    {
      product:"SNITCH Striped Classic Shirt",
      description:"Regular Fit Package contains: 1 shirt Machine wash Cotton Product Code: 464079764004",
      price:"1000",
      category:"mens",
      rating:"5",
      image:"https://assets.ajio.com/medias/sys_master/root/20230621/J11r/6492b62ad55b7d0c6395a9f0/-473Wx593H-464079764-maroon-MODEL3.jpg",
    }
  ]
 }
]
function Home() {
  return (
    <div className='home'>
      <HomeHero/>
      <Categorie data={data}/>
      <Featured/>
      <Services/>
    </div>
  )
}

export default Home
