import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  profilePic: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    maxLength: 200,
    default: "",
  },
  className: {
    type: String,
    default: ""
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;