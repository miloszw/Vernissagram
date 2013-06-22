$(document).ready(function() {
    $('.thumbnails img').hover(function() {
        $(this).removeClass('grayscale');
    }, function() {
        if(!$(this).hasClass('highlighted'))
            $(this).addClass('grayscale');
    });
    
    $('#tab1 li img').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('highlighted'))
            return;
        $('.thumbnails .highlighted').addClass('grayscale');
        $('.thumbnails .highlighted').removeClass('highlighted');
        $(this).addClass('highlighted');
        $src = $(this).attr('src');
        $('#img-large').attr('src',$src);
    });
    
    $('#lbox #ok-btn').hide();
    $('#lbox').hover(function() {
        $('#lbox #ok-btn').stop().fadeIn('fast');
    }, function() {
        $('#lbox #ok-btn').stop().fadeOut('fast');
    });
});

// $(document).ready(function() {
// 
// });