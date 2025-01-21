const User = require("../models/user");

module.exports.renderSignup = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.postSignup = async(req,res,next)=>{
      try{
      let{email,password,username} = req.body;
      const newUser = new User({email,username});
      const registerUser = await User.register(newUser,password);
      req.login(registerUser,(err)=>{
            if(err){
                  next(err);
            }
            req.flash("success","Welcome to Wanderlust");
            res.redirect("/listings");
      });
      
      } catch(er){
            req.flash("error",er.message);
            res.redirect("/signup");
      }
};


module.exports.renderLogin = (req,res)=>{
    res.render("users/login.ejs");
};


module.exports.postLogin = (req,res) =>{
    req.flash("success","Welcome to wanderlust!  you are logged in !");
    let check = res.locals.redirectUrl || "/listings";
    res.redirect(check);
};

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
        return next(err);
    }
    req.flash("success","logged out");
    res.redirect("/listings");
});
};