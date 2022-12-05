import ProductCard from '../../components/ProductCard/ProductCard'
import { useState } from 'react';
import ProductNavBar from '../../components/ProductNavBar/ProductNavBar';
import axios, {isCancel, AxiosError} from 'axios';
import { useEffect } from 'react';

export default function CategoryPage({productCat, product}) {

  return(
    <>
        <h1>Product Page</h1>
        <nav>
        {productCat.map(cat => {return(<ProductNavBar key={cat.name} cat={cat}/>)})}
        </nav>
        <ul>
          {product.map(prod => <ProductCard key={prod.product_id} product={prod}/>)}
        </ul>
    </> 
  )
}
