function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}


function HtmlSelectElement(containerElement, selectItems = []) {
    const items = selectItems;
    const container = containerElement;
    Object.defineProperty(this, 'items', {
        get: function () {
            return items;
        }
    });

    this.addItem = function (item) {
        this.items.push(item);
    }
    this.removeItem = function (item) {
        const index = this.items.indexOf(item);
        if (index === -1)
            throw new Error('Element not fround');

        this.items.splice(index, 1);
    }

    this.render = function () { 
        container.innerHTML ='';
        const selectDomElement = document.createElement('select');
        for (const item of select.items) {
            const option = document.createElement('option');
            option.text = item;
            option.value = item;
            selectDomElement.add(option);
        }
        container.append(selectDomElement);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
