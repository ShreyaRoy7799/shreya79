import './App.css';
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import Cheakout from '../pages/Cheakout';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';



const Routers = () => {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
   <Route path='Home' element={<Home/>} />
   <Route path='Shop' element={<Shop/>}/>
   <Route path='Shop/:id' element={<ProductDetails />}/>
   <Route path='cart' element={<Cart/>}/>
   <Route path='cheakout' element={<Cheakout/>}/>
   <Route path='login' element={<Login/>}/>
   <Route path='signup' element={<Signup/>}/>
   </Routes>
  
   </BrowserRouter>
   
  )
};

export default Routers;
// import ReactDOM from "react-dom/client";
//  import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Shop";
// import Blogs from "./Routers";
// import Contact from "./pages/";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);