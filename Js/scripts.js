$(document).ready(function(){
    $('#mycarousel').carousel( {interval: 2000});
    $('#carouselButton').click(function(){
        if( $('#carouselButton').children('span').hasClass('fa-pause') )
        {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play') )
        {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#reserveButton').click(function(){
        $('#reserveModal').modal('toggle');
    });
    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle');
    });
    
    //$('[data-toggle="tooltip"]').tooltip();
}); 

// function reserveFunction() {
//     document.body.scrollTop = 1350; // For Safari
//     document.documentElement.scrollTop = 1350; // For Chrome, Firefox, IE and Opera
// }