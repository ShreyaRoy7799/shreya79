import React from 'react';

import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import './Header.css';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase.config'
import Logo from '../images/logo_for_e-com.png';
import Avatar from '../images/user-icon.png';
import { Link } from 'react-router-dom';
// import { async } from '@firebase/util';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { useState } from 'react';
import AboutPage from '../AboutPage';
import CartContainer from '../CartContainer';
import CartPage from '../CartPage';
import SideNav from './SideNav';

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow }, dispatch] = useStateValue()

  const [isMenu, setIsMenu] = useState(false)
  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }

  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };


  return (
    <header className="HeaderLog">
      {/*desktop and tablet */}
      <div className='desktop'>
        <Link to={'/'} className='d2'>
          <img src={Logo} className="logo1" alt='logo' />
          <p className="logo2">city</p>
        </Link>
        <div className='main78'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}

            exit={{ opacity: 0, x: 100 }}
            className='element'>
            {/* previously there was <li></li> tag */}
            
            <Link to={"/MainContainer"} className="home1"><li className='sub_menu' onClick={() => setIsMenu(false)}>Home</li></Link>

            <Link to={"/MenuContainer"} className="menu_con1"><li className='sub_menu' onClick={() => setIsMenu(false)}>Menu</li></Link>
            <Link to={"/AboutPage"} className='link1'> <li className='sub_menu' onClick={() => setIsMenu(false)}>
              About</li> </Link>
            <Link to={"/ServicePage"} className="service1"><li className='sub_menu' onClick={() => setIsMenu(false)}>Service</li></Link>
          </motion.ul>
         

          <Link to={CartPage}><div className='shoppingbusket' onClick={{ CartPage }}>
            <MdShoppingBasket className='shopingBusketIcon' />
            <div className='sb1'>
              <p className='sb2'>2</p>
            </div>
          </div>
          </Link>

          <div className='img_ava'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className='avatar' alt='userprofile'
              onClick={login} />
            {
              isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className='login_css'>
                  {
                    user && user.email === "royshreya7799@gmail.com" && (
                      <Link to={"/createItem"}>
                        <p className='new_item'>New Item<MdAdd /></p>
                      </Link>

                    )
                  }

                  <p className='new_item' >Logout<MdLogout /></p>
                </motion.div>
              )
            }
          </div>
          
        </div>
       
      </div>
      <div className='side_nav'><SideNav /></div>


      {/*mobile*/}
      <div className='mobile'>

        {/* <Link to={'/'} className='d2'>
          <img src={Logo} className="logo1" alt='logo' />
          <p className="logo2">city</p>
        </Link> */}
      </div>
    </header>
  );
};

export default Header
