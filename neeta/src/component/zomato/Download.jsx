import { CSVDownload, CSVLink } from "react-csv";
import data from "./zomatodata";
import moment from "moment";

export default function Download(){
    let csvData=data?.map((el,index)=>{
        // console.log(el?.info?.name, el?.info?.rating?.rating_text);
        return [el?.info?.name, el?.info?.rating?.rating_text]
    })
    // console.log(csvData);
    let header1=["Restro Name", "Rating"]
    // let date=new Date()
    // console.log(date.getDate());
    // console.log(date.getMonth()+1);
    // console.log(date.getFullYear());
    let date=moment().format("MMM Do ddd YYYY")
    console.log(date);
    let header2=[
        {label:"Restro name", key:"info.name"},
        {label:"Restro Rating", key:"info.rating.rating_text"}
    ]
    
    return(
        <>
        {/* in this method i have used array of array for the zomato data and map to convert the data */}
        <CSVLink data={csvData} headers={header1} filename={date}>
            <button className="btn btn-dark">Download</button>    
        </CSVLink>
        

        {/* in this method i have passed direct zomato data in the csvlink and used header with label and key to print csv */}
        <CSVLink data={data} headers={header2} filename={date}>
            <button className="btn btn-dark">Download2</button>    
        </CSVLink>
        {/* <CSVDownload data={csvData} target="_blank" />; */}
        </>
    )
}