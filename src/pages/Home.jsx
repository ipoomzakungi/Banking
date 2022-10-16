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



const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <CategoriesMenu/>
      <Features/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home