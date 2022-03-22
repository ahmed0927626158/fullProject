import axios from 'axios'
import './App.css';
import React, { useState } from 'react';
import './App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal } from 'bootstrap';
import Reternlist from './Reternlist'
//Axios for get request

const App =()=>
  {
 //initialize an object's state in a class
  
      this.state = {data:[]}
         const [red,setRed] =useState
         ({
         id:"",
         email:"",
            name:""

         })    
      
      
      //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
      componentDidMount()
      {
        //get request
        axios.get('http://localhost:8080/Website3/test.php').then(res =>{this.setState({data: res.data});
           }).catch(function(event)
           {
             console.log(event)
           }); 
        
          }
          
          
    usertlist()
           {
            
                 return this.state.data.map(function(data,i){
                   return <Reternlist object={data} key={i} />;
                 });
           }
           
        
    
           return (
     
            <div className="maincontainer">
             
              <h1 className="mr-5 ml-5 mt-5">Therichpost.com</h1>
              <div className="container mb-5 mt-5 text-left">
              
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
      
                  
                
                  {this.usertlist()}
      
                  
                </tbody>
              </table>
             
                  
            </div>
           
            </div>
           
          );
      }
          
 
 
               
                

/*
            onSubmit(event) {
                event.preventDefault();
                console.log(this.state);
                this.onSubmit = this.onSubmit.bind(this)
            
            axios({
                method: 'post',
               
                headers: {
                    'content-type': 'application/json'
                },
                data: this.state
            })
            .then(result => {
                console.log(result.data)
                this.setState({
                    dataSent: result.data.sent,
                })
                console.log(this.state)
            })
            .catch(error => this.setState({
                error: error.message
            }));
        }

        render() {
            return (<div className="container">
            <div className="box heading">
               <h1>EAT, DINE & <br/>DRINK</h1>
            </div>
            <div className=" box feedback-form">
               <p className="grey">SEND US YOUR FEEDBACK</p>
               <div className="inputstyle">
                  <input type="text"
   placeholder="Enter your Name"
   value={this.state.name}
   onChange={e => this.setState({ name: e.target.value })}
               />
               </div>
               <div className="inputstyle">
   <input type="text"
      placeholder="Enter your Email"
      value={this.state.email}
      onChange={e => this.setState({ email: e.target.value })}
   />
</div>
<div className="inputstyle">
   <textarea placeholder="Your message goes here"
      value={this.state.feedback}
      onChange={e => this.setState({ feedback: e.target.value })}
   ></textarea>
</div>
               <div className="btnstyle">
               <input type="submit"
   value = "Send"
   onClick={e => this.onSubmit(e)}
/>
               </div>
            </div>
         </div>);
               
            
        }
        */
    
    export default App;
