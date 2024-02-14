import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Home from './scenes/home/Home';
import ItemDetail from './scenes/ItemDetails/itemDetail';
import Checkout from './scenes/Chcekout/Checkout';
import Confirmation from './scenes/Chcekout/Confirmation';
import Navbar from './scenes/Global/Navbar';
import Footer from './scenes/Global/Footer'
import Cartmenu from './scenes/Global/Cartmenu';

const ScrollableTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  return null;
};

function App() {
  return (
    <div className="app">
  <Router>
      <Navbar/>
      <Cartmenu/>

        <ScrollableTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='item/:itemId' element={<ItemDetail/>}/>
          <Route path='checkout'  element={<Checkout/>} />
          <Route path='checkout/success'  element={<Confirmation/>} />
        </Routes>
        <Footer/>

  </Router>
     
    </div>
  );
}

export default App;
