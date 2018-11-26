let _startTime = new WeakMap();
let _stopTime = new WeakMap();
let _isStarted = new WeakMap();
let _duration = new WeakMap();

export default class StopWatch {
    constructor() {
        _isStarted.set(this, false);
        _duration.set(this, 0);
    }

    get Duration() {
        return _duration.get(this);
    }

    start() {
        if (_isStarted.get(this) === true) {
            throw new Error('Stopwatch is already started');
        }
        _isStarted.set(this, true);
        _startTime.set(this, new Date());
    }

    stop() {
        if (_isStarted.get(this) === false) {
            throw new Error('Stopwatch is not started');
        }

        _isStarted.set(this, false);
        _stopTime.set(this, new Date());
        _duration.set(this, _duration.get(this) + (_stopTime.get(this).getTime() - _startTime.get(this).getTime()) / 1000);
    }

    render() {
        let duration = (_duration.get(this) * 1000);
        if (_isStarted.get(this) === true) {
            duration += (new Date()).getTime() - _startTime.get(this).getTime();
        }
        const hours = parseInt((duration / (1000 * 60 * 60)) % 24);
        const minutes = parseInt((duration / (1000 * 60)) % 60);
        const seconds = parseInt((duration / 1000) % 60);
        return `${hours}:${minutes}:${seconds}`;
    }

    reset() {
        _isStarted.set(this, false);
        _startTime.set(this, undefined);
        _stopTime.set(this, undefined);
        _duration.set(this, 0);
    }
}


function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
