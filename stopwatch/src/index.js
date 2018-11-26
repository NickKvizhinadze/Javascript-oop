import StopWatch from './StopWatch';

const stopWatch = new StopWatch();
const duration = document.querySelector("#duration");
let interval = undefined;


document.querySelector("#start").addEventListener("click", () => {
    stopWatch.start();
    interval = setInterval(_ => {
        duration.textContent = stopWatch.render();
    }, 1000);
});

document.querySelector("#stop").addEventListener("click", () => {
    stopWatch.stop();
    if(interval){
        clearInterval(interval);
    }
});

document.querySelector("#reset").addEventListener("click", () => {
    stopWatch.reset();
    duration.textContent = '0:0:0';
});
