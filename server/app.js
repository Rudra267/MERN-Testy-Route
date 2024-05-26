require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn"); // Ensure this file establishes the database connection
const router = require("./routes/router");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userbyGoogle = require("./models/userGoogle");
const userdb = require("./models/userSchema");

const port = 8009;
const clientID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.json());
app.use(cors());
app.use(router);

app.use(session({
    secret: "YOUR SECRET KEY",
    resave: false,
    saveUninitialized: true
}));

// Setup passport for Google Auth
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await userbyGoogle.findOne({ googleId: profile.id });

            if (!user) {
                user = new userbyGoogle({
                    googleId: profile.id,
                    fullname: profile.displayName,
                    email: profile.emails[0].value,
                    google_ac_image: profile.photos[0].value
                });
                await user.save();
            }

            const ValidUserOne = await userdb.findOne({ email: profile.emails[0].value });
            if (!ValidUserOne) {
                const finalUser = new userdb({
                    googleId: profile.id,
                    facebookId: "",
                    fullname: profile.displayName,
                    email: profile.emails[0].value,
                    google_ac_image: profile.photos[0].value
                });
                await finalUser.save();
            }

            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Initial Google OAuth login
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "http://localhost:3000"
}));

app.get("/login/success", async (req, res) => {
    try {
        if (req.user) {
            const ValidUserOne = await userdb.findOne({ email: req.user.email });
            const token = await ValidUserOne.generateAuthtoken();
            return res.status(201).json({ status: 201, ValidUserOne, token: token });
        }

        const userbyfb = await userdb.findOne({ facebookid: profile.id });
        const token = await userbyfb.generateAuthtoken();
        return res.status(201).json({ status: 201, userbyfb, token: token });
    } catch (error) {
        res.status(400).json({ message: "Google Authentication error, try again..!" });
    }
});

app.listen(port, () => {
    console.log(`Server started at port no: ${port}`);
});
