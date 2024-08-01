import {Routes, Route} from "react-router-dom";

import './App.css';
import Navbar from "./components/navigation/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Register from "./components/authentication/register/Register.jsx";
import LogIn from "./components/authentication/login/LogIn.jsx";


function App() {
    return (
       <>
           <Navbar/>
           <div>
               <Routes>
                   <Route path={'/'} element={<Home/>}/>
                   <Route path={'/register'} element={<Register/>}/>
                   <Route path={'/signIn'} element={<LogIn/>}/>
               </Routes>
           </div>
       </>
    );
}

export default App;
