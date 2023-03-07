import { fetchUser } from "../utils/fetchLocalStorageData"

const userInfo=fetchUser()
export const intialState ={
    user: userInfo,
    foodItems:null,
    cartShow:false,
  cartItems:true,
}