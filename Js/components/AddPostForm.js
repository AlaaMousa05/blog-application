

export function AddPostForm() {
  return `
    <section class="add-post-container">
      <h2 class="add-post-title">Create New Post</h2>
      <form id="addPostForm">
        <div class="form-group">
          <label for="postTitle" class="form-label">Title</label>
          <input 
            type="text" 
            id="postTitle" 
            class="form-input" 
            placeholder="Enter post title"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="postBody" class="form-label">Content</label>
          <textarea 
            id="postBody" 
            class="form-input form-textarea" 
            placeholder="Write your post content here..."
            required
          ></textarea>
        </div>
        
        <button type="submit" class="btn-submit">Publish Post</button>
      </form>
    </section>
  `;
}