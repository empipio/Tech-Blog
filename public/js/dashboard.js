const newFormHandler = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector("#blog-name").value.trim();
  const blogText = document.querySelector("#blog-text").value.trim();

  //adding a new blog post
  if (blogTitle && blogText) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ blogTitle, blogText }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create blog post");
    }
  }
};

//deleting an existing blog post
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete blog post");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".post-list")
  .addEventListener("click", delButtonHandler);
