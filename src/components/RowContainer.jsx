import React from 'react'
import './RowContainer.css'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import '../utils/data'
const RowContainer = ({ flag, data }) => {

  console.log(data);
  return (
    <div className='row1'>
      
        <div className='scrollmenu'>
          <div className='row21'>
          <div className='fruit1'>
            <div className="fruit2">
              <motion.img
                whileTap={{ scale: 1.2 }} src='https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg' alt=''
                className='fruit3'
              />
              <motion.div whileTap={{ scale: 0.75 }} className="fruit4">
                <MdShoppingBasket className='bas1' />
              </motion.div>
            </div>
            <div className="base1">
              <p className='base11'>Chicken Butter Masala</p>
              <p className='base2'>250 calories</p>
              <div className='base21'>
                <p className='base22'>
                  <span className='base23'>$</span>20
                </p>

              </div>
            </div>
          </div>

          <div className='fruit1'>
            <div className="fruit2">
              <motion.img
                whileTap={{ scale: 1.2 }} src='https://static.toiimg.com/thumb/60019725.cms?imgsize=287198&width=800&height=800' alt=''
                className='fruit3'
              />
              <motion.div whileTap={{ scale: 0.75 }} className="fruit4">
                <MdShoppingBasket className='bas1' />
              </motion.div>
            </div>
            <div className="base1">
              <p className='base11'>Chocolate & Vanila</p>
              <p className='base2'>45 calories</p>
              <div className='base21'>
                <p className='base22'>
                  <span className='base23'>$</span>5.25
                </p>

              </div>
            </div>
          </div>
          <div className='fruit1'>
            <div className="fruit2">
              <motion.img
                whileTap={{ scale: 1.2 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfaUQOCSxOkGRK466SLiWXpXylc3feIV1_w&usqp=CAU' alt=''
                className='fruit3'
              />
              <motion.div whileTap={{ scale: 0.75 }} className="fruit4">
                <MdShoppingBasket className='bas1' />
              </motion.div>
            </div>
            <div className="base1">
              <p className='base11'>Dessert</p>
              <p className='base2'>100 calories</p>
              <div className='base21'>
                <p className='base22'>
                  <span className='base23'>$</span>15
                </p>

              </div>
            </div>
          </div>

          <div className='fruit1'>
            <div className="fruit2">
              <motion.img
                whileTap={{ scale: 1.2 }} src='https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg' alt=''
                className='fruit3'
              />
              <motion.div whileTap={{ scale: 0.75 }} className="fruit4">
                <MdShoppingBasket className='bas1' />
              </motion.div>
            </div>
            <div className="base1">
              <p className='base11'>Pizza</p>
              <p className='base2'>230 calories</p>
              <div className='base21'>
                <p className='base22'>
                  <span className='base23'>$</span>12
                </p>

              </div>
            </div>
          </div>

          
          </div>


        </div>
      
    </div>
  );
};

export default RowContainer

