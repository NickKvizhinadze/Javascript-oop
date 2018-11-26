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

    reset() {
        _isStarted.set(this, false);
        _startTime.set(this, undefined);
        _stopTime.set(this, undefined);
        _duration.set(this, 0);
    }
}
