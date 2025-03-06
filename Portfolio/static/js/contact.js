document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let name = document.querySelector('input[name="name"]').value;
        let email = document.querySelector('input[name="email"]').value;
        let message = document.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('All fields are required!');
            event.preventDefault();  // Prevent form submission
        }
    });
});
