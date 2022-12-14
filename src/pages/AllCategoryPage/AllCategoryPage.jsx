import ProductCard from '../../components/ProductCard/ProductCard'
import ProductNavBar from '../../components/ProductNavBar/ProductNavBar'
import "./AllCategoryPage.css"

export default function AllCategoryPage({productCat, product, handleAddToOrder}) {
  return(
    <>
        <h1>All Products</h1>
        <nav class='prodNavBar'>
        {productCat.map(cat => {return(<ProductNavBar key={cat.name} cat={cat}/>)})}
        </nav>
        <ul>
          {product.map(prod => <ProductCard key={prod.id} product={prod} handleAddToOrder={handleAddToOrder}/>)}
        </ul>
    </> 
  )
}
