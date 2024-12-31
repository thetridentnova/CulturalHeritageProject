// Toggle Technology List
const techButton = document.getElementById('tech-button');
const techList = document.getElementById('tech-list');

techButton.addEventListener('click', () => {
    const isHidden = techList.classList.toggle('hidden');
    techButton.textContent = isHidden ? 'Show Examples' : 'Hide Examples';
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});
