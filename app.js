const container = document.querySelector('.container');

let height = container.offsetHeight;
let width = container.offsetWidth;

let div = document.createElement('div');

document.addEventListener('load',onload());
function onload(){ 
    for (let i = 0; i < 1000; i++){
     addDivs(30);
    };
    divs = Array.from(document.getElementsByClassName('div'));
    divs.forEach((each)=> {
        each.addEventListener('mouseover',() => {
            each.style.backgroundColor = "red"})});
}



function addDivs(n){
        div = document.createElement('div');
        div.style.height = height / n + "px";
        div.style.width = width / n + 'px';
        div.className = "div";
        div.innerText = '';
        container.appendChild(div);
}


const fillContainer = (n) => {
    container.innerHTML = '';
    for (let i = 0; i < n*n; i++){
        addDivs(n);
    }
    divs = Array.from(document.getElementsByClassName('div'));
    divs.forEach((each)=> {
        each.addEventListener('mouseover',() => {
            each.style.backgroundColor = "red"})})
}



