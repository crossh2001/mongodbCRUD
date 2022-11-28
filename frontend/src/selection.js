import REACT from "react";
import {useState} from "react";
import CREATE from "./create";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Selection(){

    function createTest(){
        <></>
    }

    return(<>
        <h1>
            Please Press a Button
        </h1>
        <button id="create" onClick={createTest}> Create</button>
        <CREATE/>
    </>);
}

