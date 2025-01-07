import React from 'react'
import { useState } from 'react'
import './App.css'
import ScrollingText from './components/ScrollingText'
import Hero from './components/Hero'
import Features from './components/Features'
import Update from './components/Update'
import Footer from './components/Footer'
import News from './components/News'
import Review from './components/Review'






function App() {
  return (
    <>
   <Hero/>
   <Features/>
   <Review/>
   <Update/>
   <ScrollingText/>
    <Footer/> 
    
    {/* <News/> */}
    </>
  )
}

export default App
