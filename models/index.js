const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignkey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignkey: "user_id",
});

User.hasMany(Comment, {
  foreignkey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignkey: "user_id",
});

Post.hasMany(Comment, {
  foreignkey: "post_id",
  onDelete: "cascade",
});

Comment.belongsTo(Post, {
  foreignkey: "post_id",
});

module.exports = { User, Post, Comment };

//PUT RELATIONSHIPS HERE

/* 
users can have many posts
posts belong to one user

users can have many comments
comments belong to one user

posts can have many comments
comments belong to one post

so all one to many/many to one?
no many to many
*/
