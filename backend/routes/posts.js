const express = require("express");

const Post = require('../models/post');

const router = express.Router();

router.post("", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log('nz', post)
  post.save().then( createdPost => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    });
    });

});

router.get("", (req, res, next) => {
  Post.find()
    .then(documents => {
      console.log(documents);
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents
      });
    })
    .catch( (err) => {
      console.log("Posts Fetch Failed.")
    })
});

router.delete("/:id", (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result)
  })
  res.status(200).json({message:"post deleted"});
})

module.exports = router;
