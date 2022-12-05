import REACT from "react";
import {useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

/*
const express = require("express");
const cors = require("cors");
const {MongoClient, ObjectId} = require('mongodb');


require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
*/

export default function Create() {
    const [form, setForm] = useState({
      name: "",
      position: "",
      level: "",
    });

    


const uri="mongodb+srv://voltron:1billy2jimmy@cluster0.mfdgx3d.mongodb.net/?retryWrites=true&w=majority";
    
//const client = new MongoClient(uri);
/********************************from the 1st exercise********************************* */
try{
    //await client.connect();

    //await findOneListingByName(client, "Horto flat with small garden" )

    /*await createListing(client,
        {
            name: "Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1
        }
    );*/

}catch(e){
    console.error(e);
}finally{
    //await client.close();
}
/****************************from the 1st exercise****************** */
/******test function***** */
function updateForm(){

}
/******test function***** */

    return(<>
        <h1>
            Creation Page Works!!!
        </h1>

  {/*      <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Position</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Junior</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Senior</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>*/}

        <Link to={`/`}>
            <button id="home"> Home</button>
            </Link>
    </>);
}

/*await createListing(client,
            {
                name: "cool little house",
                summary: "A charming loft in Paris",
                bedrooms: 2,
                bathrooms: 1
            }
        );*/


        
        async function createListing(client, newListing){
        const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    
        }         