const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//ENDPOINT api/posts

//create a new blog post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

//update post
//@TODO: no frontend JS or html template for this
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update(
      {
        blogTitle: req.body.blogTitle,
        blogText: req.body.blogText,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(400).json(error);
  }
});

//delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "Blog post not found!" });
      return;
    }

    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
