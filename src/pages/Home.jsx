import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import CategoriesMenu from '../components/CategoriesMenu'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Contact from '../components/Contact'
import About from '../components/About'
import Download from '../components/Download'



const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Features/>
      <Download/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home