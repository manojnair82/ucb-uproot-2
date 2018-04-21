const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user-model');
// const cors = require('cors');

// router.use((req,res,next) => {
//   res.header("Access-Control-Allow-Origin","*");
//   res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept, Authorization");
//   console.log("CORS workaround initiated 2");
//   // console.log(req);
//   // console.log(res);
//   if(req.method==='OPTIONS') {
//     res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,get,DELETE');
//     return res.status(211).json({});
//   } 
//   next();
// });

// router.use(cors())

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
    
}));



// callback route for google to redirect to
// hand control to passport to use code to grab profile info
// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//     // res.send(req.user);
//       // res.redirect('/profile');
//       res.render('profile');
  
// });


router.get('/google/redirect', passport.authenticate('google'),  (req, res) => {
    if(req.user.role === 'endUser'){
            // res.send("You reached callback1");
            console.log("testing3");
             res.redirect('http://localhost:3000/issues');

    	// res.render('home');
    } else {
    	res.send("You reached callback2");
    	res.send(req.user.role);
      console.log("testing4");
    	// res.render('profile');
    };
    
      res.redirect('/books');
      // res.send("You reached callback");

      // res.render('profile');  
});

router.get('/facebook', passport.authenticate('facebook',{failureRedirect: '/'}, { scope: 'public_profile' }));
router.get('/auth/facebook/redirect',
  passport.authenticate('facebook', { successRedirect: 'http://localhost:3000/issues',
                                      failureRedirect: '/' }));


module.exports = router;
