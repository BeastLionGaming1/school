import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { caption, hashtags, location } = req.body;

    const files = req.files; // multer gives this

    let media = [];

    if (files && files.length > 0) {
      for (const file of files) {
        const result = await uploadToCloudinary(file.buffer);

        media.push({
          type: file.mimetype.startsWith("video") ? "video" : "image",
          url: result.secure_url,
        });
      }
    }
    
    const post = await Post.create({
      author: req.user._id,
      caption,
      media,
      hashtags: hashtags ? JSON.parse(hashtags) : [],
      location,
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      status_code: 201,
      post,
    });
  }catch(error) {
    console.log("Error Creating Post:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
      status_code: 500,
    });
  }
}

export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      success: true,
      message: "All Posts Fetched",
      status_code: 200,
      count: posts.length,
      posts,
    });
    
    // const posts = await Post.find({ isDeleted: false })
    //   .populate("author", "name username avatar")
    //   .sort({ createdAt: -1 })
    //   .limit(20);

    // return res.status(200).json({
    //   success: true,
    //   message: "Got All Posts",
    //   status_code: 200,
    //   posts,
    // });
  } catch (error) {
    console.log("Error Fetching Posts:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
      status_code: 500,
    });
  }
}

export const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      success: true,
      message: "All Posts Fetched",
      count: posts.length,
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      status_code: 500,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    // only author can delete
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not allowed to delete this post",
        status_code: 403,
      });
    }

    post.isDeleted = true;
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      status_code: 200,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      status_code: 500,
    });
  }
};