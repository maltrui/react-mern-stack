import CartDetail from "../../components/CartDetail/CartDetail"

export default function CartPage({cart}) {

  return (
    <>
      {cart == null ? <></> : cart.lineItems.map(cartItem => <CartDetail cartItem={cartItem}/>)}
    </>
  );
}