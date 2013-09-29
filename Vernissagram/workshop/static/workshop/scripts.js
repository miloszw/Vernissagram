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
    
    $step2 = $('#mainContainer #step2').detach();
    $('#lbox #ok-btn').click(function(e) {
        e.preventDefault();
        $(this).html("Loading...");
        $('#mainContainer #step1').css('position','absolute');
        $('#mainContainer #step1').animate({right:'-90%'}, 500, function() {
            $('#mainContainer #rightRow').html($step2);
            $('#mainContainer #step2').fadeIn();
            $('#lbox #ok-btn').hide();
            $('#lbox #ok-btn').html("<i class=\"icon-ok icon-white\"></i> Save");
        });
        $('ul.breadcrumb > li#step1').removeClass('active');
        $('ul.breadcrumb > li#step2').addClass('active');
    });
});

// $(document).ready(function() {
// 
// });