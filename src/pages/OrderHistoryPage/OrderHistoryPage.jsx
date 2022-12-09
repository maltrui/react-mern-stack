import { useEffect } from 'react';
import { useState } from 'react';
import * as ordersAPI from '../../utilities/orders-api'
import OrderCard from '../../components/OrderCard/OrderCard'
export default function OrderHistoryPage({product}) {
  const [orders, setOrders] = useState([])
  useEffect(function (){
    async function fetchOrderHistory(){
      const orders = await ordersAPI.getOrderHistory()
      setOrders(orders)
    }
    fetchOrderHistory()
  }, [])
  return (
    <>
      <h1>Order History</h1>
      {orders.map(order => <OrderCard key={order._id} order={order} product={product}/>)}
    </>
  );
}