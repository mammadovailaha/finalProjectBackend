const express = require("express");
const router = express.Router();

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById
} = require("../controllers/blogsController");

router.get("/", getAllBlogs);
router.post("/", createBlog);
router.get("/:id", getBlogById);  
router.put("/:id", updateBlogById);
router.delete("/:id", deleteBlogById);

module.exports = router;
