// JavaScript for Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'light-mode' ? '🌞' : '🌙';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const currentTheme = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    themeToggle.textContent = currentTheme === 'light-mode' ? '🌞' : '🌙';
    localStorage.setItem('theme', currentTheme);
});
