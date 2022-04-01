const { User } = require("../models");

const userData = [
  {
    username: "ilovejavascript",
    email: "ilovejs@aol.com",
    password: "javascript1234",
  },
  {
    username: "codingrocks",
    email: "codingrocks@aol.com",
    password: "codealldaylong",
  },
  {
    username: "bootstrapfan",
    email: "bootstrapforlife@aol.com",
    password: "woohoobootstrap",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
