import { getDeletedPostIds, saveDeletedPostIds, getPostsFromLocalStorage, savePostsToLocalStorage } from "../localStorageManeg/localStorage.js";
import { render } from "../App.js";

export function deletePost(id) {
  const deletedIds = getDeletedPostIds();
  if (!deletedIds.includes(id)) {
    deletedIds.push(id);
    saveDeletedPostIds(deletedIds);
  }

  const storedPosts = getPostsFromLocalStorage();
  const updatedPosts = storedPosts.filter((p) => p.id !== id);
  savePostsToLocalStorage(updatedPosts);

  render("posts");
}
