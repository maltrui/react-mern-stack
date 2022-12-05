import {Link} from "react-router-dom"
import DetailCard from "../DetailCard/DetailCard"

export default function ProductCard({product}){
    let img = ''
    if(product.images.length != 0){
        img = product.images[0]
    } else {
        img = product.image
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
                   <img src={img} />
                </li>
                <li>
                    <Link to={`/product/${product.id}`}> Details</Link>
                </li>
            </ul>
        </>
    )
}