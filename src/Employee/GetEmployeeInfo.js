
import { render } from "@testing-library/react";
import React from "react";
import Employee from './Employee'
import Employees from './Employees'
import { useState ,useEffect,Fragment} from "react";
import axios from "axios";
import {nanoid} from "nanoid"

import swal from "sweetalert";
function GetInfo ({employee})
{

const [edit,setEdit]=useState(null);
const [search,setSearch]=useState([]);
const [employe,setEmploye]=useState('')
const [saveEditable,setSaveEditable]=useState({
oldfirstname:'',
oldlastname:'',
oldage:'',
oldgender:'',
oldheight:''});



   const [getEditableValu,setgetEditableValu]  =useState(
       {
         no:'',
        firstname:'',
        lastname:'',
        age:'',
        gender:'',
        height:''

        })
        
       

const handlEdit=(event,id)=>
{
event.preventDefault();
setEdit(id.firstname);
const oldFieldvalu=
{
    no:id.no,
    firstname:id.firstname,
    lastname:id.lastname,
    age:id.age,
    gender:id.gender,
    height:id.height
}

setgetEditableValu(oldFieldvalu);
setSaveEditable(oldFieldvalu);


}

const editEmployee=(event)=>
{
event.preventDefault();
const fieldname=event.target.name;
const value=event.target.value;
const newEdit={...getEditableValu};
newEdit[fieldname]=value;

setgetEditableValu(newEdit);
console.log(newEdit);


}

const saveEdit=(event)=>
{
event.preventDefault();
const saveEdit={
    no:getEditableValu.no,
    firstname:getEditableValu.firstname,
    lastname:getEditableValu.lastname,
    age:getEditableValu.age,
    gender:getEditableValu.gender,
    height:getEditableValu.height
}


const newEidtEmployee=[...employe]
const index=employee.findIndex((employe)=>employe.firstname===edit.firstname)
newEidtEmployee[index]=saveEdit;
if(saveEdit.age<=0)
{
    alert("Pleas Fill the legal Age")
}
//else if(saveEdit.gender===("Female"||"Male"||"female"||"male"))
//{
   // alert("Pleas Fill the gender as Male or Female")
//}
else{
axios.post('http://localhost:8080/EmployeeDB/update.php ',saveEdit).then(res=>console.log(res.data));
swal({
    title: "Update Success!",
    text: "Employee Attribute Updated sucessfuly Refresh to see the effect!",
    icon: "success",
  });

}

setEdit(null);
}

const handlCancel=()=>
{
    setEdit(null);
}


const  deleteEmployee=(event,del)=>
{
    event.preventDefault();
    const deleteEmployee=
    {
        firstname:del.firstname,
        lastname:del.lastname,
        age:del.age,
        gender:del.gender,
        height:del.height
    } 
    setgetEditableValu(deleteEmployee);
    
  
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this employee file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.post('http://localhost:8080/EmployeeDB/deleteEmployee.php',deleteEmployee).then(res=>console.log(res.data))
          swal(" Refresh the browser to see the effect", {
            icon: "success",
            title:"Poof! Your Employee file has been deleted!"
          });
        } else {
          swal("Your Employee  file is safe!");
        }
      });




}

return(
 
<div className="container mb-5 mt-5 text-left">
<input type="text" placeholder='Search...' style={{marginTop:0,marginLeft:200,width:600,fontSize:30,borderRadius:10}} 
   onChange={(e)=>setSearch(e.target.value)}>
   </input>
<form onSubmit={saveEdit}>
<table className="table table-hover">
        <thead>
            <tr>
          <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age </th>
            <th>Gender</th>
            <th>Height</th> 
           
            
            </tr>
        </thead>
        <tbody style={{fontSize:23}}>
        {employee.filter(employee=>employee.firstname.toLowerCase().includes(search)).map((employee)=>(
        <Fragment>
   {edit===employee.firstname?(<Employees getEditableValu={getEditableValu}  editEmployee={editEmployee} handlCancel={handlCancel}></Employees>):(<Employee employee={employee}   handlEdit={handlEdit} deleteEmployee={deleteEmployee} ></Employee>)}
    </Fragment>
))}
    
 </tbody>
    </table>

    </form>
   
 

</div>);
}
export default GetInfo;
