import './App.css';
import Homepage from './component/homepage/Homepage';
import Longin from './component/login/Login';
import Resister from './component/resister/Resister';

import {
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';


function App() {
const [user,setloginUser]=useState({});

  return (
   <>
  
       <Routes>

      <Route path="/" element={ user && user._id ?<Homepage setloginUser={setloginUser} />:<Longin setloginUser={setloginUser}/>}></Route>
      <Route path="/login" element={<Longin setloginUser={setloginUser} />}></Route>
      <Route path="/register" element={<Resister />}></Route>
      
    </Routes>
    
   </>
  );
}

export default App;
