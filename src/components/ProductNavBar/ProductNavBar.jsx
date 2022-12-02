import {Link} from "react-router-dom"

export default function ProductNavBar({cat}){
    return(
            <Link to={`/product/${cat.name}`}>{cat.name}</Link>
    )
}