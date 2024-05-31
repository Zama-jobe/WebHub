import express from "express";
import shortid from "shortid";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const postsFilePath = path.join(__dirname, 'posts.json');

// Helper function to read posts from the file
const readPostsFromFile = () => {
  const data = fs.readFileSync(postsFilePath, 'utf-8');
  return JSON.parse(data);
};

// Helper function to write posts to the file
const writePostsToFile = (posts) => {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
};

// Initialize posts from the file
let posts = readPostsFromFile();

// Create a new blog post
app.post("/api/posts", (req, res) => {
  const { title, content, image } = req.body;
  const newPost = {
    id: shortid.generate(),
    title,
    content,
    image
  };
  posts.push(newPost);
  writePostsToFile(posts);
  res.status(201).json(newPost);
});

// Get all blog posts
app.get("/api/posts", (req, res) => {
  res.status(200).json(posts);
});

// Get a single blog post by ID
app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const found = posts.find((post) => post.id === id); 
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ message: "Post does not exist" });
  }
});

// Update a blog post by ID 
// app.put("/api/posts/:id", (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;
//   const index = posts.findIndex((post) => post.id === id);
//   if (index !== -1) {
//     posts[index] = { ...posts[index], ...changes };
//     writePostsToFile(posts);
//     res.status(200).json(posts[index]);
//   } else {
//     res.status(404).json({ message: "Post not found" });
//   }
// });

// Delete a blog post by ID
app.delete("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    const deletedPost = posts.splice(index, 1);
    writePostsToFile(posts);
    res.status(200).json(deletedPost);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
