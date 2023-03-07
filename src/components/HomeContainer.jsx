import React from 'react'
import './HomeContainer.css'
import Delivery from './images/bike1.png'
import Background from './images/background1.jpg'
import I1 from './images/KFC-Smoky-Grilled-Chicken-600x477.jpg'

const HomeContainer = () => {
  return (
    <section className='sub_main1'>
      <div className='sub_main11'>
        <div className='sub_main3'>
          Bike Delivery
          <img
            src={Delivery}
            className='img'
            alt='delivery'
          />
        </div>
        <p className='div2'>The Fastest Delivery in <span className='your_city'>Your City</span></p>
        <p className='text1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error facere debitis minima ea totam culpa ullam illo consequatur inventore labore, maiores placeat eligendi soluta, dolorum commodi temporibus iste quidem?
        </p>
        <div className='ordernow_cont'>
          <button type='button' className='order_now'>
            <div className='order_now1'>Order Now</div>
          </button>
        </div>
      </div>
      <div className='sub_main22'>

        <img
          src={I1}
          className='back1'
          alt=''
        />
       
        <div className='items'>
       
          <div className='phto_item1'>
          </div>

        </div>

      </div>

    </section>
  )
}

export default HomeContainer