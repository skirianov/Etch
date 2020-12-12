const container = document.querySelector('.container');

let height = container.offsetHeight;
let width = container.offsetWidth;

let div = document.createElement('div');
const colorPicker = document.querySelector('.color');
let color = 'red';
colorPicker.addEventListener('input',() => {
    color = colorPicker.value;
    
})

// first document onload event
document.addEventListener('load',onload());
function onload(){ 
    for (let i = 0; i < 10000; i++){
     addDivs(65);
    };
    divs = Array.from(document.getElementsByClassName('div'));
    divs.forEach((each)=> {
        each.addEventListener('mouseover',() => {
            each.style.backgroundColor =  color;
        })});
}

function addDivs(n){ //general add div
        div = document.createElement('div');
        div.style.height = height / n + "px";
        div.style.width = width / n + 'px';
        div.className = "div";
        div.innerText = '';
        container.appendChild(div);
}

const size = document.querySelector('.range');
const clear = document.querySelector('.clear');
const rainbow = document.querySelector('.rainbow');

// Filling container function
const fillContainer = () => {
    container.innerHTML = '';
    for (let i = 0; i < size.value * size.value; i++){
        addDivs(size.value);
    }
    divs = Array.from(document.getElementsByClassName('div'));
    divs.forEach((each)=> {
        each.addEventListener('mouseover',() => {
            each.style.backgroundColor =  color;
        })});
}

// clear button and size change refresh
clear.addEventListener('click',() => {fillContainer()});
size.addEventListener('input',()=>{fillContainer()});
let random = () => {return Math.floor(Math.random() * 255)};
rainbow.addEventListener('click',() => {
    divs = Array.from(document.getElementsByClassName('div'));
    divs.forEach((each)=> {
        each.addEventListener('mouseover',() => {
            color = "rgb(" + random() + "," + random() + "," + random() + ")";
            each.style.backgroundColor =  color;
        })});
})



function paintingDivs(){
    divs = Array.from(document.getElementsByClassName('div'));
    divs.forEach((each)=> {
        each.addEventListener('mouseover',() => {
            each.style.backgroundColor =  color;
    })});
}

