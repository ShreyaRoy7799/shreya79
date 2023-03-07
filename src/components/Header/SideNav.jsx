import React from 'react'
import { MdViewSidebar } from 'react-icons/md'
import {Link} from 'react-router-dom'
import './SideNav.css'
import {about} from '../AboutPage'
import {home} from '../MainContainer'
import {service} from '../ServicePage'
import  '../MenuContainer'
// or

const SideNav = () => {
  return (
    <div class="dropdown">
    <button class="dropbtn"><img src='https://static.thenounproject.com/png/462023-200.png' alt='-' className='img_nav'/></button>
    <div class="dropdown-content">

      <a href="home" ><Link to={'../MainContainer'}>Home</Link></a>
      <a href="about"><Link to={'../AboutPage'}>About</Link></a>
      <a href="service"><Link to={'../ServicePage'}>Service</Link></a>
      <a href="menu"><Link to={'../MenuContainer'}>Menu</Link></a>
    </div>
  </div>
  )
}

export default SideNav

