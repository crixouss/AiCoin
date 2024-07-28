import {Routes, Route} from "react-router-dom";

import './App.css';
import Navbar from "./components/navigation/Navbar.jsx";
import Home from "./components/home/Home.jsx";


function App() {
    return (
       <>
           <Navbar/>
           <div>
               <Routes>
                   <Route path={'/'} element={<Home/>}/>
               </Routes>
           </div>
       </>
    );
}

export default App;
