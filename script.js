document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function () {
      alert("Message sent! We'll get back to you soon.");
    });
  });
  
  

  // Get CSRF token on page load
  fetch('/api/contact')
    .then(res => res.json())
    .then(data => {
      document.getElementById('csrf_token').value = data.csrfToken;
    });

  // Handle form submit
  document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message || result.error);
  });

