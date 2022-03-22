
import React from "react";

import styled from '@emotion/styled'
// styled for Add(Register) button
const ButtonAdd=styled.button` 
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

function AddEmployee({employee,change})
{
    
return(
    <div className="contact" style={{fontSize:23}}>
       First Name: 
        <input type='text'  name="firstname" value={employee.firstname} placeholder="user name" required="required"   onChange={(event)=>change(event)}  />
        <br></br>
       Last Name: 
       <input type='text' name="lastname" placeholder="last name"  required="required"   value={employee.lastname}  onChange={(event)=>change(event)} /><br>
       </br>
       Age:   <input type='number'   name="age" id='age' placeholder='Age' required="required"   value={employee.age}  onChange={(event)=>change(event)} />
       <br></br>
       Gender:<input  type='radio' name='gender' className='gender'  value="Male"        onChange={(event)=>change(event)} /> Male 
       <input  type='radio' name='gender' className='gender'  value="Female"          onChange={(event)=>change(event)}     /> Female<br></br>
       Height: <input type='text'  name="height" id='height'  placeholder='Height' required="required"   value={employee.height} onChange={(event)=>change(event)} />
       <br></br>
       <ButtonAdd><input  type='submit' value='Add' id='sub' /></ButtonAdd>
       </div>

);
}
export default AddEmployee;