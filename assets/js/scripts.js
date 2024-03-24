// smooth scroll
$(document).ready(function(){
    $(".custom-navbar .link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});



function scrollToPortfolio() {
    const portfolioDiv = document.getElementById('about');
    const topPos = portfolioDiv.offsetTop;
    const duration = 900; // Adjust this value to set the duration of the scroll (in milliseconds)
    const startingY = window.pageYOffset;
    const diff = topPos - startingY;
    let start;

    // The actual scroll function
    function step(timestamp) {
    if (!start) start = timestamp;
    const timeElapsed = timestamp - start;
    const percentage = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startingY + diff * percentage);
    if (timeElapsed < duration) {
        window.requestAnimationFrame(step);
    }
    }

    // Start the animation
    window.requestAnimationFrame(step);
}

function scrollToSkills() {
    const portfolioDiv = document.getElementById('service');
    const topPos = portfolioDiv.offsetTop;
    const duration = 900; // Adjust this value to set the duration of the scroll (in milliseconds)
    const startingY = window.pageYOffset;
    const diff = topPos - startingY;
    let start;

    // The actual scroll function
    function step(timestamp) {
    if (!start) start = timestamp;
    const timeElapsed = timestamp - start;
    const percentage = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startingY + diff * percentage);
    if (timeElapsed < duration) {
        window.requestAnimationFrame(step);
    }
    }

    // Start the animation
    window.requestAnimationFrame(step);
}

function scrollToContact() {
    const portfolioDiv = document.getElementById('contact');
    const topPos = portfolioDiv.offsetTop;
    const duration = 900; // Adjust this value to set the duration of the scroll (in milliseconds)
    const startingY = window.pageYOffset;
    const diff = topPos - startingY;
    let start;

    // The actual scroll function
    function step(timestamp) {
    if (!start) start = timestamp;
    const timeElapsed = timestamp - start;
    const percentage = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startingY + diff * percentage);
    if (timeElapsed < duration) {
        window.requestAnimationFrame(step);
    }
    }

    // Start the animation
    window.requestAnimationFrame(step);
}
       