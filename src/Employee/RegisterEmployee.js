
import React, { Component, useState,useEffect } from "react";
import axios  from "axios";
import AddEmployee from "./AddEmploye";
import swal from "sweetalert";

function  Register ()
{


   const [employee,setemployee]=useState(
             { 
             firstname:'',
         lastname:'',
             age:'',
          gender:'',
          height:''
             }
             )

  const change=(event)=>
  {
    event.preventDefault();
    /*
    const newEmployee=
    {
      firstname:info.firstname,
      lastname:info.lastname,

        age:info.age,
     gender:info.gender,
     height:info.height

    }
    */
    const value=event.target.value;
    const variable=event.target.name;
    employee[variable]=value;
   
   
    const newdata={...employee};
    newdata[variable]=value;
    setemployee(newdata);
    
      console.log(employee);
    
  }



  const onSubmit=(event)=>
  {
event.preventDefault();
if(employee.age<=0)
{
  alert("please fill legal age");
}
else{
  axios.post('http://localhost:8080/test/insert.php',employee).then(res=>console.log(res.data));
  swal({
    title: "Register Successfull!",
    text: "Employee Registered!",
    icon: "success",
  });
  
}

console.log(employee);

  }
 
  //value={this.state.username} // onChange={this.change}   value={this.state.username} onChange={this.change}   onChange={this.idchange}
    return (
      <div className="add">
        
        <form   id='form1' className='f1'  onSubmit={onSubmit}  >
        {[employee].map((employee)=>(
      <AddEmployee employee={employee} change={change}  ></AddEmployee>))
        }
      </form>
    </div>
  );



  }


//ReactDOM.render(<NameForm />,document.getElementById('d2'));
export default Register;
