import express from "express";
import Post from "./../Models/Posts.js";

// use express router
const router = express.Router();

// index
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ error: err });
  }
});

// show
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ error: err });
  }
});

// store
router.post("/posts", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ error: err });
  }
});

// update
router.patch("/posts/:id", async (req, res) => {
  try {
    const updatedPost = Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ error: err });
  }
});

// destroy
router.delete("/posts/:id", async (req, res) => {
  try {
    const removedPost = Post.remove({ _id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    res.json({ error: err });
  }
});

export default router;
