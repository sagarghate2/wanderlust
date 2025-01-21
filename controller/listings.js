const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });
const Listing = require("../models/listings");
const ExpressError = require("../utils/ExpressError.js");

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const { response } = require('express');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req,res)=>{
  const { category } = req.query;
  let allListing;
     if(category){
      allListing = await Listing.find({ 
        $or : [
          {category : new RegExp(category,'i')},
          {location : new RegExp(category,'i')}
        ]
      });
     }else{
     allListing = await Listing.find({});
     }
      res.render("listings/index",{ allListing });
};

module.exports.newListing = async (req,res)=>{
    res.render("listings/create");
};


module.exports.postListing = async (req,res,next)=>{  
     


   try{
      let response = await geocodingClient.forwardGeocode({
    query: req.body.location,
    limit: 1
  })
    .send();

    let {title : newTitle , description : newDesc,price : newPrice,location : newLocation,country : newCountry, category : newCategory} = req.body;
    const newuser = new Listing({
       title : newTitle,
       description : newDesc,
       price : newPrice,
       img : {
        url : req.file.path,
        filename : req.file.filename,
       },
       location : newLocation,
       country : newCountry,
       owner : req.user._id,
       geometry : response.body.features[0].geometry,
       category : newCategory,
    });
    if(!newuser.title){
      throw new ExpressError(404,"Title is missing");
    }
    if(!newuser.description){
     throw new ExpressError(404,"Description is missing");
    }
    if(!newuser.price){
     throw new ExpressError(404,"Price is misssing");
    }
    if(!newuser.country){
     throw new ExpressError(400,"Country is missing");
    }
    if(!newuser.location){
     throw new ExpressError(400,"Location is missing");
    }
    let newone = await newuser.save();
    req.flash("success","New List Added");
      res.redirect("/listings");
  }catch(er){
    console.log(er);
    return res.status(500).send("something error occured try again !");
  }
  
  };


  module.exports.showListing = async (req,res,next)=>{
    
    let {id} = req.params;
    const find = await Listing.findById(id).populate({path : "reviews", populate : "author",}).populate("owner");
    let response = await geocodingClient.forwardGeocode({
      query: find.location,
      limit: 1
    })
      .send();
      find.geometry = response.body.features[0].geometry;
    if(!find){
      req.flash("error","List was not Exits");
     return res.redirect("/listings");
    }
    res.render("listings/show",{find});
};

module.exports.editListing = async (req,res)=>{
    let {id} = req.params;
    const find = await Listing.findById(id);
    if(!find){
     req.flash("error","List was not Exits");
     return res.redirect("/listings");
   }
   let originalImageUrl = find.img.url;
   originalImageUrl = originalImageUrl.replace("/upload","/upload/h_250,w_250");
    return res.render("listings/edit",{find,originalImageUrl});
};


module.exports.editputListing = async(req,res,next)=>{
  
    if(!req.body.listing){
       throw new ExpressError(400,"something went wrong");
    }
     let {id} = req.params;

     const newList = await Listing.findByIdAndUpdate(id,{...req.body.listing});
     if(req.file){
      let url = req.file.path;
      let filename = req.file.filename;
        newList.img = {url,filename};
        await newList.save();
     }
     req.flash("success","List Updated");
      res.redirect(`/listings/${id}`);

};


module.exports.deleteListing = async(req,res)=>{
    let{id} = req.params;
    await Listing.findByIdAndDelete(id);
     req.flash("success","List Deleted");
     res.redirect("/listings");
};