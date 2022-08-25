const MAIN = document.querySelector('main');
const INPUT = document.querySelector('#addInput');
const ADD_BTN = document.querySelector('#addBtn');
const REMOVE_BTN = document.querySelector('#removeBtn');

const ITEM_CLASS = document.createAttribute('class');

ADD_BTN.addEventListener('click', ()=>{
    const ITEM = document.createElement('div');
    ITEM.classList.add('item');
    MAIN.appendChild(ITEM);
    console.log("sss");
})