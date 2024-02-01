import React, { useEffect } from 'react'
import './style.css'
import Aos from 'aos';

const data = [
    {
        img:"https://media.gucci.com/content/HeroRegularStandard_1600x675/1705654829/HeroRegularStandard_Gucci-ValentinesDay-Jan24-002_001_Default.jpg",
        title:"VALANTINE'S DAY",

    },
    {
        img:"https://mygemma.com/cdn/shop/articles/mygemma-WPD-Top-Blog-Image-6-1.png?v=1695913183",
        title:"MINI BAGS",

    },
    {
        img:"https://media.gucci.com/content/HeroBigStandard_1600x760/1706185804/HeroBigStandard_G-Timeless-Jan2024-VideoBackground_001_Default.jpg",
        title:"G-TIMELESS PRE-LAUNCH",

    },
    {
        img:"https://styleyouroccasion.com/wp-content/uploads/2022/10/Gucci-Loafers-Outfit-@symphonyofsilk.jpg",
        title:"GUCCI RE-WEB",

    },
    {
        img:"https://media.gucci.com/style/DarkGray_Center_0_0_980x980/1680560143/407314_DLC00_1000_003_100_0000_Light-Horsebit-leather-loafer.jpg",
        title:"LOAFERS",

    }
]
function HomeHero() {
    useEffect(() => {
        Aos.init(); // Initialize AOS
      }, []);
  return (
    <div className="home-hero">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
           {
            data.map((item, index)=>(
                <div className="col-12 col-sm-12 col-md-6 p-4">
              <div className="categories-card" data-aos="fade-up">
              <img src={item.img} alt={item.title} className='h-100 w-100' />
              <div className="category-text">
                <h1 className="fs-1">{item.title}</h1>
                <button>EXPLORE THE COLLECTION</button>
              </div>
              </div>
                </div>
            ))
           }
        </div>
      </div>
    </div>
  )
}

export default HomeHero
