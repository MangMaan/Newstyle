$(document).ready(function () {
    if (window.matchMedia("(max-width: 1280px)").matches) {
        $('#last_banner').slick({
            autoplay: true,
            dots: false,
            arrows: false,
            Infinity: true
        })
    } else {

    }

    /* 태블릿 영역  matchmedia  */


    if (window.matchMedia("(max-width: 768px)").matches) {
        $("#wrap").css({ 'display': 'none' })
        $('#mobile_wrap').css({ 'display': 'block' })
    } else {

    }


    /* mobile 영역 matchmedia  아래로 피시*/

    $('.vw_wrap').hide();
    /*     $('#nav-toggle').click(function () {
            $(this).addClass('active');
            $('.vw_wrap').fadeIn();
        })
        $('.active').click(function () {
            $('.vw_wrap').hide();
        }) */
    $('#nav-toggle').click(function () {
        $('.vw_wrap').toggle();
        var i = 0;
        for (i == 0; i < 1; i++) {
            $('#nav-toggle').addClass('active');
        }
    })/* end */

    $('.active').click(function () {
        $('#nav-toggle').removeClass('active')
    })


    $('.close').click(function () {

        $('#header').hide();

    })/* end */

    $('#main').slick({
        autoplay: true,
        Infinity: true,
        dots: false,
        arrows: true
    })


    $('#sub_banner').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        Infinity: true,
    })

    let = 0;
    $('.icon_box img:last-child').click(function () {
        if (let == 0) {
            $(this).attr("src", "icons/heart-fill.svg");
            let = 1;
        }
        else {
            $(this).attr("src", "icons/heart.svg");
            let = 0;
        }
    })



})/* end */
/* 건드리지 마세요 */