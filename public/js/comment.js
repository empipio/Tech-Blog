/* 
click on post
taken to new page
given option of form to fill out if want to leave a comment

get post by id
render to new handlebars page
form on handlebars page to leave comment

front end js to link it up
*/

const postComment = async () => {
  const response = await fetch("api/comments", {
    method: "POST",
    body: JSON.stringify(commentText),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/comment");
  }
};

document.querySelector("#add-comment").addEventListener("click", postComment);
