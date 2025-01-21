const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    img : {
       filename : String,
       url : String,
    },
    price : {
        type : Number,
        required : true,
    },
    location : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true,
    },
    reviews : [
        {
        type : Schema.Types.ObjectId,
        ref : "Review",
        },
    ],
    owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        },
  geometry: {
     type: {
           type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
            },
       coordinates: {
        type: [Number],
        required: true
            }
        }, 

        category: {
            type: String,
            required: true,
            enum: [
              'Trending', 'Beach', 'Rooms', 'iconicCities', 'Mountain',
              'Castles', 'Pools', 'Camping', 'Farms', 'Arctic', 'Dome', 'Boats',
            ],
          },       
});



const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;
