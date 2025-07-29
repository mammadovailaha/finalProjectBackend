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

// Export et
module.exports = {
  getAllBlogs,
  createBlog,
};
