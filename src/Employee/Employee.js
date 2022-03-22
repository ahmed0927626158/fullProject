import React, { useState,Fragment } from "react";
import Employees from './Employee'

import   GetInfo from './GetEmployeeInfo'
import styled from '@emotion/styled'
// styled for edit button
const ButtonEdit=styled.button` 
background-color:skyblue;
color:red;
padding:10;
border-radius:10px;
font-size:23px;
font-weight:bold;
&:hover 
{
color:black;
background-color:blue;
};
`;


// styled for delete  button
const ButtonDelete=styled.button` 
background-color:skyblue;
color:red;
padding:10;
border-radius:10px;
font-size:23px;
font-weight:bold;
margin-left:0px;
align-item:center;
&:hover 
{
color:black;
background-color:blue;
};
`;


const Employee=({employee,handlEdit,deleteEmployee})=>
{
    
return(
 
    <tr>
<td>{employee.no}</td>
<td> {employee.firstname}</td>
<td> {employee.lastname}</td>
<td>{ employee.age}</td>
<td>{ employee.gender}</td>
<td>{ employee.height}</td> 
<td >
<ButtonEdit><button type="button" style={{color:'green',borderRadius:10,width:100,fontSize:23}} onClick={(event)=>handlEdit(event,employee)} >Edit</button></ButtonEdit>

</td>
<td>
<ButtonDelete><button type="button" style={{color:'green',borderRadius:10,width:100,fontSize:23}}  onClick={(event=>deleteEmployee(event,employee))} >Delete</button></ButtonDelete>
</td>

</tr>

);
}
export default Employee