(function Note(){
    
    let slideBox; 
    let slideStart;
    let slide;
    let slideEnd;
    let pointX = 0;
    let pointY = 0;
    let addNewNote;

    slideStart = function(ev) {
        let boundingClientRect;

        if(ev.target.className.indexOf('bar') === -1){ 
            return;
        }

        slideBox = this;

        boundingClientRect = slideBox.getBoundingClientRect();

        pointY = boundingClientRect.top - ev.clientY;
        pointX = boundingClientRect.left - ev.clientX;
    };

    slide = function(ev){
        if(!slideBox){
            return;
        }
        let posX = ev.clientX + pointX - 50;
        let posY = ev.clientY + pointY - 50;

        if(posY < -50 ){
            posY = -50;
        }
       
        if(posX < -50){
            posX = -50;
        }
       
        slideBox.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
    };

    slideEnd = function(){
        slideBox = null;
        pointY = null;
        pointX = null;
    };

    addNewNote = function(){
        let note = document.createElement('div');
        let bar = document.createElement('div');
        let title = document.createElement('div');
        let text = document.createElement('input');
        let textarea = document.createElement('textarea');
        let chaneBackground = document.createElement('div');
        let buttonColor = document.createElement('button');
        let buttonColor2 = document.createElement('button');
        let buttonColor3 = document.createElement('button');
        let buttonColor4 = document.createElement('button');
        let chaneText = document.createElement('div');
        let buttonColor5 = document.createElement('button');
        let buttonColor6 = document.createElement('button');
        let buttonColor7 = document.createElement('button');
        let buttonColor8 = document.createElement('button');
        let date = document.createElement('div');
                
        note.classList.add('note');
        note.appendChild(bar);
        note.appendChild(title);
        note.appendChild(text);
        note.appendChild(textarea);
        note.appendChild(chaneBackground);
        note.appendChild(buttonColor);
        note.appendChild(buttonColor2);
        note.appendChild(buttonColor3);        
        note.appendChild(buttonColor4);
        note.appendChild(chaneText);
        note.appendChild(buttonColor5);
        note.appendChild(buttonColor6);
        note.appendChild(buttonColor7);        
        note.appendChild(buttonColor8);
        note.appendChild(date);
        note.addEventListener('mousedown', slideStart, false);

        bar.classList.add('bar');
        
        title.classList.add('title');
        title.appendChild(text);

        text.classList.add('input');
        
        textarea.classList.add('textarea');
        
        buttonColor.innerHTML = "B";
        buttonColor2.innerHTML = "B";
        buttonColor3.innerHTML = "B";
        buttonColor4.innerHTML = "B";
        buttonColor5.innerHTML = "T";
        buttonColor6.innerHTML = "T";
        buttonColor7.innerHTML = "T";
        buttonColor8.innerHTML = "T";

        chaneBackground.classList.add('changeBackground');
        chaneBackground.appendChild(buttonColor);
        chaneBackground.appendChild(buttonColor2);
        chaneBackground.appendChild(buttonColor3);
        chaneBackground.appendChild(buttonColor4);
        chaneBackground.classList.add('changeText');
        chaneText.appendChild(buttonColor5);
        chaneText.appendChild(buttonColor6);
        chaneText.appendChild(buttonColor7);
        chaneText.appendChild(buttonColor8);

        buttonColor.classList.add('color');        
        buttonColor2.classList.add('color');        
        buttonColor3.classList.add('color');        
        buttonColor4.classList.add('color');        
        buttonColor.classList.add('red');  
        buttonColor.addEventListener('click', changeToRed);
        buttonColor2.classList.add('blue');
        buttonColor2.addEventListener('click', changeToBlue);
        buttonColor3.classList.add('yellow');
        buttonColor3.addEventListener('click', changeToYellow);
        buttonColor4.classList.add('green');
        buttonColor4.addEventListener('click', changeToGreen);

        buttonColor5.classList.add('color');        
        buttonColor6.classList.add('color');        
        buttonColor7.classList.add('color');        
        buttonColor8.classList.add('color');        
        buttonColor5.classList.add('red2');  
        buttonColor5.addEventListener('click', changeToRedText);
        buttonColor6.classList.add('blue2');
        buttonColor6.addEventListener('click', changeToBlueText);
        buttonColor7.classList.add('yellow2');
        buttonColor7.addEventListener('click', changeToYellowText);
        buttonColor8.classList.add('green2');
        buttonColor8.addEventListener('click', changeToGreenText);
        
        date.classList.add('date');       
       
        document.body.appendChild(note);
 
    };

    addNewNotes = document.querySelector('.addNewNote').addEventListener('click', addNewNote, false);
    document.addEventListener('mousemove', slide, false);
    document.addEventListener('mouseup', slideEnd, false);
    document.querySelector('.note').addEventListener('mousedown', slideStart, false);
    
})();