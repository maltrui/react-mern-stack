import { useParams } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import ProductNavBar from '../../components/ProductNavBar/ProductNavBar';
import ProductCard from '../../components/ProductCard/ProductCard'

export default function CategoryPage({productCat, product}){
    
    const [selectedCat, setSelectedCat] = useState([
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
    let catId = useParams().catname
    useEffect(()=>{
    fetch(`https://api.escuelajs.co/api/v1/categories/${catId}/products`)
    .then(res=>res.json())
    .then(json=>{
        setSelectedCat(json)})
    },[catId])
    console.log(selectedCat)
    return(
        <>
        <h1>{selectedCat[0].category.name} Page</h1>
        <nav>
            {productCat.map(cat => {return(<ProductNavBar key={cat.name} cat={cat}/>)})}
        </nav>
        <ul>
            {selectedCat.map(prod => <ProductCard key={prod.id} product={prod}/>)}
        </ul>
        </>
    )
}
