document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
    this.classList.toggle('active');
});