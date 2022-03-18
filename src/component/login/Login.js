import React, { useState } from "react";
import "./Login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Longin = ({setloginUser}) => {
    const Navgit = useNavigate();
    const navreg = () => {
        Navgit("/register")
    }
    const [user, setUser] = useState({
        name: "",
        password: "",
    })

    const handleClick = (e) => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const login = () => {



        const { name, password } = user;
        if (name && password) {
            axios.post("http://localhost:5000/login", user).then(res=>{
                alert(res.data.message)
                setloginUser(res.data.doc)
                Navgit("/")

            })
        } else {
            alert("enter a valid input")
        }


    }

    return (<>
        <div className="login">
            <h1>login</h1>
            <input type="text" name="name" value={user.name} onChange={handleClick} placeholder="enter your text" />
            <input type="password" name="password" value={user.password} onChange={handleClick} placeholder="Enter your password" />
            <div className="button" onClick={login}>
                Login
            </div>

            <div>or</div>
            <div className="button" onClick={navreg}>Register</div>

        </div>
    </>)
}

export default Longin;