const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

/* 
COMMENT ROUTES

add a comment = find post by id then POST there


*/

router.post("/", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    const { post_id, comment_text } = req.body;
    if (!user_id || !post_id || !content) {
      res.json({ message: "an error occurred!" });
    }
    const newComment = await Comment.create({
      comment_text,
      post_id,
      user_id,
    });
    res.status(200).json(newComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
