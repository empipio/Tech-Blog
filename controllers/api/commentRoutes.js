const router = require("express").Router();
const { Comment, Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

//api/comments

//get all comments
router.get("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [{ model: Post }, { model: User, exclude: ["password"] }],
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", (req, res) => {
  try {
    const commentData = Comment.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Post }, { model: User, exclude: ["password"] }],
    });
    const comment = commentData.map((comment) => comment.get({ plain: true }));
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    const { post_id, comment_text } = req.body;
    if (!user_id || !post_id || !content) {
      res.json({ message: "an error occurred!" });
    }
    const newComment = await Comment.create({
      comment_text,
      //post_id,
      //user_id,
    });
    res.status(200).json(newComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
