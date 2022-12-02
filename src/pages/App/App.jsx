import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ProductPage from '../ProductPage/ProductPage'
import CartPage from '../CartPage/CartPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import { useEffect } from 'react';
import axios, {isCancel, AxiosError} from 'axios';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [productCat, setProductCat] = useState([])

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
