const _container = new WeakMap();

export default class HtmlElement {
    constructor(container) {
        _container.set(this, container);
    }

    get Container() {
        return _container.get(this);
    }

    click() {
        console.log('clicked');
    }
    focus() {
        console.log('focused');
    }
}
