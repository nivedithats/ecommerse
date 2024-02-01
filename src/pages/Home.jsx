import React from 'react'
import HomeHero from '../components/home/HomeHero'
import Featured from '../components/Featured/Featured'
import Services from '../components/services/Services'

function Home() {
  return (
    <div className='home'>
      <HomeHero/>
      <Featured/>
      <Services/>
    </div>
  )
}

export default Home
