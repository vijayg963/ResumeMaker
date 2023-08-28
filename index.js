import express from "express";
require("./config/db");
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import passport from 'passport';
import session from 'express-session';
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;




import pdfRouter from "./routes/pdfRoute";

// ALL THE MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// ALL ROUTES
app.use("/api", pdfRouter);




/*  Google AUTH  */
const GOOGLE_CLIENT_ID = '612183866595-s7hn8vamhbe8p3ngs3f33omi14idf91s.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log("This is access token", accessToken);
      console.log("This is refresh token", refreshToken);
      console.log("This is user profile", profile);
      return done(null, {});
  }
));

app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
   return res.send("loggedIn")
  });

app.get('/auth/logout', function(req, res) {
  req.logout(function(e){
    req.session.destroy(e);
      return res.send("logout");
  });
});


app.listen(5000, () => {
  console.log("Server is running");
});



