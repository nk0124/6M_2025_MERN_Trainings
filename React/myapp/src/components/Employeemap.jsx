import { Fragment } from "react";

function Employeemap(){
    const employees=[
        {name:"Raaj Kumar", dept:"Software Engineer",salary:"$80,000"},
        {name:"Neha" , dept:"Marketing" ,salary:"$70,000"},
        {name:"Sahil Kumar" , dept:"HR" , salary:"$60,000"},
        {name:"Noor" , dept:"IT" , salary:"$50,000"}
    ];
    return(
       <>
       {employees.map((employee,index)=>{
        //    console.log("hello");
           return(
        <Fragment>
            <div style={{border:"2px solid",textAlign:"center",backgroundColor:"white",color:"black"
            ,marginLeft:"20px",borderRadius:"6px",marginBottom:"2px",padding:"2px",width:"350px"
        }}>
         
          <h3>Employee Name:{employee.name}</h3>
          <p>Department:{employee.dept}</p>
          <p>Salary:{employee.salary}</p>
          
        </div>
        </Fragment>
           )
       })}
       </>
    )
}




export default Employeemap;





