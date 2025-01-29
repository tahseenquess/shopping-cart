import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TemperatureController from './component/TempratureCard'

function App() {


  return (
    <>
    <div className='main-wrapper'>
    <TemperatureController />

    </div>
    </>
  )
}

export default App
