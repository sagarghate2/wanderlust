const Listing = require("./models/listings.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("./listingschema.js");
const review = require("./models/review.js");

module.exports.loggedIn = (req,res,next) =>{
        req.session.redirectUrl = req.originalUrl;
      if(!req.isAuthenticated()){
        req.flash("error","you must be logged in to create listings");
        return res.redirect("/login");
      }
       next();
};

module.exports.saveRedirectUrl = ((req,res,next)=>{
           if(req.session.redirectUrl){
            res.locals.redirectUrl = req.session.redirectUrl;
           }
           next();
}); 


module.exports.isOwner = async(req,res,next)=>{
  let {id} = req.params;
   let check1 = await Listing.findById(id);
                      
          if(!check1.owner.equals(res.locals.currUser._id)){
          req.flash("error","You are not the Author of this Review");
          return res.redirect(`/listings/${id}`);
}
next();
}


module.exports.validateListing = (req,res,next)=>{
  let {error} =listingSchema.validate(req.body);
  if(error){
      let errMsg = error.details.map((el)=>el.message).join(",");
      throw new ExpressError(400, errMsg);
  }else{
      next();
  }
};


module.exports.validateReview = (req,res,next)=>{
  let {error} = reviewSchema.validate(req.body);
    if(error){
      let errMsg = error.details.map((el)=> el.message).join(",");
      throw new ExpressError(400,errMsg);
    }else{
      return next();
    }
}

module.exports.isReviewAuthor = async(req,res,next)=>{
  let {id,reviewId} = req.params;
   let check1 = await Review.findById(reviewId);
                      
          if(!check1.author._id.equals(res.locals.currUser._id)){
          req.flash("error","You are not the owner of this listing");
          return res.redirect(`/listings/${id}`);
}
next();
}