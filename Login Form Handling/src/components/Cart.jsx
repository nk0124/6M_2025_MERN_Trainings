export default function Cart(props){
    console.log(props, "Cart");
    
    return(
       
         
         
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{props.price}</td>
        </tr>
      
   
    )
}