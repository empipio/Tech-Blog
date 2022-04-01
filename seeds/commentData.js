const { Comment } = require("../models");

const commentData = [
  {
    commentText:
      "It's a templating engine. Not sure what bikes have to do with anything?",
    userId: 2,
    postId: 1,
  },
  {
    commentText: "hahahaha!",
    userId: 3,
    postId: 2,
  },
  {
    commentText: "*rolls eyes*",
    userId: 1,
    postId: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
