import { PostItem } from "./PostItem.js";
export function PostsList(posts) {
  if (!posts || posts.length === 0) {
    return `<div class="no-posts">No posts available</div>`;
  }

  return `
    <section class="posts-container">
      <h2 class="posts-title" style="grid-column: 1 / -1; text-align:center; margin-bottom: 18px; color:#168e9e; font-size:2rem; font-weight:700;">All Posts</h2>
      ${posts.map((post) => PostItem(post)).join("")}
    </section>
  `;
}
