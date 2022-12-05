import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import CategoryPage from '../CategoryPage/CategoryPage'
import ProductPage from '../ProductPage/ProductPage'
import CartPage from '../CartPage/CartPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import DetailsPage from '../DetailsPage/DetailsPage'
import './App.css';
import { useEffect } from 'react';


export default function App() {
  const [user, setUser] = useState(getUser())
  const [product, setProduct] = useState([])
  const [productCat, setProductCat] = useState([])
  const [selectedCat, setSelectedCat] = useState()
  const [selectedProd, setSelectedProd] = useState([])

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

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/products' element={<CategoryPage productCat={productCat} product={product}/>}/>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
            <Route path='/product/:catname' />
            <Route path='/product/details/:prodId' element={<DetailsPage/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
