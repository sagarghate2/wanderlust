const Listing = require("../models/listings");
const Review = require("../models/review");

module.exports.postReview = async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    
          if(!newReview.comment){
       throw new ExpressError(400,"feedback is required");
      }
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
     req.flash("success","Review Added");
   return res.redirect(`/listings/${listing._id}`);
};


module.exports.deleteReview = async(req,res)=>{

 let { id,reviewId } = req.params;
 await Listing.findByIdAndUpdate(id,{$pull : {reviews : {_id: reviewId}}});
//   await Review.findById(reviewId);
await Review.findByIdAndDelete(reviewId);
 req.flash("success","Review Deleted");
 let check = res.locals.redirectUrl || `/listings/${id}`;
          return  res.redirect(check);
// return res.redirect(`/listings/${id}`);

};