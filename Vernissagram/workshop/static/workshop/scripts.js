$(document).ready(function() {
    $('#tab1 li img').click(function(e) {
        e.preventDefault();
        $('.thumbnails .highlighted').removeClass('highlighted');
        $(this).addClass('highlighted');
        $src = $(this).attr('src');
        $('#img-large').attr('src',$src);
    });
});

// $(document).ready(function() {
// 
// });