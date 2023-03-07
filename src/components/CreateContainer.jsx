// import React, { useState } from 'react'
// import './CreateContainer.css'
// import { motion } from 'framer-motion'
// import { MdCloudUpload, MdFastfood, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md'
// import { categories } from '../utils/data'
// import Loader from './Loader'
// import { storage } from '../firebase.config'
// import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
// import { onSnapshot } from 'firebase/firestore'


// const CreateContainer = () => {

//   const [title, setTitle] = useState("")
//   const [calories, setCalories] = useState("")
//   const [price, setPrice] = useState("")
//   const [category, setCategory] = useState("null")
//   const [imageAsset, setImageAsset] = useState("null")
//   const [fields, setFields] = useState(false)

//   const [alertStatus, setAlertStatus] = useState("danger")
//   const [msg, setMsg] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const uploadimage = (e) => {
//     setIsLoading(true);
//     const imageFile = e.target.files[0];

//     const storageRef = ref(storage,'/images')
//     const uploadTask = uploadBytesResumable(storageRef, imageFile);
//     uploadTask.on('state_changed', 
//     (snapshot) => {
//       const uploadProgress =
//        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     }, (error) => {
//       console.log(error);
//       setFields(true);
//         setMsg('Error while uploading:try Again 🙅‍♂️');
//       setAlertStatus('danger');
//       setTimeout(() => {
//         setFields(false);
//         setIsLoading(false);
//       }, 4000);
//     }, () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         setImageAsset(downloadURL);
//         setIsLoading(false);
//         setFields(true);
//         setMsg("Image uploaded succesfully");
//         setAlertStatus("Success");
//         setTimeout(() => {
//           setFields(false);
//         }, 4000);
//       })
//     })
//   };


//   const deleteImage = () => {
//     setIsLoading(true);
//     const deleteRef= ref(storage,imageAsset);
//     deleteObject(deleteRef).then(()=>{
//       setImageAsset(null);
//         setIsLoading(false);
//         setFields(true);
//         setMsg("Image deleted succesfully");
//         setAlertStatus("Success");
//         setTimeout(() => {
//           setFields(false);
//         }, 4000);
//     })
//    };
//   const saveDetails = () => {
// setIsLoading(true);
// try{
//   if((!title || !calories || !imageAsset || !price || !categories)){
//     setFields(true);
//         setMsg('Error while uploading:try Again 🙅‍♂️ requried filed must be filed');
//       setAlertStatus('danger');
//       setTimeout(() => {
//         setFields(false);
//         setIsLoading(false);
//       }, 4000);

//   }else{
// const data={
//   id: '${Date.now()}',
//   title:title,
//   imageURL: imageAsset,
//   category: categories,
// calories:calories,
// qty:1,
// price:price
// }
//   }
// }catch(error){
//   setFields(true);
//   setMsg('Error while uploading:try Again 🙅‍♂️ requried filed must be filed');
// setAlertStatus('danger');
// setTimeout(() => {
//   setFields(false);
//   setIsLoading(false);
// }, 4000);
// }
// };
//   return (
//     <header className='main'>

//       <div className='main1'>
//         <div className='main111'>
//           {
//             fields && (
//               <motion.p initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className='field'  >
//                 {msg}
//               </motion.p>
//             )
//           }
//           <div className='sub2'>
//             <MdFastfood className='first_food_icon' />
//             <input type='text'
//               required
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder='Give me a title...'
//               className='ffi1'
//             />
//           </div>
//           <div className='cate1'>
//             <select onChange={(e) => setCategory(e.target.value)} className='cate'>
//               <option value="other" className='cate2'>Select Category</option>
//               {categories && categories.map((item) => (
//                 <option key={item.id} className='cate3' value={item.urlParamName}>
//                   {item.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className='group'>
//             {isLoading ? (<Loader />) : (<>
//               {imageAsset ? (
//                 <>
//                   <label className='group1'>
//                     <div className='group2'>
//                       <MdCloudUpload className='group3' />
//                       <p className='group4'>Click here to upload</p>
//                     </div>
//                     <input type="file" name='uploadimage' accept='image/*' onChange={uploadimage} className='group5'></input>
//                   </label>
//                 </>
//               ) : (
//                 <><div className='group6'>
//                   <img src={imageAsset} alt='uploaded image' className='img1' />
//                   <button type='button' className='group7' onClick={deleteImage}>
//                     <MdDelete className='group8' />
//                   </button>
//                 </div>
//                 </>
//               )}
//             </>)}
//             <div className='group112'>
//               <div className='group1122'>
//                 <MdFoodBank className='group1132' />
//                 <input type='text' required value={calories} onChange={(e) => setCalories(e.target.value)} placeholder='Calories' className='group114' />
//               </div>
//             </div>

//             <div className='group113'>
//               <div className='group1123'>
//                 <MdAttachMoney className='group1132' />
//                 <input type='text' required value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price' className='group114' />
//               </div>
//             </div>
//             <div className='group121'>
//               <button type='button' className='group122' onClick={saveDetails}>Save</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default CreateContainer


import React, { useState } from "react";
import { motion } from "framer-motion";
import './CreateContainer.css'

import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase.config";
import { getAllFoodItems, saveItem } from "../utils/firebaseFunctions";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ foodItems }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try AGain 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }

    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  return (
    <div className="main90">
      <div className="main1">
      <div className="main111">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`filed${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}

        <div className="sub-2">
          <MdFastfood className="first_food_icon" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..."
            className="ffi1"
          />
        </div>

        <div className="cate1">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="cate2"
          >
            <option value="other" className="cate">
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="cate3"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="group">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="group1">
                    <div className="group2">
                      <MdCloudUpload className="group3" />
                      <p className="group4">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="group5"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="group6">
                    <img
                      src={imageAsset}
                      alt="uploaded image"
                      className="img1"
                    />
                    <button
                      type="button"
                      className="group7"
                      onClick={deleteImage}
                    >
                      <MdDelete className="group8" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="group112">
          <div className="group1122">
            <MdFoodBank className="group1132" />
            <input
              type="text"
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Calories"
              className="group114"
            />
          </div>

          <div className="group113">
            <MdAttachMoney className="group1132" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
              className="group114"
            />
          </div>
        </div>

        <div className="group121">
          <button
            type="button"
            className="group122"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CreateContainer;