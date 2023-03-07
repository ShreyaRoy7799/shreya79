import React, { useEffect, useState } from "react";
import './MenuContainer.css'
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import Footer from "./Footer";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="menuu1" id="menu">
      <div className="menu2">
        <p className="menu3">
          Our Hot Dishes
        </p>

        <div className="menu22">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className='menu5'
                // className={`group ${
                //   filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                // } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div className="menu4"
                //   className={`menu4 ${
                //     filter === category.urlParamName
                //       ? "bg-white"
                //       : "bg-cartNumBg"
                //   } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                  className="menu6"
                    // className={`${
                    //   filter === category.urlParamName
                    //     ? "text-textColor"
                    //     : "text-white"
                    // } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p className="menu7"
                //   className={`text-sm ${
                //     filter === category.urlParamName
                //       ? "text-white"
                //       : "text-textColor"
                //   } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="menu8">
          <RowContainer
            flag={true}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
      {/* <Footer/> */}
    </section>
  );
};

export default MenuContainer;