import Cart from "./Cart";

export default function CartTable(props){
    console.log(props);
    
    return(
        <table border={"1px"}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>

            </thead>
            <tbody>
                <Cart name="top" price="1000" quantity="1"/>
                <Cart name="jeans" price="2000" quantity="2"/>
                <Cart {...props}/>
            </tbody>
        </table>
    )
}