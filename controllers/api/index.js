const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
//may or may not need commentRoutes... although to add a new one probably will actually
router.use("/comments", commentRoutes);

module.exports = router;
