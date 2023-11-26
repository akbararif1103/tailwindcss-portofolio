document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            smoothScrollTo(target.offsetTop, 1000);
        }
    });
});

function smoothScrollTo(destination, duration) {
    const start = window.scrollY;
    const distance = destination - start;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
} 

tippy('#facebook', {
    content: 'Facebook',
    animation: 'fade',
    delay: [200, 200]
  });
  tippy('#instagram', {
    content: 'Instagram',
    animation: 'fade',
    delay: [200, 200]
  });
  tippy('#whatsapp', {
    content: 'Whatsapp',
    animation: 'fade',
    delay: [200, 200]
  });
  tippy('#twitter', {
    content: 'Twitter',
    animation: 'fade',
    delay: [200, 200]
  });
  tippy('#youtube', {
    content: 'Youtube',
    animation: 'fade',
    placement: 'left-start',
    delay: [200, 200]
  });
  tippy('#discord', {
    content: 'Discord',
    animation: 'fade',
    placement: 'right-start',
    delay: [200, 200]
  });
  tippy('#linkedin', {
    content: 'Linkedin',
    animation: 'fade',
    placement: 'top',
    delay: [200, 200]
  });