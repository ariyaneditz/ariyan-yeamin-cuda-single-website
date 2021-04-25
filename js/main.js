$(document).ready(function(){

    $(".services-section").waypoint(function(direction){
        if (direction == 'down'){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
})

