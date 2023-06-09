
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './component/navbar';
import Shop from './pages/shop/shop';

import { ShopContextProvider } from './context/shop-context';
import { Cart } from './pages/cart/cart';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </Router>

      </ShopContextProvider>
    
           
    </div>
  );
}

export default App;
