
function Shoppingcart(props){
    return (
       <div>
         <table border={"1px"}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.quantity}</td>
                </tr>
            </tbody>
         </table>
       </div>
    )
}

export default Shoppingcart;