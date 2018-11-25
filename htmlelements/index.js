
const select = new HtmlSelectElement(document.querySelector('#selectContainer'));
select.render();


function addItem() {
    const item = document.querySelector('#item').value;
    select.addItem(item);
    select.render();
}

function removeItem() {
    const item = document.querySelector('#item').value;
    select.removeItem(item);
    select.render();
}
