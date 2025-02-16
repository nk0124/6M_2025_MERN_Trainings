
import Shoppingcart from "./Shoppingcart";

function ShoppingTable(props){
    return(
      <table border="1px">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <Shoppingcart name="Laptop" price="1000"  quantity="1" />
            <Shoppingcart name="Headphones"  price="100" quantity="2" />
            <Shoppingcart {...props}/>
        </tbody>
      </table>
    )
}


export default ShoppingTable;