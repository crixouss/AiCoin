import {Routes, Route} from "react-router-dom";

import './App.css';
import Navbar from "./components/navigation/Navbar.jsx";
import Home from "./components/home/Home.jsx";


function App() {
    return (
       <div>
           <Navbar/>
           <div>
               <Routes>
                   <Route path={'/'} element={<Home/>}/>
               </Routes>
           </div>
       </div>
    );
}

export default App;
