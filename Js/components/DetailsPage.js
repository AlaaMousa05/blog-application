
import { handelSubmit } from "../hooks/HandelSubmit.js";
window.handelSubmit = handelSubmit;

export function DetailsPage(post, comments) {
  if (!post) {
    return `<h2>This post has been deleted or does not exist.</h2>`;
  }
  return `
    <section class="post-details">
      <button class="btn-back" onclick="render('posts')" style="margin-bottom:16px;">&#8592; Back to Posts page</button>
      <div class="post-section">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
        <button class="btn-delete" onclick="deletePost(${
          post.id
        })">Delete Post</button>
      </div>
      <div class="comments-section">
        <h3 class="comments-heading">Comments (${comments.length})</h3>
        <ul class="comments-list">
          ${comments
            .map(
              (comment) => `
            <li class="comment-item">
              <img src="../profile (8).png" class="comment-avatar"/>
              <div class="comment-content">
                <span class="comment-author">${
                  comment.name || comment.email.split("@")[0]
                }</span>
                <span class="comment-email">${comment.email}</span>
                <p class="comment-text">${comment.body}</p>
              </div>
            </li>`
            )
            .join("")}
        </ul>
      </div>
    </section>
  `;
}
