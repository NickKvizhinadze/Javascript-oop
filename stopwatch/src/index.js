import StopWatch from './StopWatch';

const stopWatch = new StopWatch();
const duration = document.querySelector("#duration");

document.querySelector("#start").addEventListener("click", () => {
    stopWatch.start();
});

document.querySelector("#stop").addEventListener("click", () => {
    stopWatch.stop();
    duration.textContent = stopWatch.Duration;
});

document.querySelector("#reset").addEventListener("click", () => {
    stopWatch.reset();
    duration.textContent = '';
});
