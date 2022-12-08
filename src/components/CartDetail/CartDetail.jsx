import { useEffect } from 'react';
import { useState } from 'react';

export default function DetailCard({cartItem, handleChangeQty}){
const [orderProd, setOrderProd] = useState([
        {id: '',
        title:'',
        price: '',
        description: '',
        category: {
            id: '',
            name: 'placeholder',
            image: ''
        },
        images: [
            ''
        ]
        
        }
])
useEffect(()=>{
fetch(`https://api.escuelajs.co/api/v1/products/${cartItem.itemId}`)
    .then(res=>res.json())
    .then(json=> {
        setOrderProd(json)})
}, [])
    return(
        <p>{orderProd.title} ${orderProd.price} <button onClick={() => handleChangeQty(cartItem.itemId, cartItem.qty-1)}> - </button> QTY:{cartItem.qty} <button onClick={() => handleChangeQty(cartItem.itemId, cartItem.qty+1)}> + </button></p>
    
    )
}