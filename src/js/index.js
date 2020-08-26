import '../scss/main.scss';
import 'intersection-observer';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';
import 'slick-carousel';
import 'nouislider';

$(window).on('load', function () {
    let b = $('body');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        b.addClass('ios');
    } else {
        b.addClass('web');
    }

    b.removeClass('loaded');

    let h = $('header.header');
    $('.main-wrapper').css('padding-top', h.height());
});

const scrollTop = $('.scroll-top');

$(function () {
    const imagesAll = document.querySelectorAll('img[data-src]');
    let imgObserve = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio >= 0 && entry.target.hasAttribute('data-src')) {
                let current = entry.target;
                let source = current.getAttribute('data-src');

                current.setAttribute('src', source);
                current.removeAttribute('data-src');
            }
        });
    });
    if (imagesAll.length > 0) {
        imagesAll.forEach(function (image) {
            imgObserve.observe(image);
        });
    }

    // main-slider
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
        // autoplay: true,
        // autoplaySpeed: 3000,
    });

    // button scroll to top
    scrollTop.click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 500);

        return false;
    });
});

$(window).on('scroll', function (e) {
    let yOffset = window.pageYOffset;
    let header = $('header.header');

    if (yOffset > 0) {
        header.addClass('bg-light');
        header.find('.row').removeClass('py-lg-4');
        header.find('.row').addClass('py-lg-2');
        // $('.logo img').attr('src', './img/logo-h.svg');
        $('.callback-header__number').removeClass('mb-lg-3');
        $('.callback-header__modal-btn').removeClass('d-inline-block');
        $('.callback-header__modal-btn').addClass('d-none');
    }
    else {
        header.removeClass('bg-light');
        header.find('.row').removeClass('py-lg-2');
        header.find('.row').addClass('py-lg-4');
        // $('.logo img').attr('src', './img/logo.svg');
        $('.callback-header__number').addClass('mb-lg-3');
        $('.callback-header__modal-btn').removeClass('d-none');
        $('.callback-header__modal-btn').addClass('d-inline-block');
    }

    if (yOffset >= 900) scrollTop.addClass('active'); else scrollTop.removeClass('active');
});