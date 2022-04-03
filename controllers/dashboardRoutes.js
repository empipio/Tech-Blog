const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

//click on a blog post when logged in to read comments as well as post
router.get("/posts/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["commentText"],
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render("comment", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//view all own posts on dashboard once logged in
// Use withAuth middleware to prevent access to route if not logged in
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    return res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
