import CartDetail from "../../components/CartDetail/CartDetail"
import { useState } from 'react';
import { useEffect } from 'react';

export default function CartPage({cart, product}) {
  if (!cart) return null
  let totalCost = 0
  cart.lineItems.map(cartProd => {let productPrice = product.find(({id}) => id === cartProd.itemId).price
  totalCost = totalCost + (productPrice*cartProd.qty)})
  return (
    <>
      {cart.lineItems.map(cartItem => { 
        return(
        <CartDetail key={cartItem.itemId} cartItem={cartItem}/>)
      })}
      {<p>Total Cost: ${totalCost}</p>}
    </>
  );
}

