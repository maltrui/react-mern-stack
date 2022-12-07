import CartDetail from "../../components/CartDetail/CartDetail"

export default function CartPage({cart}) {
  //console.log(cart.orderTotal)
  
  return (
    <>
      {cart == null ? <></> : cart.lineItems.map(cartItem => <CartDetail key={cartItem.itemId} cartItem={cartItem}/>)}
      {cart == null ? <></> : <p></p>}
    </>
  );
}

//{cart.orderTotal}