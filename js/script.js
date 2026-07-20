document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const subject = encodeURIComponent(`Cerere ofertă de la ${name || 'client site'}`);
      const body = encodeURIComponent(
        `Nume: ${form.querySelector('#name').value}\n` +
        `Telefon: ${form.querySelector('#phone').value}\n` +
        `Email: ${form.querySelector('#email').value}\n` +
        `Serviciu: ${form.querySelector('#service').value}\n\n` +
        `Mesaj:\n${form.querySelector('#message').value}`
      );
      window.location.href = `mailto:manutenzioneedile84@yahoo.com?subject=${subject}&body=${body}`;
    });
  }
});
