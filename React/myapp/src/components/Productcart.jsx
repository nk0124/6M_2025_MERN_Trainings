
import "./style.css";
function Productcart({name,price,description}){
    return(
        <div className="product-card">
            <h className="product-name"><span>Product Name:</span>{name}</h>
            <p className="product-price"><span>Price:</span>{price}</p>
            <p className="product-description"><span>Description:</span>{description}</p>
        </div>
    )
}

export default Productcart;