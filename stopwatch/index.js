function StopWatch() {
    let startTime;
    let stopTime;
    let isStarted = false;
    let duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });

    this.start = function () {
        if (isStarted === true) {
            throw new Error('Stopwatch is already started');
        }
        isStarted = true;
        startTime = new Date();
    }

    this.stop = function () {
        if (isStarted === false) {
            throw new Error('Stopwatch is not started');
        }
        isStarted = false;
        stopTime = new Date();
        duration += (stopTime.getTime() - startTime.getTime()) / 1000;
    }

    this.reset = function () {
        startTime = undefined;
        stopTime = undefined;
        duration = 0;
        isStarted = false;
    }
}

const stopWatch = new StopWatch();

function start() {
    stopWatch.start();
}

function stop() {
    stopWatch.stop();
    document.querySelector("#duration").textContent = stopWatch.duration;
} 

function reset() {
    stopWatch.reset();
    document.querySelector("#duration").textContent = '';
}
