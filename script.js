let dubaitext = document.getElementById('sky')
let burjkhalifa = document.getElementById('sun1')
let stars = document.getElementById('mountain')
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    dubaitext.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 0.5 + 'px';
    stars.style.top = value * 1 + 'px';
});