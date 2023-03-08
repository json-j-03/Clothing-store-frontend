import React from 'react'
function List(props){
    return(
        <ul>
        <li key={props.data.Id}>
            Employer Id : {props.data.Id}<br></br>
            Employer name: {props.data.Name}<br></br>
            Employer Salary: {props.data.Salary}
        </li> 
        </ul>
    );
}
function Employee() {
    const employee=[{Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},
    
    {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},
    
    {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}]
    const mod=[];
    for(let i=0;i<employee.length;i++){
        if(employee[i].Salary>15000){
            mod.push(employee[i])
        }
    }
    return (
    mod.map((data)=>
        (
            <List key={data.Id} data={data}/>
        )
    )
    );
}
export default Employee