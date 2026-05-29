import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const signup = async (req, res) => {
  try {
    const { name, username, email, password, className } = req.body;

    if (!name || !username || !email || !password || !className ) {
      res.status(400).json({
        success: false,
        message: "All Fields are required!",
        status_code: 400,
      });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists!",
        status_code: 400,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      className,
    });

    const token = jwt.sign(
      { userId: user._id },
      ENV.JWT_SECRET,
      { expiresIn: ENV.JWT_EXPIRES_IN }
    );

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      status_code: 201,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic,
        bio: user.bio,
        className: user.className,
      }
    });
  } catch (error) {
    console.log("Error Creating User:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      status_code: 500,
    });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required!",
        status_code: 400,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
        status_code: 400,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
        status_code: 400,
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      ENV.JWT_SECRET,
      {
        expiresIn: "15d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Logged In Successfully!",
      status_code: 200,
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        profilePic: user.profilePic,
        bio: user.bio,
        className: user.className,
      },
    });
  } catch (error) {
    console.log("Error Logging in user:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      status_code: 500,
    });
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: "All Users Fetched",
      count: users.length,
      users,
    });
  } catch (error) {
    console.log("Error Getting Users:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      status_code: 500,
    });
  }
}

export const getMe = async (req, res) => {
  try {
    res.status(200).json({
      user: req.user,
    });
  } catch (error) {
    console.log("Get Me Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      status_code: 500,
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.params.id
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log("Get Profile Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      status_code: 500,
    });
  }
}