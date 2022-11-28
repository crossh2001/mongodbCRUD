import REACT from "react";
import {useState} from "react";


export default function Create() {
    const [form, setForm] = useState({
      name: "",
      position: "",
      level: "",
    });

    return(<>
        <h1>
            Creation Page Works!!!
        </h1>
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


        /*
        async function createListing(client, newListing){
        const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    
        }
        */ 