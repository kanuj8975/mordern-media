// admin.js - Handles admin panel interactivity and modular section rendering

// Dummy data for metrics and charts
const metrics = {
  articles: 120,
  categories: 5,
  languages: 3,
  users: 42
};
const articlesByLanguage = {
  labels: ['English', 'Hindi', 'Gujarati'],
  data: [50, 40, 30]
};
const articlesByCategory = {
  labels: ['Technology', 'Environment', 'Business', 'Sports'],
  data: [40, 20, 20, 20]
};
const recentPosts = [
  { title: 'Tech Innovation in 2025', date: '21 June 2025' },
  { title: 'Climate Change: The Next Decade', date: '20 June 2025' },
  { title: 'Business Trends to Watch', date: '19 June 2025' },
  { title: 'Sports Highlights: June', date: '18 June 2025' },
  { title: 'New Language Support Added', date: '17 June 2025' }
];

const dashboardHTML = `
  <section class="dashboard-grid">
    <div class="metric-card orange">
      <div class="icon"><i class="fas fa-book"></i></div>
      <div class="metric-value" id="total-articles">0</div>
      <div class="metric-label">Total Articles</div>
      <div class="metric-subtext">Number of published articles</div>
    </div>
    <div class="metric-card blue">
      <div class="icon"><i class="fas fa-folder"></i></div>
      <div class="metric-value" id="total-categories">0</div>
      <div class="metric-label">Categories</div>
      <div class="metric-subtext">Number of news categories</div>
    </div>
    <div class="metric-card green">
      <div class="icon"><i class="fas fa-globe"></i></div>
      <div class="metric-value" id="total-languages">0</div>
      <div class="metric-label">Languages</div>
      <div class="metric-subtext">Number of supported languages</div>
    </div>
    <div class="metric-card gray">
      <div class="icon"><i class="fas fa-users"></i></div>
      <div class="metric-value" id="total-users">0</div>
      <div class="metric-label">Registered Users</div>
      <div class="metric-subtext">Total registered users (dummy)</div>
    </div>
  </section>
  <section class="dashboard-charts">
    <div class="chart-card">
      <h3>Articles by Language</h3>
      <canvas id="langBarChart"></canvas>
    </div>
    <div class="chart-card">
      <h3>Articles by Category</h3>
      <canvas id="catPieChart"></canvas>
    </div>
  </section>
  <section class="recent-posts">
    <h3>Recent Posts</h3>
    <ul id="recent-posts-list"></ul>
  </section>
`;

const articlesHTML = `
  <section class="section-header"><h2><i class="fas fa-book"></i> Articles</h2></section>
  <div class="section-content">
    <p>List of articles will appear here. (Stub)</p>
    <ul class="stub-list">
      <li>Tech Innovation in 2025</li>
      <li>Climate Change: The Next Decade</li>
      <li>Business Trends to Watch</li>
      <li>Sports Highlights: June</li>
    </ul>
  </div>
`;

const categoriesHTML = `
  <section class="section-header"><h2><i class="fas fa-folder"></i> Categories</h2></section>
  <div class="section-content">
    <p>List of categories will appear here. (Stub)</p>
    <ul class="stub-list">
      <li>Technology</li>
      <li>Environment</li>
      <li>Business</li>
      <li>Sports</li>
    </ul>
  </div>
`;

const languagesHTML = `
  <section class="section-header"><h2><i class="fas fa-globe"></i> Languages</h2></section>
  <div class="section-content">
    <p>Supported languages. (Stub)</p>
    <ul class="stub-list">
      <li>English</li>
      <li>Hindi</li>
      <li>Gujarati</li>
    </ul>
  </div>
`;

const usersHTML = `
  <section class="section-header"><h2><i class="fas fa-users"></i> Users</h2></section>
  <div class="section-content">
    <p>Registered users. (Stub)</p>
    <ul class="stub-list">
      <li>admin (Admin)</li>
      <li>editor1 (Editor)</li>
      <li>user42 (User)</li>
    </ul>
  </div>
`;

const analyticsHTML = `
  <section class="section-header"><h2><i class="fas fa-chart-bar"></i> Analytics</h2></section>
  <div class="section-content">
    <p>Analytics and stats will appear here. (Stub)</p>
    <div class="chart-card" style="max-width:400px;margin:auto;">
      <canvas id="analyticsChart"></canvas>
    </div>
  </div>
`;

