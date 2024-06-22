import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const links = document.querySelectorAll('nav a');

  const routes = {
    home: `
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
    `,
    about: `
      <h1>About</h1>
      <p>Welcome to the About page.</p>
    `,
    contact: `
      <h1>Contact</h1>
      <p>Welcome to the Contact page.</p>
    `,
  };

  function navigate(event) {
    event.preventDefault();
    const path = event.target.getAttribute('data-link');
    app.innerHTML = routes[path];
    window.history.pushState({ path }, '', `${path}`);

  }

  function handlePopState() {
    const path = window.location.pathname.replace('/', '');
    app.innerHTML = routes[path] || routes.home;
  }

  links.forEach((link) => {
    link.addEventListener('click', navigate);
  });

  window.addEventListener('popstate', handlePopState);

  handlePopState();
});
