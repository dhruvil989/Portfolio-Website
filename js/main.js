$(document).ready(function(){
    $("#project-1").click(function(){
        $("#more1").toggleClass("d-none");
        $("#line-clamp-1").toggleClass("line-clamp-2");
        $('#less1').toggleClass('d-block');
    });
    $("#project-2").click(function(){
        $("#more2").toggleClass("d-none");
        $("#line-clamp-2").toggleClass("line-clamp-2");
        $('#less2').toggleClass('d-block');
    }); 
    $("#project-3").click(function(){
        $("#more3").toggleClass("d-none");
        $("#line-clamp-3").toggleClass("line-clamp-2");
        $('#less3').toggleClass('d-block');
    });
    $("#project-4").click(function(){
        $("#more4").toggleClass("d-none");
        $("#line-clamp-4").toggleClass("line-clamp-2");
        $('#less4').toggleClass('d-block');
    });
    $(".menu-icon").click(function () {
        $(".navbar-scrollpy").addClass("open-navbar");
    });
    $(".close-icon").click(function () {
        $(".navbar-scrollpy").removeClass("open-navbar");
    })
})

// aos-animation
AOS.init();