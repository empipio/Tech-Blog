const router = require("express").Router();
const { Comment, Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

//ENDPOINT api/comments

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

//get a single comment by its ID
router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findOne({
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

//create a new comment for an existing post
router.post("/", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    const { postId, commentText } = req.body;
    if (!userId || !postId || !commentText) {
      res.json({ message: "an error occurred!" });
    }
    const newComment = await Comment.create({
      commentText,
      postId: parseInt(postId),
      userId: parseInt(userId),
    });

    res.status(200).json(newComment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
