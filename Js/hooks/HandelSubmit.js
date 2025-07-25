import { render } from "../App.js";
import { getPostsFromLocalStorage, savePostsToLocalStorage } from "../localStorageManeg/localStorage.js";
import axios from "axios";

export function handelSubmit() {
  const form = document.getElementById("addPostForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const titlePost = document.getElementById("postTitle").value.trim();
    const bodyPost = document.getElementById("postBody").value.trim();

    if (!titlePost || !bodyPost) {
      alert("Please fill in all fields.");
      return;
    }

    axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: titlePost,
      body: bodyPost,
      userId: Date.now(),
    })
    .then((response) => {
      const json = response.data;
      json.id = Date.now(); // Replace the API's fake ID with a local unique ID

      const storedPosts = getPostsFromLocalStorage();
      storedPosts.push(json);
      savePostsToLocalStorage(storedPosts);

      alert("Post created successfully!");
      form.reset();
      render("posts");
    })
    .catch((error) => {
      console.error("Error adding post:", error);
      alert("Something went wrong.");
    });
  });
}
