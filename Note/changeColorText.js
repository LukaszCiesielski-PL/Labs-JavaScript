document.querySelector('.red').addEventListener('click', changeToRed);
document.querySelector('.blue').addEventListener('click', changeToBlue);
document.querySelector('.yellow').addEventListener('click', changeToYellow);
document.querySelector('.green').addEventListener('click', changeToGreen);


function changeToRed(ev){
    const colR = ev.target.parentElement.parentElement;
    colR.classList.add('noteColorRed');
}

function changeToBlue(ev){
    const colB = ev.target.parentElement.parentElement;
    colB.classList.add('noteColorBlue');
}

function changeToYellow(ev){
    const colC = ev.target.parentElement.parentElement;
    colC.classList.add('noteColorYellow');
}

function changeToGreen(ev){
    const colG = ev.target.parentElement.parentElement;
    colG.classList.add('noteColorGreen');
}