const gallery = document.querySelectorAll(".gallery img");

gallery.forEach(function (galleryBox) {

    galleryBox.addEventListener('click', function () {
        const fullscreenBox = document.querySelector(".fullscreenBox");       
        const arrowNext = fullscreenBox.querySelector(".arrowNext");
        const arrowBack = fullscreenBox.querySelector(".arrowBack");
        const buttonClose = fullscreenBox.querySelector(".buttonClose");
        const Image = fullscreenBox.querySelector("img");

        fullscreenBox.classList.add("visible");
        Image.src = galleryBox.src;

        arrowNext.addEventListener("click", function () {
            if (galleryBox.nextElementSibling != null) {
                Image.src = galleryBox.nextElementSibling.src;
                galleryBox = galleryBox.nextElementSibling;
            }
            arrowNext.classList.add("shadow");

            function timeOut(){
                arrowNext.classList.remove("shadow");
            }setTimeout(timeOut,300)
        });

        arrowBack.addEventListener("click", function () {
            if (galleryBox.previousElementSibling != null) {
                Image.src = galleryBox.previousElementSibling.src;
                galleryBox = galleryBox.previousElementSibling;    
            }
            arrowBack.classList.add("shadow");

            function timeOut(){
                arrowBack.classList.remove("shadow");
            }setTimeout(timeOut,300)
        });
        
        buttonClose.addEventListener("click", function () {
            fullscreenBox.classList.remove("visible");
            
            buttonClose.classList.add("shadow");

            function timeOut(){
                buttonClose.classList.remove("shadow");
            }setTimeout(timeOut,500)
        });

    });
});