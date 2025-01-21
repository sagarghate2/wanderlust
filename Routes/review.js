const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listings.js");
const Review = require("../models/review.js");
const {reviewSchema} = require("../listingschema.js");
const {loggedIn} = require("../middleware.js");
const {validateReview, isReviewAuthor,saveRedirectUrl} = require("../middleware.js");
const ReviewController = require("../controller/reviews.js");

//post Route
router.post("/",loggedIn,wrapAsync(ReviewController.postReview));

//delete Route
router.delete("/:reviewId",loggedIn,isReviewAuthor,wrapAsync(ReviewController.deleteReview));


module.exports = router;