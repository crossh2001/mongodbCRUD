import REACT from "react";
import {useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

//const express = require("express");
//const cors = require("cors");
//const {MongoClient, ObjectId} = require('mongodb');

/*
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
*/

export default function Create() {
    const [form, setForm] = useState({
      name: "",
      summary: "",
      bedroom: "",
      bathroom: "",
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


//const navigate = useNavigate();

// These methods will update the state properties.
function updateForm(value) {
  return setForm((prev) => {
    return { ...prev, ...value };
  });
}

// This function will handle the submission.
async function onSubmit(e) {
  e.preventDefault();

  // When a post request is sent to the create url, we'll add a new record to the database.
  const newPerson = { ...form };

  await fetch("http://localhost:5000/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ name: "", summary: "", bedroom: "", bathroom: ""});
  //navigate("/");
}
/******test function***** */

    return(<>
        <h1>
            Creation Page Works!!!
        </h1>

        <form onSubmit={createListing}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="textbox"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="summary">summary</label>
         <input
           type="textbox"
           className="form-control"
           id="summary"
           value={form.summary}
           onChange={(e) => updateForm({ summary: e.target.value })}
         />
       </div>
       <div className="form-group">
         
         <div className="form-check form-check-inline">
           </div>
         <div className="form-check form-check-inline">
             </div>
       </div>
       <div className="form-group">
         <label htmlFor="position">Bathrooms</label>
         <input
           type="textbox"
           className="form-control"
           id="bathroom"
           value={form.bathroom}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="bedroom">Bedroom</label>
         <input
           type="textbox"
           className="form-control"
           id="bedroom"
           value={form.bedroom}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>

       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>

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