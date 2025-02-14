
function ContantCard(props){
    return (
        <div style={{border:"2px solid",textAlign:"center",backgroundColor:"white",color:"black"
            ,marginLeft:"20px",borderRadius:"6px",marginBottom:"2px",padding:"2px"
        }}>
            <h2>Contact Card</h2>
            <p style={{fontWeight:"bold"}}><span>Name:</span>{props.name}</p>
            <p>Phone-Number:{props.phone}</p>
            <p>Email:{props.email}</p>
        </div>
    )
}

export default ContantCard;