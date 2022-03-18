import React from "react";
import "./Homepage.css"
//import { useNavigate } from "react-router-dom";

const Homepage=({setloginUser})=>{

    return(<>
    
    <div className="homepage">
    <h1>hello homepage</h1>
    <div className="button"onClick={()=>{setloginUser({})}}>logout</div>
    </div>
    
    </>)
}

export default Homepage;