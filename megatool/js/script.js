
AOS.init();


$(document) .ready(function(){
    $(window) .scroll(function(){
        if($(this) .scrollTop() >50){
            $('header') .addClass('scrolled');
        } else{
            $('header') .removeClass('scrolled');
        }
    });
});

$(document).ready(function () {
    // Инициализация карусели
    $('#carouselExampleInterval').carousel();
    
    // Обработчики событий для кнопок управления
    $('.carousel-control-prev').click(function () {
        $('#carouselExampleInterval').carousel('prev');
    });
    
    $('.carousel-control-next').click(function () {
        $('#carouselExampleInterval').carousel('next');
    });
});





$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: ['<i class="owl-prev">&lt;</i>', '<i class="owl-next">&gt;</i>'],
        dots: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 6
            },
            900: {
                items: 9
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы .carousel-caption
    const captions = document.querySelectorAll(".carousel-caption");

    // Проходимся по всем элементам и устанавливаем им минимальную высоту
    captions.forEach(function(caption) {
        caption.style.minHeight = caption.scrollHeight + "px";
    });
});


document.getElementById("narzMocujace").addEventListener("click", function(){
    window.location.href="narziedzia_mocujace.html";
});


document.getElementById("narzSkrawajace").addEventListener("click", function(){
    window.location.href="narz_skrawajace.html";
});

document.getElementById("narzPomiarowe").addEventListener("click", function(){
    window.location.href="narz_pomiarowe.html";
});

document.getElementById("narzScierne").addEventListener("click", function(){
    window.location.href="narz_scierne.html";
});


document.getElementById("oNas").addEventListener("click", function(){
    window.location.href="o_nas.html";
});




document.getElementById("narzMocuj").addEventListener("click", function(){
    window.location.href="narziedzia_mocujace.html";
});

document.getElementById("narzSkrawaj").addEventListener("click", function(){
    window.location.href="narz_skrawajace.html";
});

document.getElementById("narzPomiar").addEventListener("click", function(){
    window.location.href="narz_pomiarowe.html";
});

document.getElementById("narzScier").addEventListener("click", function(){
    window.location.href="narz_scierne.html";
});





document.getElementById("narzMoc").addEventListener("click", function(){
    window.location.href="narziedzia_mocujace.html";
});

document.getElementById("narzSkr").addEventListener("click", function(){
    window.location.href="narz_skrawajace.html";
});

document.getElementById("narzPom").addEventListener("click", function(){
    window.location.href="narz_pomiarowe.html";
});

document.getElementById("narzSc").addEventListener("click", function(){
    window.location.href="narz_scierne.html";
});





/////////////////////////////////////////////////////////////////////////////////////////////////////////////


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': false
  });

 