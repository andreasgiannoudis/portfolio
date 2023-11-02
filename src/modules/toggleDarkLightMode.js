const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


toggle.addEventListener('click', function () {
    const isDarkMode = this.classList.contains('bi-brightness-high-fill');

    if (isDarkMode) {
        // Switch to light mode
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        // Switch to dark mode
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }

    // Toggle the 'bi-brightness-high-fill' and 'bi-moon' classes
    this.classList.toggle('bi-brightness-high-fill');
    this.classList.toggle('bi-moon');
});


export {toggle};
