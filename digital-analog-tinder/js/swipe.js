var correct = 0;
var incorrect = 0;

$(document).ready(function(){

    $(".card").on("swiperight", function(){
        if ($('.rotate-left:visible').length || $('.rotate-right:visible').length) {
            return;
        }
        $(this).addClass('rotate-left').delay(1400).fadeOut(2);
        $('.card').find('.status').remove();

        if ($(this).attr('data-sol') == 'analog'){ //(solution[correct+incorrect] == 'analog'){
            correct ++;
            $('#correct').html(correct);
        }
        else {
            incorrect++;
            $('#incorrect').html(incorrect);
        }


        $(this).append('<div class="status like">Analog!</div>');      
        if ( $(this).is(':last-child') ) {
            $('#container').html('<div class="message>Ende</div>')
        } else {
            $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
        }
    });  


    $(".card").on("swipeleft", function(){                
        if ($('.rotate-left:visible').length || $('.rotate-right:visible').length) {
            return;
        }
        $(this).addClass('rotate-right').delay(1400).fadeOut(2);
        $('.card').find('.status').remove();
        $(this).append('<div class="status dislike">Digital!</div>');

        if ($(this).attr('data-sol') == 'digital'){
            correct ++;
            $('#correct').html(correct);
        }
        else {
            incorrect++;
            $('#incorrect').html(incorrect);
        }

        if ( $(this).is(':last-child') ) {
            $('#container').html('<div class="message">Ende</div>')
         } else {
            $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
        } 
   });

});


