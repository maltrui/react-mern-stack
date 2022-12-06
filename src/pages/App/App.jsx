import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AllCategoryPage from '../AllCategoryPage/AllCategoryPage'

import CartPage from '../CartPage/CartPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import { useEffect } from 'react';
import CategoryPage from '../CategoryPage/CategoryPage';
import DetailsPage from '../DetailsPage/DetailsPage'
import { getActiveElement } from '@testing-library/user-event/dist/utils';


export default function App() {
  const [user, setUser] = useState(getUser())
  const [product, setProduct] = useState([])
  const [productCat, setProductCat] = useState([])
  const [cart, setCart] = useState(null)

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/categories')
    .then(res=>res.json())
    .then(json=>setProductCat(json))
  }, [])
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res=>res.json())
    .then(json=>setProduct(json))
  }, [])
  function getItem(productId){
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
    .then(res=>res.json())
    .then(json=>json)
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/products' element={<AllCategoryPage productCat={productCat} product={product}/>}/>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
            <Route path='/product/:catname' element={<CategoryPage productCat={productCat} product={product}/>}/>
            <Route path='/product/details/:prodId' element={<DetailsPage/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
