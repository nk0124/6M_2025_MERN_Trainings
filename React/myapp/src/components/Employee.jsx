function Employee({ename,Position,Department}){
    return (

        <div>
            <table border={"1px"}>
                <thead>
                    <tr>
                        <th className="thead">Employeee Name</th>
                        <th className="thead">Position</th>
                        <th className="thead">Department</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td>{props.ename}</td>
                        <td>{props.Position}</td>
                        <td>{props.Department}</td>
                    </tr>
                </tbody> */}
                 <tbody>
                    <tr>
                        <td style={{backgroundColor:"red"}}>{ename}</td>
                        <td>{Position}</td>
                        <td>{Department}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Employee;