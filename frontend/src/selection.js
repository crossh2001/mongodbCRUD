import REACT from "react";
import {useState} from "react";
import SELECTION from "./selection";
import READ from "./read";
import CREATE from "./create";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Selection(){

    function createTest(){
        <></>
    }

    return(<>

        <h1>
            Please Press a Button
        </h1>
        {/*<Routes>
            <Route path="./create" element={<CREATE/>}>
                    CREATE
                </Route>
                
            <Link to={`./create`}>
            <button id="create" onClick={createTest}> Create</button>
            </Link>
        </Routes>*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 25 + '%'}} src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"></img>
       <Link to={`./create`}>
            <button id="create" onClick={createTest}> Create link</button>
            </Link>
            <Link to={`./read`}>
            <button id="read" onClick={createTest}>Read link</button>
            </Link>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
        Create
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="./create">
               Create Record
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
        
    </>);
}

