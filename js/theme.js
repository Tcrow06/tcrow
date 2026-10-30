/**
 * Theme Switcher with OS Preference Detection & Persistence
 * Luong Quang Thinh Portfolio
 */
(function () {
  const toggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  const root = document.documentElement;

  // Check stored theme or OS preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(currentTheme);

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.src = 'assets/icons/sun.svg';
      if (themeText) themeText.textContent = 'Light Mode';
    } else {
      root.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.src = 'assets/icons/moon.svg';
      if (themeText) themeText.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', theme);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }

  // Listen to OS theme changes if user hasn't explicitly set one
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();

