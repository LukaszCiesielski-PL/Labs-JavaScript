(function (){
    
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
        let date = document.createElement('div');

        note.classList.add('note');
        bar.classList.add('bar');
        title.classList.add('title');
        text.classList.add('input');
        textarea.classList.add('textarea');
        date.classList.add('date');

        note.appendChild(bar);
        note.appendChild(title);
        note.appendChild(text);
        note.appendChild(textarea);
        note.appendChild(date);

        title.appendChild(text);

        note.addEventListener('mousedown', slideStart, false);

        document.body.appendChild(note);
    };

    addNewNotes = document.querySelector('.addNewNote').addEventListener('click', addNewNote, false);
    document.addEventListener('mousemove', slide, false);
    document.addEventListener('mouseup', slideEnd, false);
    document.querySelector('.note').addEventListener('mousedown', slideStart, false);
})();