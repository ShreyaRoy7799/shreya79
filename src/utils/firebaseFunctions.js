import { data } from 'autoprefixer'
import {firestore} from '../firebase.config'
import { collection, doc, Firestore, getDoc, orderBy, query, setDoc } from 'firebase/firestore'
export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, 'foodItems', '${Date.now()}'), data, {
            merge: true,
    });

};

export const getAllFoodItems=async()=>{
    const items=await getDoc(
        query(collection(firestore,"foodItems"), orderBy("id","desc"))
    );
    return items.docs.map((doc)=>doc.data());
};