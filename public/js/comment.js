//post a new comment on existing blog post
const postComment = async (event) => {
  event.preventDefault();
  const commentText = document.querySelector("#comment-text").value.trim();
  var url = window.location.href;
  //this gets the post id from the end of the url by finding the last / in the url
  var postId = url.substring(url.lastIndexOf("/") + 1);
  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ postId, commentText }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    window.location.reload();
  }
};

document.querySelector("#add-comment").addEventListener("click", postComment);
