import { goToDetails } from "../hooks/GoToDetails.js";
 import { deletePost } from "../hooks/DeletePost.js";
 
window.goToDetails = goToDetails;
window.deletePost = deletePost;
export function PostItem(post) {
  return `
    <article class="post-card">
      <div class="post-header">
        <h3 class="post-title">${post.title}</h3>
        <span class="post-id">#${post.id}</span>
      </div>
      <div class="post-body">
        <p>${post.body}</p>
      </div>
      <div class="post-footer">
        <button class="btn-details" onclick="goToDetails(${post.id})">View Details</button>
        <button class="btn-delete" onclick="deletePost(${post.id})">Delete</button>
      </div>
    </article>
  `;
}