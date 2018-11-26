
const select = new HtmlSelectElement(document.querySelector('#selectContainer'));
select.render();


function addItem() {
    const element = document.querySelector('#item');
    select.addItem(element.value);
    element.value = '';
    select.render();
}

function removeItem() {
    const item = document.querySelector('#selectContainer select').value;
    select.removeItem(item);
    select.render();
}
