import "./Country.css"
export default function Country({name, capital}){
    // console.log(props);
    // console.log(name);
    // let {name, capital}=props
    let styleObj={
        boxShadow:"0px 0px 10px gray", 
        padding:"5px"
    }
    return(
        <div className="country">
            <div style={styleObj}>
                Name is {name}
                <br/>
                Capital is {capital}
                <div style={{color:"red"}}>Hello</div>
                <p className="myclass">My class</p>
                <img src="vite.svg"/>
            </div>
        </div>
    )
}