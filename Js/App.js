import { NavBarUi } from "./components/NavBarUi.js";
import { PostsList } from "./Components/PostsList.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { AddPostForm } from "./components/AddPostForm.js";
import { fetchPosts,fetchPostDetails } from "./services/FetchPosts.js";
import { handelSubmit } from "./hooks/HandelSubmit.js";

export async function render(page = "posts", id = null) {
  const root = document.querySelector(".root");
  root.innerHTML = NavBarUi(page);

  const contentDiv = document.createElement("div");
  contentDiv.id = "content";
  root.appendChild(contentDiv);

  const content = document.querySelector("#content");

  switch (page) {
    case "posts":
      const posts = await fetchPosts();
      content.innerHTML = PostsList(posts);
      break;

    case "details":
      const { post, comments } = await fetchPostDetails(id);
      content.innerHTML = DetailsPage(post, comments);
      break;

    case "add":
      content.innerHTML = AddPostForm();
      handelSubmit();
      break;

    default:
      content.innerHTML = "<h1>Page Not Found</h1>";
  }
}
function fun(){
  console.log("alaa")
}

window.render = render;
document.addEventListener("DOMContentLoaded", () => {
  render("posts");
});
