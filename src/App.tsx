import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TemperatureController from './component/TempratureCard'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home'
import Navbar from './component/Navbar'
import ProductDetail from './pages/productDetail'
import Test from './pages/test'


function App() {


  return (
    <>
    {/* <div className='main-wrapper'>
    <TemperatureController />

    </div> */}
    {/* <Navbar/> */}
     <Router>
      
      <Routes>
      <Route path="/" element={<Test />} />
        <Route path="/home" element={<Home />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
