/* 
click on post
taken to new page
given option of form to fill out if want to leave a comment

get post by id
render to new handlebars page
form on handlebars page to leave comment

front end js to link it up
*/

const res = require("express/lib/response");

const viewPost = async () => {
  const response = await fetch("api/posts/:id", {
    method: "GET",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    res.render("comment");
  }
};
