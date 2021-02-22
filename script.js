const toggle = document.querySelector('.toggle');
const navItems = document.querySelectorAll('.nav-item');

function toggleMenu() {
    for(let item of navItems) {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    }
}

toggle.addEventListener('click', toggleMenu);