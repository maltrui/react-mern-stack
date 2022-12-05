import ProductCard from '../../components/ProductCard/ProductCard'
import { useState } from 'react';
import ProductNavBar from '../../components/ProductNavBar/ProductNavBar';
import { useEffect } from 'react';

export default function AllCategoryPage({productCat, product}) {

  return(
    <>
        <h1>All Products</h1>
        <nav>
        {productCat.map(cat => {return(<ProductNavBar key={cat.name} cat={cat}/>)})}
        </nav>
        <ul>
          {product.map(prod => <ProductCard key={prod.id} product={prod}/>)}
        </ul>
    </> 
  )
}
