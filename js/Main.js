const responsive ={
    0:{
        items:1
    },
    320:{
        items:1
    },

    560:{
        items:2
    },
    960:{
        items:3
    }
}


$(document).ready(function(){
    $nav=$('nav');
    $toggleCollapse=$('.toggle-collapse');

    /*Taoj su kien chuot o nut  <i class="fas fa-bars"></i>*/ 
    $toggleCollapse.click(function(){

    $nav.toggleClass('collapse');
    })
        /*Băng chuyền tự chạy */
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
       /* nav:true*/  /*radion button sẽ chuyển về "<>" để chuyển hình ảnh */
   
        responsive:responsive
   
    });

    //click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000)
    })


    //Aos chuyển động của ảnh
    AOS.init();
});