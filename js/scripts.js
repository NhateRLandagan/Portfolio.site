$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 20){
            $('.navbar .menu li a').addClass("sticky");
        }
        else{
            $('.navbar .menu li a').removeClass("sticky");
        }

        if(this.scrollY > 20){
            $('.navbar .menu').addClass("sticky");
        }
        else{
            $('.navbar .menu').removeClass("sticky");
        }

        if(this.scrollY > 20){
            $('.navbar .logo a').addClass("sticky");
        }
        else{
            $('.navbar .logo a').removeClass("sticky");
        }

        if(this.scrollY > 20){
            $('.dark-menu-btn').removeClass("sticky");
        }
        else{
            $('.dark-menu-btn').addClass("sticky");
        }
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
    });
    $('.dark-menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.dark-menu-btn img').toggleClass("active");
    });
});