import HtmlSelectElement from './HtmlSelectElement';

const select = new HtmlSelectElement(document.querySelector('#selectContainer'));
select.render();

//Event Listeners
document.querySelector("#addItem").addEventListener("click", () => {
    const element = document.querySelector('#item');
    select.addItem(element.value);
    element.value = '';
    select.render();
});

document.querySelector("#removeItem").addEventListener("click", () => {
    const item = document.querySelector('#selectContainer select').value;
    select.removeItem(item);
    select.render();
});
