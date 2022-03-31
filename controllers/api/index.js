const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
//not sure will need commentRoutes as will be attached to post?
router.use("/comments", commentRoutes);

module.exports = router;
