const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listings.js");

main().then(async () => {
    console.log("connection successful");
    await initDB();
}).catch((err)=>{
    console.log(err);
});

async function main(){
   
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust"); 
}


const initDB = async () =>{
    await Listing.deleteMany({});

    // initdata.data = initdata.data.map((obj) => ({ ...obj, owner: "676a7177ac49899332505e8b" }));
   
    const result = await Listing.insertMany(initdata.data);
 
    console.log("stored the data");
};

initDB();