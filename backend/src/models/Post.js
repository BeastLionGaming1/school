import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  caption: {
    type: String,
    trim: true,
    maxlength: 500,
    default: "",
  },
  media: [
    {
      type: {
        type: String,
        enum: ["image", "video"],
        required: true,
      },
      url: {
          type: String,
          required: true,
      },
    },
  ],
  likesCount: {
      type: Number,
      default: 0,
  },
  commentsCount: {
      type: Number,
      default: 0,
  },
  hashtags: {
    type: [String],
    default: [],
    index: true,
  },
  mentions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  visibility: {
      type: String,
      enum: ["public", "friends", "private"],
      default: "public",
  },
  isDeleted: {
      type: Boolean,
      default: false,
    },
}, { timestamps: true });

postSchema.index({ createdAt: -1 });

const Post = mongoose.model("Post", postSchema);

export default Post;