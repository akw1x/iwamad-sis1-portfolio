document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
  
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.dataset.theme = newTheme;
      });
    }
  
    // 2. Contact Form Validation Logic
    const contactForm = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');
  
    if (contactForm && feedbackDiv) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
  
        const nameValue = nameInput ? nameInput.value.trim() : '';
        const emailValue = emailInput ? emailInput.value.trim() : '';
        const messageValue = messageInput ? messageInput.value.trim() : '';
  
        feedbackDiv.textContent = '';
        feedbackDiv.className = 'feedback';
  
        if (!nameValue) {
          showError('Please provide your name.');
          return;
        }
  
        if (!emailValue) {
          showError('Please provide your email address.');
          return;
        }
  
        if (!messageValue) {
          showError('Please enter a message before submitting.');
          return;
        }
  
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
          showError('Please enter a valid email address (e.g., name@example.com).');
          return;
        }
  
        feedbackDiv.textContent = 'Thank you! Your message has been sent successfully.';
        feedbackDiv.classList.add('success');
        contactForm.reset();
      });
    }
  
    function showError(message) {
      feedbackDiv.textContent = message;
      feedbackDiv.classList.add('error');
    }
  });