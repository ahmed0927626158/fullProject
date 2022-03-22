
import './App.css';
import './Allcss.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Register from './Employee/RegisterEmployee.js';

import Footer from './Footer/Footer';

import { useState ,useEffect} from "react";

import axios from 'axios';
import GetInfo from './Employee/GetEmployeeInfo';
import styled from '@emotion/styled'

const Buttonn=styled.button` 
background-color:green;
color:white;
padding:20;
border-radius:10px;
width:200px;
height:100px;
margin-top:100px;
margin-left:70px;
font-size:30px;
font-weight:bold;
display:inline;
&:hover 
{
color:black;
background-color:grey;
};
`;


const ButtonViewEmployee=styled.button` 
background-color:green;
color:white;
padding:60;
border-radius:10px;
width:200px;
height:100px;
margin-left:1400px;
margin-top:100px;
font-size:30px;
font-weight:bold;
&:hover 
{
color:black;
background-color:grey;
};
`;
const SearchButton=styled.div` 
background-color:white;
color:black;
padding:60px;
border-radius:0px;
width:1200px;
margin-left:310px;
font-size:30px;
font-weight:bold;
`;


function App ()
{
        
  const [employee,setEmployee]=React.useState([]);
  const [searchh,setSearch]=React.useState([]);

  useEffect(()=>{
      axios.get('http://localhost:8080/EmployeeDB/select.php').then(res=>{
        setEmployee(res.data);
     
       })
      .catch(err=>{
      console.log(err);
      })
      },[])
   
      console.log({employee})

    

    return(
     

   <div className='wraper'>
  
    <div className='NavButton1' >
   <Buttonn  >
     <a href='view' style={{textDecorationLine:'none',color:'white'}}>List Of Employee</a>
     </Buttonn>
   
   <ButtonViewEmployee className='NavButton2' >
     <a href='add' style={{textDecorationLine:'none',color:'white'}}>Add Employee </a>
     </ButtonViewEmployee>
     </div>

    <Router >
      <Routes >
      <Route path="/" element={ < GetInfo employee={employee}></GetInfo>} exact ></Route>
      <Route path="/view" element={ < GetInfo employee={employee}></GetInfo>} exact ></Route>
    <Route path="/add" element={<Register></Register>} exact></Route>
      </Routes>
    </Router>
   
  <Footer></Footer>
    </div>
  
  
    );
    
  
}



 
  

export default App;





