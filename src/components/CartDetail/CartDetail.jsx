export default function DetailCard({cartItem}){
let product = ''
fetch(`https://api.escuelajs.co/api/v1/products/${cartItem.Id}`)
    .then(res=>res.json())
    .then(json=> product = json)
    return(
        <p>{product.name}</p>
    )
}