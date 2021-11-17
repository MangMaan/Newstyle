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


        $('#mobile_banner').slick({
            autoplay: true,
            arrows: false,
            dots: false,
            Infinity: true
        })
    } else {

    }


    /* mobile 영역 matchmedia  아래로 피시*/

    $('.vw_wrap').hide();
    $('#nav-toggle').click(function () {
        $(this).toggleClass("active")
        $('.vw_wrap').toggle()
    })

    $('.depth2').hide();
    $('.depth1>li').mouseenter(function () {
        $(this).children('.depth2').show(500);
    });
    $('.depth1 li').mouseleave(function () {
        $(this).children('.depth2').hide(500);
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
        dots: true,
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