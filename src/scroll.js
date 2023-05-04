const section = document.querySelector('section');

window.addEventListener('scroll', (e) => {
    console.log(window);
});

// Magic function to scroll smooth!
function smoothScroll(e) {
    // Prevent default anchor behaviour
    e.preventDefault();

    // Get clicked links href attribute
    const link = this.getAttribute("href");

    // Get the targets position
    const offsetTop = document.querySelector(link).offsetTop;

    // Finally scroll to target
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}