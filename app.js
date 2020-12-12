const container = document.querySelector('.container');
let divs = 0;

let div = document.createElement('div');
for (let i = 0; i < 36; i++){
    addDivs(6);
}




function addDivs(n){
        div = document.createElement('div');
        div.style.height = container.offsetHeight / n + "px";
        div.style.width = container.offsetWidth / n + 'px';
        div.style.border = "0.2px solid black";
        div.style.backgroundColor = "white";
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
    
}

