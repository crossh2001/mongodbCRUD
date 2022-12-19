import REACT from "react";
import {useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";


export default function Create() {
    const [form, setForm] = useState({
      name: "",
      summary: "",
      bedroom: "",
      bathroom: "",
    });


 

//const client = new MongoClient(uri);
/********************************from the 1st exercise********************************* */
try{
 

}catch(e){
    console.error(e);
}finally{
    //await client.close();
}
/****************************from the 1st exercise****************** */
/******test function***** */


const navigate = useNavigate();

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
  navigate("/");
  console.log(form);
}
/******test function***** */

    return(<>
        <h1>
            Creation Page Works!!!
        </h1>

        <form onSubmit={onSubmit}>
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
           onChange={(e) => updateForm({ bathroom: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="bedroom">Bedroom</label>
         <input
           type="textbox"
           className="form-control"
           id="bedroom"
           value={form.bedroom}
           onChange={(e) => updateForm({ bedroom: e.target.value })}
         />
       </div>

       <div className="form-group">
         <input
           type="submit"
           value="Create"
           className="btn btn-primary"
         />
       </div>
     </form>

        <Link to={`/`}>
            <button id="home"> Home</button>
            </Link>
    </>);
}



        
        async function createListing(client, newListing){
        const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    
        }         