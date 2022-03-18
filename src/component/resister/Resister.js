import React,{useState}from "react";
import "./Resister.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Resister=()=>{
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        repassword:""
    })
const history=useNavigate();

const rd=()=>{

    history("/login")

}
    const handleClick=(e)=>{
           
         const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })

    }


      
      const Regster=()=>{
      const {name,email,password,repassword}=user;

      if(name && email.length && password && (password===repassword)){

         axios.post("http://localhost:5000/resister",user).then(res=>{
             alert("user successfully register")
             history("/login")
             

         })
     
    }else{
        alert("invlid input")
    }

        }
            
    return (<>
<div className="register">
       <h1>Register</h1>
       <input type="email" name="email" value={user.email} onChange={handleClick} placeholder="enter your email" />
       <input type="text" name="name" value={user.name} onChange={handleClick} placeholder="enter your text" />
       <input type="password" name="password" value={user.password} onChange={handleClick} placeholder="Enter your password"/>
       <input type="password" name="repassword" value={user.repassword} onChange={handleClick} placeholder="Re-Enter your password"/>
       <div className="button" onClick={Regster}>
              Register
       </div>
       
       <div>or</div>
       <div className="button" onClick={rd}>Login</div>

   </div>
    </>)
}

export default Resister;