
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CartContainer, CreateContainer, Header } from './components';
import MainContainer from './components/MainContainer';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';

import { useEffect } from 'react';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import MenuContainer from './components/MenuContainer';
import FeedbackPage from './components/FeedbackPage';
import CartPage from './components/CartPage';


function App() {
  const [{}, dispatch] = useStateValue();


  const fetchData = async () => {
    await getAllFoodItems().then((data)=> {
      console.log(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence wait>

      <div className='main'>
        <div className='main11'>
          <Header />

          <main className='main2'>
            <Routes>
              <Route path='/*' element={<MainContainer />} />
              <Route path='/createItem' element={<CreateContainer />} />
              <Route path='/AboutPage' element={<AboutPage />} />
              <Route path='/ServicePage' element={<ServicePage />} />
              <Route path='/MainContainer' element={<MainContainer />} />
              <Route path='/MenuContainer' element={<MenuContainer />} />
              <Route path='/CartPage' element={<CartPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </AnimatePresence>

  );
  // <div>helloe</div>


}

export default App;