function renderDashboard() {
  document.querySelector('.admin-main').innerHTML = dashboardHTML;
  document.getElementById('total-articles').textContent = metrics.articles;
  document.getElementById('total-categories').textContent = metrics.categories;
  document.getElementById('total-languages').textContent = metrics.languages;
  document.getElementById('total-users').textContent = metrics.users;
  // Classic, smaller bar chart
  const langBar = document.getElementById('langBarChart');
  langBar.width = 280;
  langBar.height = 180;
  new Chart(langBar.getContext('2d'), {
    type: 'bar',
    data: {
      labels: articlesByLanguage.labels,
      datasets: [{
        label: 'Articles',
        data: articlesByLanguage.data,
        backgroundColor: ['#FF9800', '#2196F3', '#43A047'],
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.7
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
        title: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 12, family: 'Roboto, Arial' } }
        },
        y: {
          beginAtZero: true,
          grid: { color: '#eee' },
          ticks: { font: { size: 12, family: 'Roboto, Arial' } }
        }
      }
    });
  // Classic, smaller pie chart
  const catPie = document.getElementById('catPieChart');
  catPie.width = 220;
  catPie.height = 220;
  new Chart(catPie.getContext('2d'), {
    type: 'pie',
    data: {
      labels: articlesByCategory.labels,
      datasets: [{
        data: articlesByCategory.data,
        backgroundColor: ['#FF9800', '#2196F3', '#43A047', '#888'],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 12, family: 'Roboto, Arial' }, boxWidth: 14 }
        },
        tooltip: { enabled: true },
        title: { display: false }
      }
    }
  });
  const postsList = document.getElementById('recent-posts-list');
  recentPosts.forEach(post => {
    const li = document.createElement('li');
    li.textContent = `${post.title} (${post.date})`;
    postsList.appendChild(li);
  });
}

