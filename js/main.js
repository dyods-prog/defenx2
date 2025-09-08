$("#burger").on("click" ,()=> $(".nav").addClass("active"));

$("#close-nav").on("click" ,()=> $(".nav").removeClass("active"));

$(".faq-el-head").on("click", function (){

   $(this).parent().toggleClass("active");
   $(this).parent().find(".faq-el-body").slideToggle();
});

$(".nav-inner a").on("click" , function (){
    $(".nav").removeClass("active");
})

$('a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top -  $(".header").height() - 50
    }, {
        duration: 400,
        easing: "linear"
    });

    return false;
});

if (location.hash) {
    $('html,body').animate({scrollTop: $(location.hash).offset().top - $(".header").height() - 50}, 400);
}

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 50){
        $(".header").addClass("scroll")
    }else{
        $(".header").removeClass("scroll")
    }
});
