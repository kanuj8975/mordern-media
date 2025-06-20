// main.js - Handles homepage interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Load breaking news
  const breakingNews = getBreakingNews();
  document.getElementById('breaking-news-text').textContent = breakingNews;

  // Load categories
  const categories = getCategories();
  const categoryList = document.getElementById('category-list');
  categories.forEach(cat => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="category.html?cat=${cat.id}">${cat.name}</a>`;
    categoryList.appendChild(li);
  });

  // Load featured articles
  const articles = getFeaturedArticles();
  const featuredSection = document.getElementById('featured-articles');
  articles.forEach(article => {
    const div = document.createElement('div');
    div.className = 'article-card';
    div.innerHTML = `
      <img src="${article.image}" alt="${article.title}" style="width:100%;height:160px;object-fit:cover;">
      <h3>${article.title}</h3>
      <p>${article.summary}</p>
      <a href="article.html?id=${article.id}">Read More</a>
    `;
    featuredSection.appendChild(div);
  });

  // Load trending news
  const trending = getTrendingArticles();
  const trendingSection = document.getElementById('trending-news');
  trending.forEach(article => {
    const div = document.createElement('div');
    div.className = 'trending-item';
    div.innerHTML = `<a href="article.html?id=${article.id}">${article.title}</a>`;
    trendingSection.appendChild(div);
  });

  // Language switcher
  document.getElementById('language-select').addEventListener('change', function(e) {
    setLanguage(e.target.value);
    location.reload();
  });

  // Search
  document.getElementById('search-btn').addEventListener('click', function() {
    const q = document.getElementById('search-input').value;
    if(q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
  });
});
