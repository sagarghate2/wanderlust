

const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema} = require("../listingschema.js");
const Listing = require("../models/listings.js");
const {loggedIn,isOwner} = require("../middleware.js");
const {validateListing} = require("../middleware.js");
const ListingController = require("../controller/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });
const ExpressError = require("../utils/ExpressError.js")
// router.get("/",(req,res)=>{
//     res.redirect("/listings")
// });


router.route("/")
     .get(wrapAsync(ListingController.index))                                                       //Index Route
    .post(loggedIn,upload.single("img"),wrapAsync(ListingController.postListing));    
   //post Route

//Create New Route
router.get("/new",loggedIn,wrapAsync(ListingController.newListing));



router.route("/:id")
    .get(wrapAsync(ListingController.showListing))                                              //show Route
    .put(loggedIn,isOwner,upload.single("img"),wrapAsync(ListingController.editputListing))          // edit Route
    .delete(loggedIn,isOwner,wrapAsync(ListingController.deleteListing));                       // delete Route



router.get("/:id/edit",loggedIn,isOwner,wrapAsync(ListingController.editListing));


module.exports = router;