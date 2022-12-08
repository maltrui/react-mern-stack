import CartDetail from "../../components/CartDetail/CartDetail"
import { useState } from 'react';
import { useEffect } from 'react';

export default function CartPage({cart}) {
  let [overallCost, setOverallCost] = useState([0])
  useEffect(() => {if(!cart){
    return null
  } else {
    cart.lineItems.map(cartItem =>fetch(`https://api.escuelajs.co/api/v1/products/${cartItem.itemId}`)
    .then(res=>res.json())
    .then(json=> {
        let sum = cartItem.qty * json.price
        setOverallCost([...overallCost, sum])}))
  }}, [])
  if (!cart) return null
  
  return (
    <>
      {cart.lineItems.map(cartItem => { 

        return(
        <CartDetail key={cartItem.itemId} cartItem={cartItem}/>)
      })}
      {<p>Total Cost: {overallCost}</p>}
    </>
  );
}

