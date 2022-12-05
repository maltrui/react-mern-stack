import {Link} from "react-router-dom"

export default function ProductCard({product}){
    let selectedImg = ''
    if(product.images[0] !== ''){
        selectedImg = product.images[0]
    } else {
        selectedImg = product.category.image
        
    }
    return(
        <>
            <ul>
                <li>
                    {product.title}
                </li>
                <li>
                    $ {product.price}
                </li>
                <li>
                   <img src={selectedImg} />
                </li>
                <li>
                    <Link to={`/product/details/${product.id}`}> Details</Link>
                </li>
            </ul>
        </>
    )
}