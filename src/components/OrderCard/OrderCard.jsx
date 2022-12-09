
export default function OrderList({order, product}){
    let totalCost = 0
    console.log(order)
    order.lineItems.map(cartProd => {let productPrice = product.find(({id}) => id === cartProd.itemId).price
    totalCost = totalCost + (productPrice*cartProd.qty)})
    return(
        <div>
            <p>Order ID:{order._id}</p>
            {order.lineItems.map(item => <p key={item._id}>Item Id:{item.itemId} Item Qty: {item.qty}</p>)}
            <p>Total: ${totalCost}</p>
        </div>
    )
}