function renderArticles() {
  document.querySelector('.admin-main').innerHTML = `
    <form class="article-form" id="article-form" autocomplete="off">
      <section class="article-section">
        <h2><i class="fas fa-book"></i> Article Details</h2>
        <div class="form-group">
          <label for="article-title">Title <span class="required">*</span></label>
          <input type="text" id="article-title" name="title" placeholder="Enter article title" required />
          <div class="error-message" id="error-title"></div>
        </div>
        <div class="form-group">
          <label for="article-content">Content <span class="required">*</span></label>
          <div class="markdown-editor">
            <textarea id="article-content" name="content" placeholder="Write your article content here... (Supports Markdown)" required rows="8"></textarea>
            <div class="markdown-preview" id="markdown-preview"></div>
          </div>
          <div class="error-message" id="error-content"></div>
        </div>
      </section>
      <section class="article-section meta-settings">
        <h2><i class="fas fa-cog"></i> Metadata & Settings</h2>
        <div class="form-row">
          <div class="form-group">
            <label for="article-category">Category <span class="required">*</span></label>
            <select id="article-category" name="category" required>
              <option value="">Select category</option>
              <option value="Technology">Technology</option>
              <option value="Environment">Environment</option>
              <option value="Business">Business</option>
              <option value="Sports">Sports</option>
            </select>
            <div class="error-message" id="error-category"></div>
          </div>
          <div class="form-group">
            <label for="article-language">Language for Content</label>
            <select id="article-language" name="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujarati">Gujarati</option>
            </select>
            <div class="subtext">The title and content above will be saved for this language.</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="article-author">Author Name</label>
            <input type="text" id="article-author" name="author" value="Admin User" />
          </div>
          <div class="form-group">
            <label for="article-tags">Tags</label>
            <input type="text" id="article-tags" name="tags" placeholder="e.g., politics, news (comma-separated)" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="article-date">Publish Date</label>
            <input type="date" id="article-date" name="publishDate" value="${new Date().toISOString().slice(0,10)}" />
          </div>
        </div>
        <div class="form-row toggles-row">
          <div class="toggle-group">
            <label class="switch">
              <input type="checkbox" id="article-trending" name="trending" />
              <span class="slider"></span>
            </label>
            <span class="toggle-label">Trending Article</span>
            <div class="toggle-desc">Mark this article as trending.</div>
          </div>
          <div class="toggle-group">
            <label class="switch">
              <input type="checkbox" id="article-breaking" name="breaking" />
              <span class="slider"></span>
            </label>
            <span class="toggle-label">Breaking News</span>
            <div class="toggle-desc">Mark this article as breaking news.</div>
          </div>
        </div>
      </section>
      <section class="article-section image-section">
        <h2><i class="fas fa-image"></i> Featured Image</h2>
        <div class="image-upload" id="image-upload">
          <input type="file" id="featured-image" name="featuredImage" accept="image/png, image/jpeg, image/gif" style="display:none;" />
          <div class="image-dropzone" id="image-dropzone">
            <i class="fas fa-upload"></i>
            <span id="image-dropzone-text">Drag & drop or click to upload (PNG, JPG, GIF, max 10MB)</span>
          </div>
          <div class="image-preview" id="image-preview">No image selected.</div>
          <div class="error-message" id="error-image"></div>
        </div>
      </section>
      <div class="form-actions">
        <button type="submit" class="publish-btn"><i class="fas fa-paper-plane"></i> Publish Article</button>
      </div>
    </form>
  `;

  // --- JS logic for markdown preview, image upload, and validation ---
  // Markdown live preview
  const textarea = document.getElementById('article-content');
  const preview = document.getElementById('markdown-preview');
  textarea.addEventListener('input', function() {
    preview.innerHTML = marked.parse(textarea.value || '');
  });

  // Image upload logic
  const dropzone = document.getElementById('image-dropzone');
  const fileInput = document.getElementById('featured-image');
  const previewBox = document.getElementById('image-preview');
  dropzone.addEventListener('click', () => fileInput.click());
  dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.classList.add('dragover'); });
  dropzone.addEventListener('dragleave', e => { e.preventDefault(); dropzone.classList.remove('dragover'); });
  dropzone.addEventListener('drop', e => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer.files.length) fileInput.files = e.dataTransfer.files;
    handleImageChange();
  });
  fileInput.addEventListener('change', handleImageChange);
  function handleImageChange() {
    const file = fileInput.files[0];
    if (!file) { previewBox.textContent = 'No image selected.'; return; }
    if (!['image/png','image/jpeg','image/gif'].includes(file.type) || file.size > 10*1024*1024) {
      previewBox.textContent = 'Invalid file. Only PNG, JPG, GIF up to 10MB.';
      fileInput.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      previewBox.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width:180px;max-height:120px;border-radius:8px;box-shadow:0 1px 6px #0002;">`;
    };
    reader.readAsDataURL(file);
  }

  // Form validation and submit
  document.getElementById('article-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    // Title
    const title = document.getElementById('article-title').value.trim();
    if (!title) { valid = false; document.getElementById('error-title').textContent = 'Title is required.'; }
    else document.getElementById('error-title').textContent = '';
    // Content
    const content = textarea.value.trim();
    if (!content) { valid = false; document.getElementById('error-content').textContent = 'Content is required.'; }
    else document.getElementById('error-content').textContent = '';
    // Category
    const category = document.getElementById('article-category').value;
    if (!category) { valid = false; document.getElementById('error-category').textContent = 'Category is required.'; }
    else document.getElementById('error-category').textContent = '';
    // Image
    const file = fileInput.files[0];
    if (file && (!['image/png','image/jpeg','image/gif'].includes(file.type) || file.size > 10*1024*1024)) {
      valid = false;
      document.getElementById('error-image').textContent = 'Invalid image file.';
    } else document.getElementById('error-image').textContent = '';
    if (!valid) return;
    // TODO: API call to save article
    alert('Article published! (Form data can be sent to backend here)');
    this.reset();
    preview.innerHTML = '';
    previewBox.textContent = 'No image selected.';
  });
}
function renderCategories() {
  document.querySelector('.admin-main').innerHTML = categoriesHTML;
}
function renderLanguages() {
  document.querySelector('.admin-main').innerHTML = languagesHTML;
}
function renderUsers() {
  document.querySelector('.admin-main').innerHTML = usersHTML;
}
function renderAnalytics() {
  document.querySelector('.admin-main').innerHTML = analyticsHTML;
  new Chart(document.getElementById('analyticsChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Visits',
        data: [12, 19, 7, 15, 22, 30, 18],
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33,150,243,0.1)',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

const navMap = {
  '#dashboard': renderDashboard,
  '#articles': renderArticles,
  '#categories': renderCategories,
  '#languages': renderLanguages,
  '#users': renderUsers,
  '#analytics': renderAnalytics
};

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.admin-sidebar nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const hash = this.getAttribute('href');
      if (navMap[hash]) {
        e.preventDefault();
        document.querySelectorAll('.admin-sidebar nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        navMap[hash]();
      }
    });
  });
  renderDashboard();
});

// Note: Remember to include marked.js for Markdown preview in admin.html head if not already present.
// <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
