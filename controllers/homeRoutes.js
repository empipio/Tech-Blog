const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

//display all blog posts on homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        { model: User, attributes: ["username"], exclude: ["password"] },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      //do they need to be logged_in?
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//log user in
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  //this was login dunno whether needs changing back
  res.render("dashboard");
});

module.exports = router;
