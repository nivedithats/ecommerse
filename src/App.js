import React from 'react'
import HomeHero from './components/home/HomeHero'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css'
import Header from './components/header/Header'
import Products from './components/products/Products'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ProductView from './pages/productView/ProductView'

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/view' element={<ProductView/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
