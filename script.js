$(document).ready(function() {
    var audio = $("#audio")[0];
    console.log(audio)

    $('#enter').on('click', function() {
        $('.entry').fadeOut(500);

        setTimeout(function() {
            $('.main').fadeIn(500);
            audio.play();
        }, 500);
    });


    var delayTimer;
    var isMouseMoving = false;

    $(document).mousemove(function(e) {
        isMouseMoving = true;
        clearTimeout(delayTimer);

        delayTimer = setTimeout(function() {
            if (isMouseMoving) {
                $("#follow").css({
                    left: e.pageX,
                    top: e.pageY
                });
                isMouseMoving = false;
            }
        }, 5);
    });

    $(document).click(function() {
        isMouseMoving = false;
    });

    $('#tw, #twter').click(function() {
        console.log('Hello')
        window.location.replace('https://twitter.com/SWTBMPI420');
    });

    $('#tg, #tgram').click(function() {
        window.location.replace('https://t.me/FTXMEME');
    });

    $('#buyNow, #buy').click(function() {
        window.location.replace('https://raydium.io/swap/');
    });

});