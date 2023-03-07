import React, { useState } from 'react'
import HomeContainer from './HomeContainer'
import './MainContainer.css'
import { Motion } from 'react-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import '../utils/data'
import { useStateValue } from '../context/StateProvider'
import '../utils/firebaseFunctions'
import MenuContainer from './MenuContainer'
import CartContainer from "./CartContainer";

import ContactPage from './ContactPage'
import Footer from './Footer'
import AboutPage from './AboutPage'
const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue()
  return (
    <div className='mainmain3'>
      <div className='main131'>
        <HomeContainer />


      </div >

      <section className='i1'>
        <div className='i2'>
          <p className='i3'>
            Our fresh and healthy fruits
          </p>

          <div className='i4'>
            <div className="i5"><MdChevronLeft className='a1' /></div>
            <div className="i6"><MdChevronRight className='a2' /></div>
          </div>
        </div>

        <RowContainer flag={true} data={foodItems} />
        {/* data={foodItems?.filter(n => n.category === "fruits") */}
      </section>
      <section className='menu1'>
        <MenuContainer />
        <ContactPage />
       
       {/* {cartShow && <CartContainer/>} */}
       {/* <CartContainer/> */}
      </section>
      <Footer />
    </div>
  )
}

export default MainContainer
