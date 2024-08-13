const pauseButton = document.getElementById('pause-btn');
const resumeButton = document.getElementById('resume-btn');
const arcs = document.querySelectorAll('.arc');

pauseButton.addEventListener('click', function() {
    arcs.forEach(arc => {
        arc.style.animationPlayState = 'paused';
    });
});

resumeButton.addEventListener('click', function() {
    arcs.forEach(arc => {
        arc.style.animationPlayState = 'running';
    });
});
