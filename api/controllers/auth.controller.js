import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req,res, next)=>{

    // Destructuring
    const {username, email, password} = req.body;
    // hash code here
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create a  new User
    const newUser = new User({username, email, password: hashedPassword});
    // saving it
    try {
   await newUser.save();
   res.status(201).json('User created successfully');
    } catch (error) {
        next(error);
    }


};

// Create a function here to handle sign in
export const signin = async (req, res,  next) =>{
    // Getting data(email and username from the client (request.body))
    const {email, password} = req.body;

    // Incase of errors -- error handling
    try {
        // Checking email and password (if they exist in the database)
        // Checking email
        const validUser = await User.findOne({email});
        // Returning an error if user does not exist
        if(!validUser) return next(errorHandler(404, 'User not Found!'));
        // If User exist, we check and confirm password
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        // verify password
        if(!validPassword) return next(errorHandler(401, 'Wrong Credentials'));

        // Not Showing the password hashed
        const  {password:pass, ...rest} = validUser._doc;

        // Creating token here
        const token =  jwt.sign({id : validUser.id}, process.env.JWT_SECRET);
        // cookie
        res.cookie('access_token', token, {httpOnly : true} ).status(200).json(rest);

    } catch (error) {
        next(error);
    }

}