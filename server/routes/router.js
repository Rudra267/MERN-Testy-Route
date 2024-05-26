const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpgenerate = require("otp-generator");
const twilio = require("twilio");
const nodemailer = require("nodemailer");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const userdb = require("../models/userSchema");
const otpSchema = require("../models/otpSchema");
const authenticate = require("../middleware/authenticate");

const upload = multer({ dest: 'uploads/' });
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// Twilio client
const twilioclient = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Initialize Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// User Registration
router.post("/register", async (req, res) => {
    const { fullname, email, mobilenumber, password, confirmpassword } = req.body;

    if (!fullname || !email || !password || !confirmpassword || !mobilenumber) {
        return res.status(422).json({ error: "Please fill all the details" });
    }

    try {
        const preuser = await userdb.findOne({ email: email });

        if (preuser) {
            return res.status(422).json({ message: "This Email is Already Exist", status: 422 });
        } else if (password !== confirmpassword) {
            return res.status(422).json({ error: "Password and Confirm Password do not match" });
        } else {
            const finalUser = new userdb({ fullname, email, password: await bcrypt.hash(password, 10), mobilenumber });
            const storeData = await finalUser.save();
            return res.status(201).json({ status: 201, storeData });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// User Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "fill all the details" });
    }

    try {
        const userValid = await userdb.findOne({ email: email });

        if (userValid) {
            const isMatch = await bcrypt.compare(password, userValid.password);

            if (!isMatch) {
                return res.status(422).json({ error: "invalid details" });
            } else {
                const token = await userValid.generateAuthtoken();
                res.cookie("usercookie", token, {
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                    httpOnly: true
                });

                return res.status(201).json({ status: 201, result: { userValid, token } });
            }
        } else {
            return res.status(401).json({ message: "Authentication Failed!" });
        }
    } catch (error) {
        return res.status(401).json(error);
    }
});

// Validate User
router.get("/validuser", authenticate, async (req, res) => {
    try {
        const ValidUserOne = await userdb.findOne({ _id: req.userId });
        return res.status(201).json({ status: 201, ValidUserOne });
    } catch (error) {
        return res.status(401).json({ status: 401, error });
    }
});

// Access User Data
router.get("/accessData", async (req, res) => {
    try {
        const token = req.cookies.usercookie;
        const data = jwt.verify(token, process.env.SECRET_KEY);
        const userValid = await userdb.findOne({ _id: data._id });

        if (!userValid) {
            return res.status(404).json({ message: "User not found" });
        } else {
            console.log(userValid);
            res.status(200).json(userValid);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// User Logout
router.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => curelem.token !== req.token);
        res.clearCookie("usercookie", { path: "/" });
        await req.rootUser.save();
        return res.status(201).json({ status: 201 });
    } catch (error) {
        return res.status(401).json({ status: 401, error });
    }
});

// Forgot Password - Email OTP
router.post('/email-otp-forgetpassword', async (req, res) => {
    const { useremail } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const otp = otpgenerate.generate(6, { upperCaseAlphabets: false, specialChars: false });
        const cDate = new Date();

        const mailOptions = {
            from: process.env.EMAIL,
            to: useremail,
            subject: "OTP Verification",
            html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2;color: #0000009f">
                <div style="margin:50px auto;width:70%;padding:100px 100px;border:2px solid #47A997;">
                  <div style="border-bottom:1px solid #eee">
                    <a href="https://www.theunpadh.com/" style="color: #47A997;text-decoration:none;font-weight:600">
                      <img width="100px" src="https://i.pinimg.com/280x280_RS/a4/aa/00/a4aa0059b78329d4ef14ba29358028d1.jpg">
                    </a>
                  </div>
                  <p style="font-size:1.1em">Hi,</p>
                  <p>You've requested to reset your password on Unpadh Learning Platform. Use the following OTP to verify your email and proceed with the password reset. The OTP is valid for 3 minutes.</p>
                  <h2 style="background: #47A997;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
                  <p>If you didn't request this OTP or if you have any concerns regarding your account security, please ignore this email or contact our support team immediately.</p>
                  <p style="font-size:0.9em;">Regards,<br />Unpadh</p>
                  <hr style="border:none;border-top:1px solid #eee" />
                  <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                    <p>Unpadh Inc</p>
                    <p>Hn-258 2Nd Floor Dhaka Gaon, Landmark Shiv Mandir, Newdelhi North West</p>
                    <p>Delhi, India, 110009</p>
                  </div>
                </div>
            </div>`
        };

        await res.cookie('newemail', useremail, {
            expires: new Date(Date.now() + 2 * 60 * 1000),
            httpOnly: true
        });

        transporter.sendMail(mailOptions, async function (error, info) {
            if (error) {
                return res.status(401).json({ error: "something is wrong" });
            } else {
                await otpSchema.findOneAndUpdate(
                    { email: useremail },
                    { $set: { emailverifiedotp: otp, otpExpiration: new Date(cDate.getTime()) } },
                    { upsert: true, new: true, setDefaultsOnInsert: true }
                );
                return res.status(201).json({ message: "OTP successfully sent", status: 201 });
            }
        });

    } catch (error) {
        return res.status(401).json({ error });
    }
});

// Remaining routes implementation follows the same pattern

module.exports = router;
