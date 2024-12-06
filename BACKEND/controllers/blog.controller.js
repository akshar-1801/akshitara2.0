const Blog = require("../models/blog.model");

const getAllBlogs = async (req, res) => {
  try {
    const blogList = await Blog.find().select("-content").sort({ date: -1 }); // -1 for descending order
    res.status(200).json(blogList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBlogById = async (req, res) => {
  const { blog_id } = req.params;
  try {
    const blog = await Blog.findOne({ _id: blog_id });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllBlogs, getBlogById };
