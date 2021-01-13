(function (){
    
    let slideBox; 
    let slideStart;
    let slide;
    let slideEnd;
    let pointX = 0;
    let pointY = 0;

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

        
       
        slideBox.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
    };
    document.addEventListener('mousemove', slide, false);
    document.querySelector('.note').addEventListener('mousedown', slideStart, false);
})();