const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controller/Users.js");


router.route("/signup")
          .get(userController.renderSignup)                                             //signup route
          .post(wrapAsync((userController.postSignup)));                                //signup post route


router.route("/login")  
         .get(userController.renderLogin)
         .post(saveRedirectUrl,passport.authenticate("local", {failureRedirect : "/login", failureFlash : true}), userController.postLogin)

         
//logout
router.get("/logout",userController.logout);

module.exports = router;