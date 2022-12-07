import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AllCategoryPage from '../AllCategoryPage/AllCategoryPage'
import * as ordersAPI from '../../utilities/orders-api'
import CartPage from '../CartPage/CartPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import { useEffect } from 'react';
import CategoryPage from '../CategoryPage/CategoryPage';
import DetailsPage from '../DetailsPage/DetailsPage'



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
  useEffect(function(){
    async function getCart(){
      const cart = await ordersAPI.getCart()
      console.log("getCart Fun")
      setCart(cart)
    }
    getCart() 
  }, [])
  async function handleAddToOrder(prodId){
    const cart = await ordersAPI.addItemToCart(prodId)
    setCart(cart)
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/products' element={<AllCategoryPage productCat={productCat} product={product}/>}/>
            <Route path='/cart' element={<CartPage cart={cart}/>} />
            <Route path='/orders' element={<OrderHistoryPage />} />
            <Route path='/product/:catname' element={<CategoryPage productCat={productCat} product={product} handleAddToOrder={handleAddToOrder}/>}/>
            <Route path='/product/details/:prodId' element={<DetailsPage/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
