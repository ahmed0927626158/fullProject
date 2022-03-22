import React from "react";
import './All.css'
import styled from '@emotion/styled'
//for cancel button style
const ButtonCancel=styled.button` 
background-color:skyblue;
color:red;
padding:10;
border-radius:10px;
font-size:23px;
font-weight:bold;
&:hover 
{
color:black;
background-color:red;
};
`;

//for save button
const ButtonSave=styled.button` 
background-color:grey;
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


 function Employees ( {getEditableValu,editEmployee,handlCancel})
 {
return(
<tr style={{fontSize:23}}>
<td> <input type="text" name="firstname" required="required" value={getEditableValu.firstname} onChange={editEmployee}></input></td>
<td> <input type="text" name="lastname" required="required"  value={getEditableValu.lastname} onChange={editEmployee}></input></td>
<td> <input type="text"  name="age"  required="required"  value={getEditableValu.age}   onChange={editEmployee}></input></td>
<td> <input type="text" name="gender" required="required"   value={getEditableValu.gender}   onChange={editEmployee}></input></td>
<td> <input type="text"  name="height" required="required"  value={getEditableValu.height} onChange={editEmployee}></input></td>
<td> 
    <ButtonSave><input   type="submit" id="save" value="Save" style={{color:'green',borderRadius:10,width:110,fontSize:23,background:'white'}}/></ButtonSave>
    <ButtonCancel> <button id="cance" style={{color:'red',borderRadius:10,width:110,height:50,fontSize:23}} onClick={handlCancel}>Cance
    </button></ButtonCancel>
    </td>
</tr>
);
 }
export default Employees;