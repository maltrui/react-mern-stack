import { useState } from 'react';
import { useParams } from "react-router-dom"
import { useEffect } from 'react';

export default function ProductPage(){
    const [selectedProd, setSelectedProd] = useState(
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
    )
    let productId = useParams().prodId
    useEffect(()=>{
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
    .then(res=>res.json())
    .then(json=>{
        setSelectedProd(json)})
    }, [])
    return(
        <ul>
            <li>{selectedProd.title}</li>
            <li> $ {selectedProd.price}</li>
            <li> Description: {selectedProd.description}</li>
            <li> Category: {selectedProd.category.name}</li>
            {selectedProd.images[0] !== '' ? <li>{selectedProd.images.map(prodImg => <img key={prodImg} src={prodImg}/>)} </li> : <li>{selectedProd.category.image}</li>}
        </ul>
    )
}
