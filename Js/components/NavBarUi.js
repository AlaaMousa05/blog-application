
export function NavBarUi(currentPage = "posts") {
  return `
    <header>
      <nav class="navbar">
        <div class="logo">AlaaBlog</div>
        <ul class="nav-links">
          <li>
            <a href="#" onclick="render('posts')" class="${
              currentPage === "posts" ? "active" : ""
            }">Posts</a>
          </li>
          <li>
            <button class="btn-addPost ${
              currentPage === "add" ? "active" : ""
            }" onclick="render('add')">Add Post</button>
          </li>
        </ul>
      </nav>
    </header>
  `;
}