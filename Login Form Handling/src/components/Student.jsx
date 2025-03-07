export default function Student(props){
    // console.log(props.sname, props.course);
    return(
        <div>
            <table border={"1px"}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td className="myclass">{props.sname}</td>
                    </tr>
                    <tr>
                        <td>Course</td>
                        <td>{props.course}</td>
                    </tr>
                </tbody>
            </table>
         
       </div>
    )
}
// export default Student