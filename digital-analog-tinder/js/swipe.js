var correct = 0;
var incorrect = 0;

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name).exec(window.location.href);
    if (results==null){
       return false;
    }
    else{
       return true;
    }
}

$(document).ready(function(){

    var comments = $.urlParam('comments');
    
    $(".card").on("swiperight", function(){
        if ($('.rotate-left:visible').length || $('.rotate-right:visible').length) {
            return;
        }
        $(this).addClass('rotate-left').delay(500).fadeOut(2);
        $('.card').find('.status').remove();

        if ($(this).attr('data-sol') == 'analog'){ //(solution[correct+incorrect] == 'analog'){
            correct ++;
            $('.speech-bubble').text($(this).attr('data-note-correct'))
            $('#correct').html(correct);
        }
        else {
            incorrect++;
            $('.speech-bubble').text($(this).attr('data-note-wrong'));
            $('#incorrect').html(incorrect);
        }
        
        
        if (comments) {
            $('.speech-bubble-container').finish();
            $('.speech-bubble-container').show().delay(6000).fadeOut();
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
        $(this).addClass('rotate-right').delay(500).fadeOut(2);
        $('.card').find('.status').remove();
        $(this).append('<div class="status dislike">Digital!</div>');

        if ($(this).attr('data-sol') == 'digital'){
            correct ++;
            $('.speech-bubble').text($(this).attr('data-note-correct'))
            $('#correct').html(correct);
        }
        else {
            incorrect++;
            $('.speech-bubble').text($(this).attr('data-note-wrong'));
            $('#incorrect').html(incorrect);
        }

        if (comments) {
            $('.speech-bubble-container').finish();
            $('.speech-bubble-container').show().delay(6000).fadeOut();
        }
            
        if ( $(this).is(':last-child') ) {
            $('#container').html('<div class="message">Ende</div>')
         } else {
            $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
        } 
   });

});


