const express = require("express");
const cors = require("cors");
const {MongoClient, ObjectId} = require('mongodb');

require('dotenv').config();


const app = express();

app.use(express.json());
app.use(cors());

const uri="mongodb+srv://voltron:1billy2jimmy@cluster0.mfdgx3d.mongodb.net/?retryWrites=true&w=majority";
    
const client = new MongoClient(uri);


app.get('/', (req, res)=>{
    res.send("Please pick and action");
})

app.post('/create', (req, res)=>{

    
    console.log("This part workds");

    const inputObj ={
        name: req.body.name,
        summary: req.body.summary,
        bedrooms: req.body.bedrooms,
        bathrooms:req.body.bathrooms
    }

    main(inputObj).catch(console.error);

    /*********************** */
    console.log("This part ");
    
    /************************ */


    res.send("New Listing has been added");
})

app.get('/read', (req, res)=>{
    const result =  client.db("sample_airbnb").collection("listingsAndReviews").find({});

    res.send(result);
})

app.get('/update', (req, res)=>{
    res.send("Please pick and action");
})

/*

helpful link :

https://www.mongodb.com/languages/mern-stack-tutorial

*/

let dbConnection;
let db;

const PORT = process.env.PORT || 5000;

//const uri =process.env.ATLAS_URI; 

async function main(inputObj){
    //const uri =process.env.ATLAS_URI;
    
    const uri="mongodb+srv://voltron:1billy2jimmy@cluster0.mfdgx3d.mongodb.net/?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri, {useNewUrlParser: true,
        useUnifiedTopology: true,});

    try{
        await client.connect();

        selection();

        //await deleteListingByName(client, "Cozy house at Beyoğlu");

        //await updateListingByName(client, "Lovely Loft", {bedrooms:2, beds: 2});

        /*await findMinBedBathAndReviews(client, {
            minBeds:2,
            minBath:1,
            maxNumReviews:5
        })*/
        
        //await findOneListingByName(client, "Horto flat with small garden" )

        await createListing(client, inputObj);


    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

//main().catch(console.error);



async function deleteListingByName(client, nameOfListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne(
        {name: nameOfListing});
        
        console.log(result.deletedCount+" was/were deleted");
}

async function updateListingByName(client, nameOfListing, updatedListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne(
        {name: nameOfListing},
        {$set: updatedListing}
        );
        console.log(result.matchCount+" documents match query result");
        console.log(result.modifiedCount+" documents was/were updated");
}

async function findOneListingByName(client, nameOfListing){
   const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name: nameOfListing});

   if(result){
        console.log("Found a result with the name of "+nameOfListing);
        console.log("");
        console.log(result);
   }else{
        console.log("No results found for the name "+nameOfListing);
   }
}

async function findMinBedBathAndReviews(client, {
    minBed=0,
    minBath=0,
    maxNumReviews=Number.MAX_SAFE_INTEGER
}={}){
    const cursor = await client.db("sample_airbnb").collection("listingsAndReviews").find({
        bedrooms: {$gte: minBed},
        bathrooms: {$gte: minBath}
    }).sort({last_review: -1}).limit(maxNumReviews);

    const result = await cursor.toArray();

    if (result.length > 0) {
        console.log(`Found listing(s) with at least ${minBed} bedrooms and ${minBath} bathrooms:`);
        result.forEach((result, i) => {
            
            const date = new Date(result.last_review).toDateString();

            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   bedrooms: ${result.bedrooms}`);
            console.log(`   bathrooms: ${result.bathrooms}`);
            console.log(`   most recent review date: ${new Date(result.last_review).toDateString()}`);
            console.log(`   most recent review date: ${date}`);
        });
    } else {
        console.log(`No listings found with at least ${minBed} bedrooms and ${minBath} bathrooms`);
    }
}

async function createListing(client, newListing){
        const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    
}

app.listen(PORT, ()=>{
    console.log("please pick and action");
});