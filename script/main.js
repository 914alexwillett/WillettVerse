async function loadPosts() {
  const res = await fetch("content/posts/postsList.json");
  const posts = await res.json();

  // newest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const container = document.getElementById("content");
  console.log(container);

  posts.forEach(post => {
    const tile = document.createElement("a");
    tile.href = post.url;
    tile.className = "post-tile";

    tile.innerHTML = `
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <p>${post.summary}</p>
    `;

    container.appendChild(tile);
  });
}

loadPosts();