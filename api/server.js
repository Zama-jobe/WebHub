// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // In-memory storage for blog posts
// let posts = [];

// // Routes
// app.get("/", (req, res) => {
//   res.send("Welcome to the blog API");
// });

// app.get("/api/posts", (req, res) => {
//   res.json(posts);
// });

// app.post("/api/posts", (req, res) => {
//   const { title, content, category } = req.body;
//   const newPost = {
//     id: posts.length + 1,
//     title,
//     content,
//     category,
//     createdAt: new Date(),
//   };
//   posts.push(newPost);
//   res.status(201).json(newPost);
// });

// app.put("/api/posts/:id", (req, res) => {
//   const { id } = req.params;
//   const { title, content, category } = req.body;
//   const index = posts.findIndex((post) => post.id === Number(id));
//   if (index !== -1) {
//     posts[index] = {
//       ...posts[index],
//       title,
//       content,
//       category,
//       updatedAt: new Date(),
//     };
//     res.json(posts[index]);
//   } else {
//     res.status(404).json({ message: "Post not found" });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
