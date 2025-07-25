import axios from "axios";
import { getPostsFromLocalStorage, getDeletedPostIds } from "../localStorageManeg/localStorage.js";

export async function fetchPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const apiPosts = response.data;

    const storedPosts = getPostsFromLocalStorage();
    const deletedIds = getDeletedPostIds();

    const mergedPosts = [...storedPosts];

    for (const post of apiPosts) {
      if (
        !storedPosts.find((p) => p.id === post.id) &&
        !deletedIds.includes(post.id)
      ) {
        mergedPosts.push(post);
      }
    }

    return mergedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    const storedPosts = getPostsFromLocalStorage();
    const deletedIds = getDeletedPostIds();
    return storedPosts.filter((post) => !deletedIds.includes(post.id));
  }
}

export async function fetchPostDetails(id) {
  try {
    const deletedIds = getDeletedPostIds();
    if (deletedIds.includes(id)) {
      return { post: null, comments: [] };
    }

    const storedPosts = getPostsFromLocalStorage();
    const localPost = storedPosts.find((p) => p.id === id);
    if (localPost) {
      return { post: localPost, comments: [] };
    }

    const resPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = resPost.data;

    const resComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const comments = resComments.data;

    return { post, comments };
  } catch (error) {
    console.error("Error fetching post details:", error);
    return { post: {}, comments: [] };
  }
}