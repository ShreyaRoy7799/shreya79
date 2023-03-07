import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCsWOFqWRcbAAx5EIezD9TYG7cqV8WbeDU",
  authDomain: "e-commerce-page-9c2a7.firebaseapp.com",
  databaseURL: "https://e-commerce-page-9c2a7-default-rtdb.firebaseio.com",
  projectId: "e-commerce-page-9c2a7",
  storageBucket: "e-commerce-page-9c2a7.appspot.com",
  messagingSenderId: "438921127981",
  appId: "1:438921127981:web:cc1507d0dd9ac132b130a4",
  measurementId: "G-LXFMYM7KTB"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

