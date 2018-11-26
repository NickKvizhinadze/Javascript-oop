import HtmlElement from './htmlelements';

const _items = new WeakMap();

export default class HtmlSelectElement extends HtmlElement {
    constructor(container, items = []) {
        super(container);
        _items.set(this, items);
    }

    addItem(item) {
        _items.get(this).push(item);
    }

    removeItem(item) {
        const index = _items.get(this).indexOf(item);
        if (index === -1)
            throw new Error('Element not fround');

        _items.get(this).splice(index, 1);
    }

    render() {
        super.Container.innerHTML = '';
        const selectDomElement = document.createElement('select');
        for (const item of _items.get(this)) {
            const option = document.createElement('option');
            option.text = item;
            option.value = item;
            selectDomElement.add(option);
        }
        super.Container.append(selectDomElement);
    }
}
