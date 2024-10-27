import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password || name === '' || username === '' || email === '' || password === '') {
    next(errorHandler(400, "All fields are required"));
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    name,
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json("Signup Successfull ");
  } catch (error) {
    next(error)
  }
}

export const signin = async (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Invalid password"));
    }
    const token = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET_KEY
    );
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      }).json(rest);
  } catch (error) {
    next(error)
  }
}