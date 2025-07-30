let blogs = [
  {
    id: 1,
    url: "https://i.pinimg.com/736x/b0/41/ab/b041abab5f12ce21f693f0bf2e1f895b.jpg",
    alt: "Article image 1",
    text: "Yay mövsümündə tədris üçün 5 faydalı tövsiyə",
  },
];

// Bütün bloqları gətir
const getAllBlogs = (req, res) => {
  res.json(blogs);
};

// Yeni bloq əlavə et
const createBlog = (req, res) => {
  const newBlog = {
    id: blogs.length + 1,
    ...req.body,
  };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
};

const getBlogById = (req, res) => {
  const blogId = parseInt(req.params.id, 10); 
  const blog = blogs.find(b => b.id === blogId);
  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  res.json(blog);
};
const updateBlogById = (req, res) => {
  const blogId = parseInt(req.params.id, 10);
  const blogIndex = blogs.findIndex(b => b.id === blogId);
  
  if (blogIndex === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }
  
  const updatedBlog = {
    ...blogs[blogIndex],
    ...req.body,
  };
  
  blogs[blogIndex] = updatedBlog;
  res.json(updatedBlog);
};

const deleteBlogById = (req, res) => {
  const blogId = parseInt(req.params.id, 10);
  const blogIndex = blogs.findIndex(b => b.id === blogId);  
  if (blogIndex === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }
  blogs.splice(blogIndex, 1);
  res.status(204).send();
};

// Export et
module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  updateBlogById,
  deleteBlogById
};
