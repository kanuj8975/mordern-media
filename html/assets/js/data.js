// data.js - Handles data for NewsCentral (LocalStorage or dummy JSON)

function getBreakingNews() {
  return "Welcome to NewsCentral! Stay tuned for the latest updates.";
}

function getCategories() {
  return [
    {id: 'sports', name: 'Sports'},
    {id: 'tech', name: 'Tech'},
    {id: 'business', name: 'Business'},
    {id: 'politics', name: 'Politics'}
  ];
}

function getFeaturedArticles() {
  return [
    {id: 1, title: 'Tech Revolution 2025', summary: 'How AI is changing the world.', image: 'assets/images/tech.jpg'},
    {id: 2, title: 'Sports Highlights', summary: 'Top moments in sports this week.', image: 'assets/images/sports.jpg'},
    {id: 3, title: 'Business Insights', summary: 'Market trends and analysis.', image: 'assets/images/business.jpg'}
  ];
}

function getTrendingArticles() {
  return [
    {id: 4, title: 'Election Updates'},
    {id: 5, title: 'Stock Market Today'},
    {id: 6, title: 'Champions League Results'}
  ];
}

function setLanguage(lang) {
  localStorage.setItem('newscentral_lang', lang);
}

function getLanguage() {
  return localStorage.getItem('newscentral_lang') || 'en';
}
