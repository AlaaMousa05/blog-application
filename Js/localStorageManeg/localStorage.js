const LOCAL_STORAGE_KEY = "myPosts";
const DELETED_POSTS_KEY = "deletedPostIds";

function savePostsToLocalStorage(posts) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
}

function getPostsFromLocalStorage() {
  const posts = localStorage.getItem(LOCAL_STORAGE_KEY);
  return posts ? JSON.parse(posts) : [];
}

function saveDeletedPostIds(ids) {
  localStorage.setItem(DELETED_POSTS_KEY, JSON.stringify(ids));
}

function getDeletedPostIds() {
  const ids = localStorage.getItem(DELETED_POSTS_KEY);
  return ids ? JSON.parse(ids) : [];
}
export {
  savePostsToLocalStorage,
  getPostsFromLocalStorage,
  saveDeletedPostIds,
  getDeletedPostIds
};