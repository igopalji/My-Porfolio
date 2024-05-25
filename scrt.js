
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Form validation
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        document.getElementById('form-message').innerText = 'All fields are required!';
        return;
    }

    // Assuming you send the form data to a server here
    // Example: sendFormData({ name, email, message });

    document.getElementById('form-message').innerText = "Thank you for your message! We'll Contact you soon 😁"
    document.getElementById('contact-form').reset();
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


