
function Student(){
    const students=[
        {id:1,name:"Neetu",age:21,course:"Php"},
        {id:2,name:"John",age:24,course:"React"},
        {id:3,name:"Rajni",age:22,course:"Python"}

    ];
    return(
        <div>
            <h2>Student Table</h2>
            <table border="1px">
                <thead>
                    <tr>
                        <th style={{backgroundColor:"aqua"}}>ID</th>
                        <th style={{backgroundColor:"aqua"}}>Name</th>
                        <th style={{backgroundColor:"aqua"}}>Age</th>
                        <th style={{backgroundColor:"aqua"}}>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student)=>(
                        <tr key={student.id}>
                           <td>{student.id}</td>
                           <td>{student.name}</td>
                           <td>{student.age}</td>
                           <td>{student.course}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Student;