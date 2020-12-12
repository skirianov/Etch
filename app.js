const container = document.querySelector('.container');

let height = container.offsetHeight;
let width = container.offsetWidth;

let div = document.createElement('div');
const colorPicker = document.querySelector('.color');
let color = 'red';
colorPicker.addEventListener('input',() => {
  
    color = colorPicker.value;
    
})

document.addEventListener('load',onload());
function onload(){ 
    for (let i = 0; i < 1000; i++){
     addDivs(30);
    };
    divs = Array.from(document.getElementsByClassName('div'));
    divs.forEach((each)=> {
        each.addEventListener('mouseover',() => {
            each.style.backgroundColor = color})});
}

function addDivs(n){
        div = document.createElement('div');
        div.style.height = height / n + "px";
        div.style.width = width / n + 'px';
        div.className = "div";
        div.innerText = '';
        container.appendChild(div);
}



const size = document.querySelector('input').value;


const fillContainer = () => {
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++){
        addDivs(size);
    }
    divs = Array.from(document.getElementsByClassName('div'));
    divs.forEach((each)=> {
        each.addEventListener('mouseover',() => {
            each.style.backgroundColor = color})})
}



