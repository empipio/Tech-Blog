const { Post } = require("../models");

const postData = [
  {
    blogTitle: "What is handlebars?",
    blogText: "dunno but I can ride my bike without them",
    //date_created: "",
    userId: 1,
  },

  {
    blogTitle: "I met a really interesting spider today",
    blogText: "he was a web developer",
    //date_created: "",
    userId: 2,
  },

  {
    blogTitle: "Why did the programmer quit his job?",
    blogText: "Because he didn't get arrays",
    //date_created: "",
    userId: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
