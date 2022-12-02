import ProductCard from '../../components/ProductCard/ProductCard'
import { useState } from 'react';
import ProductNavBar from '../../components/ProductNavBar/ProductNavBar';
import axios, {isCancel, AxiosError} from 'axios';
import { useEffect } from 'react';

export default function ProductPage() {
  const [productCat, setProductCat] = useState([])
  const optionsSearchBar = {
    method: 'GET',
    url: 'https://amazon24.p.rapidapi.com/api/category',
    params: {country: 'US'},
    headers: {
      'X-RapidAPI-Key': '5c5caad252msh71bd0fecc802f7cp100414jsnb3df0ccdc3ac',
      'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
    }
  };
  console.log(productCat)
  useEffect(()=>{
    axios.request(optionsSearchBar).then(function (response) {
      setProductCat([...response.data]);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  return(
    <>
        <h1>Product Page</h1>
       <nav>
          {productCat.map(cat => <ProductNavBar cat={cat}/>)}
       </nav>
    </> 
  )
}