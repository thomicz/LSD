let articlesData = [];

fetch('articles/articles.json')
  .then(response => response.json())
  .then(data => {
    articlesData = data.articles;
  });

function openModal(articleId) {
  const article = articlesData.find(a => a.id === articleId);
  if (!article) return;

  document.getElementById("modal-title").innerText = article.title;
  document.getElementById("modal-text").innerText = article.text;

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// zavření kliknutím mimo box
window.onclick = function(e) {
  if (e.target.id === "modal") {
    closeModal();
  }
}
