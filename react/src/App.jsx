import {Routes, Route} from "react-router-dom";

import './App.css';
import Navbar from "./components/navigation/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Register from "./components/authentication/register/Register.jsx";
import LogIn from "./components/authentication/login/LogIn.jsx";
import AiChat from "./components/ai/AiChat.jsx";
import About from "./components/about/About.jsx";


function App() {
    return (
       <>
           <Navbar/>
           <div>
               <Routes>
                   <Route path={"/about"} exact component={<About/>}/>
                   <Route path={'/'} element={<Home/>}/>
                   <Route path={'/register'} element={<Register/>}/>
                   <Route path={'/signIn'} element={<LogIn/>}/>
                   <Route path={'/aiChat'} element={<AiChat/>}/>
               </Routes>
           </div>
       </>
    );
}

export default App;
