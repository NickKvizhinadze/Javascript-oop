const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    get count() {
        return _items.get(this).length;
    }

    push(item) {
        _items.get(this).push(item);
    }

    peek() {
        const items = _items.get(this);
        return items[items.length - 1];
    }

    pop() {
        let items = _items.get(this);
        if (items.length === 0)
            throw new Error('Stack is empty.')
        return item.pop();
    }
}

const stack = new Stack();
