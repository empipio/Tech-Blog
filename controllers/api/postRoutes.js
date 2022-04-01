const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

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
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update(
      {
        blog_title: req.body.blog_title,
        blog_text: req.body.blog_text,
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

//only want to be able to delete own posts, think this may allow any to be deleted as long as logged in
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

/* 
BLOG POST ROUTES

new blog = POST

delete own posts = find by id then DELETE
*/

module.exports = router;
