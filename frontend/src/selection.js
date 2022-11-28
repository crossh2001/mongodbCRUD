import REACT from "react";
import {useState} from "react";
import CREATE from "./create";

export default function Selection(){

    function createTest(){
        alert("creation page works");
    }

    return(<>
        <h1>
            Please Press a Button
        </h1>
        <button id="create" onClick={createTest}> Create</button>
    </>);
}

