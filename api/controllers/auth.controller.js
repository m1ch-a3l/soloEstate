import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

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