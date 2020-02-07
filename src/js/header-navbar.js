const burgerBtn = document.querySelector('#dropdownMenuButton');

burgerBtn.addEventListener('click', () => {
    const burgerIcon = burgerBtn.querySelector('i');
    if (burgerIcon.classList.contains('fa-bars')) {
        burgerIcon.classList.replace('fa-bars', 'fa-times')
    } else {
        burgerIcon.classList.replace('fa-times', 'fa-bars')
    }
});