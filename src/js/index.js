import '../scss/main.scss';
import '../img/map-logo.svg';
import '../img/map-01.svg';
import '../img/map-02.svg';
import '../img/map-03.svg';
import '../img/map-04.svg';
import '../img/map-05.svg';
import '../img/map-06.svg';
import '../img/map-07.svg';
import 'intersection-observer';
// import $ from 'jquery';
import 'jquery-ui';
import 'jquery-ui/ui/effect';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/widgets/tabs';
import 'jquery-ui/ui/widgets/selectmenu';
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/ui/widgets/accordion';
import 'jquery-ui/ui/widgets/checkboxradio';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/i18n/datepicker-ru';
import 'jquery-ui-touch-punch';
import 'slick-carousel';
import 'bootstrap';
import 'popper.js';
import IMask from 'imask';
import 'lightgallery';
import 'lg-thumbnail';
import Playerjs from './playerjs.js';

// import svgPathFirst from './svg-path-1_1.json';
// import svgPathSecond from './svg-path-2_2.json';

function headerFixed() {
    let yOffset = window.pageYOffset;
    let mainWrapper = $('.main-wrapper');
    let header = $('header.header');
    let logo = $('.logo');
    let logoMain = logo.data('src');
    let logoMin = logo.data('logo');
    let logoImg = logo.find('img');

    if (yOffset > 0) {
        if (!header.hasClass('position-fixed')) mainWrapper.css('padding-top', header.outerHeight());
        header.addClass('position-fixed');
        header.addClass('bg-light');
        logoImg.attr('src', logoMin);
        header.find('.row').removeClass('py-lg-4');
        header.find('.row').addClass('py-lg-2');
    }
    else {
        if (header.hasClass('position-fixed')) mainWrapper.css('padding-top', 0);
        header.removeClass('position-fixed');
        header.removeClass('bg-light');
        logoImg.attr('src', logoMain);
        header.find('.row').removeClass('py-lg-2');
        header.find('.row').addClass('py-lg-4');
    }

    if ($(window).width() < 1080) {
        logoImg.attr('src', logoMain);
    }

    yOffset >= 800 ? $('.scroll-top').addClass('active') : $('.scroll-top').removeClass('active');
}

$(window).on('load', function () {
    let b = $('body');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        b.addClass('ios');
    } else {
        b.addClass('web');
    }

    b.removeClass('loaded');
});

$(function () {
    // Scroll to up
    const scrollTop = $('.scroll-top');
    scrollTop.click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 750);

        return false;
    });

    headerFixed();

    // Scroll event
    document.addEventListener('scroll', headerFixed, {passive: true});
});

$(function () {
    // main slider
    if ($('.main-slider').length) {
        $('.main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }

    // about slider
    if ($('.about-slider').length) {
        $('.about-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            }]
        });
    }

    // about reviews
    if ($('.about-review').length) {
        $('.about-review').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    // about news
    if ($('.about-news__slider').length) {
        $('.about-news__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    // about house sliders
    if ($('.about-house__facade, .about-house__layout').length) {
        $('.about-house__facade, .about-house__layout').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });

        // Sliders switch
        if ($(window).width() > 767) {
            $('.about-house__switch-button').each(function (i, e) {
                if (!$(e).hasClass('active')) {
                    $('.about-house-sliders .slick-slider').eq(i).addClass('position-absolute').fadeOut();
                }
            });
        }
        $('.about-house__switch').on('click', '.about-house__switch-button', function () {
            let indexCurrent = $(this).index();
            let indexOff = indexCurrent > 0 ? indexCurrent - 1 : indexCurrent + 1;
            let sliders = $('.about-house-sliders .slick-slider');

            if (!$(this).hasClass('active')) {
                $('.about-house__switch-button').eq(indexOff).removeClass('active');
                $(this).addClass('active');
                sliders.eq(indexOff).addClass('position-absolute').fadeOut();
                sliders.eq(indexCurrent).removeClass('position-absolute').fadeIn().slick('slickGoTo', 0);
            } else {
                return false;
            }
        });
    }

    // rest slider
    if ($('.rest-tabs__slider').length) {
        $('.rest-tabs__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        dots: true,
                    }
                }
            ]
        });
    }

    // park slider
    if ($('.park__slider').length) {
        $('.park__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
    }

    // filter slider
    if ($('.filter-slider').length) {
        // Filter serial switch
        /*$('.filter-serial').on('click', function () {
            $('.filter-slider').slick('unslick');
            setTimeout(function () {
                $('.filter-slider').slick({
                    arrows: true,
                    dots: false,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    responsive: [
                        {
                            breakpoint: 1080,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: 'unslick'
                        }
                    ]
                });
            }, 1250);
        });*/

        // let slides = $('.filter-slider').find('.filter-slider__item').length;

        $('.filter-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: 'unslick'
                }
            ]
        });

        // Filter switch
        $('.filter-range-box.houses').slideUp(0);

        $('.about-house__switch-button').on('click', function () {
            if ($(this).hasClass('land-btn')) {
                $('.search-plan-section__filter').removeClass('filter-house');
                $('.houses').slideUp(100);
                $('.lands').delay(100).slideDown(100);
            }
            else if ($(this).hasClass('house-btn')) {
                $('.search-plan-section__filter').addClass('filter-house');
                $('.lands').slideUp(100);
                $('.houses').delay(100).slideDown(100);
                $('.filter-slider').slick('slickGoTo', 0);
            }
        });
    }

    $(window).on('load resize', function () {
        if ($(window).width() < 1080) {
            if ($('.mobile-slider').length !== 0) {
                $('.mobile-slider').slick({
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                });
            }

            if ($('.employe-slider').length) {
                $('.employe-slider').slick({
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    responsive: [{
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }]
                });
            }

            if ($('.infrastructure__description-slider').length) {
                $('.infrastructure__description-slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                });
            }
        } else {
            if ($('.mobile-slider.slick-slider').length !== 0) $('.mobile-slider').slick('unslick');

            if ($('.employe-slider.slick-slider').length) $('.employe-slider').slick('unslick');

            if ($('.infrastructure__description-slider.slick-slider').length) $('.infrastructure__description-slider').slick('unslick');
        }
    });
});

$(function () {
    // Modal hash
    $('.modal').on('show.bs.modal', function (e) {
        if (typeof (e.relatedTarget) !== undefined) {
            window.location.hash = $(e.relatedTarget).attr('href');
        }
    });

    // Menu button
    $('.burger-button').on('click', function () {
        $('body').toggleClass('overflow-hidden');
        $('header.header').toggleClass('menu-open');
        $(this).toggleClass('active');
        $(this).prev().toggleClass('active');
    });

    // Form switch
    $('.callback__form-switch').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('hide', 'show');
    });

    // Tabs
    if ($('#tabs').length) {
        let mainTabs = $('#tabs');
        mainTabs.tabs({
            hide: {effect: "fadeOut", duration: 500},
            show: {effect: "fadeIn", duration: 500},
        });
        $('.tab-switch').on('click', function (e) {
            e.preventDefault();
            let val = $(this).attr('href');
            let tab = /\d+/.exec(val);
            let tabIndex = Number(tab[0]) - 1;

            mainTabs.tabs("option", "active", tabIndex);
        });
    }

    // Tabs vertical
    if ($('.vertical-tabs').length) {
        $('.vertical-tabs').tabs({
            // hide: {effect: "fadeOut", duration: 500},
            // show: {effect: "fadeIn", duration: 500},
        })
            .addClass("ui-tabs-vertical ui-helper-clearfix ui-corner-left")
            .removeClass("ui-corner-top");
    }

    // Rest tabs
    if ($('.rest-tabs').length) {
        $('.rest-tabs').tabs({
            /*hide: {effect: "fadeOut", duration: 500},
            show: {effect: "fadeIn", duration: 500},*/
            activate: function (e, ui) {
                $(ui.newPanel).find('.rest-tabs__slider').slick('slickGoTo', 0)
            }
        });
    }

    // Accordion
    if ($('.tabs-accordion').length) {
        $('.tabs-accordion').accordion({
            heightStyle: "content"
        });
    }

    // Slider price
    /*if ($('.calculate__range').length) {
        let rangeSlider = document.querySelectorAll('.calculate__range');
        $.each(rangeSlider, function (index, elem) {
            $(elem).slider({
                range: 'min',
                min: $(this).data('min'),
                max: $(this).data('max'),
                value: Math.round(Number($(this).data('max')) / 2),
                slide: function (event, ui) {
                    let rangeValue = $(this).find('.calculate__range-wrap');
                    let rvWidth = rangeValue[0].offsetWidth;
                    let sliderRange = $(this).find('.ui-slider-range');

                    let srPosition = /\d+/.exec(sliderRange.css('width'));
                    let sliderWidth = /\d+/.exec($(this).css('width'));
                    let rvPosition = Math.round(Number(srPosition[0]) * 100 / Number(sliderWidth[0])) + '%';

                    let a = +rvWidth / 2;
                    let b = +srPosition[0];
                    let sliderWidthVal = +sliderWidth[0];
                    let posValue = (b + a) - sliderWidthVal;

                    if ($(this).hasClass('time-val')) {
                        let years = (ui.value < 2) ? ' год' : (ui.value < 5) ? ' года' : ' лет';
                        let val = ui.value + years;
                        $(this).find('.calculate__range-value').val(val);
                    } else {
                        $(this).find('.calculate__range-value').val(ui.value);
                    }

                    if (a >= b) {
                        rangeValue.css({
                            left: a + 'px',
                        });
                    }
                    else if ((a + b) < sliderWidthVal) {
                        rangeValue.css({
                            left: rvPosition,
                            transform: 'translateX(-50%)',
                        });
                    }
                    else {
                        rangeValue.css('left', 'calc(100% - ' + a + 'px)');
                    }
                },
                change: function (event, ui) {
                    let rangeValue = $(this).find('.calculate__range-wrap');
                    let rvWidth = rangeValue[0].offsetWidth;
                    let sliderRange = $(this).find('.ui-slider-range');

                    let srPosition = /\d+/.exec(sliderRange.css('width'));
                    let sliderWidth = /\d+/.exec($(this).css('width'));
                    let rvPosition = Math.round(Number(srPosition[0]) * 100 / Number(sliderWidth[0])) + '%';

                    let a = +rvWidth / 2;
                    let b = +srPosition[0];
                    let sliderWidthVal = +sliderWidth[0];
                    let posValue = (b + a) - sliderWidthVal;

                    if ($(this).hasClass('time-val')) {
                        let years = (ui.value < 2) ? ' год' : (ui.value < 5) ? ' года' : ' лет';
                        let val = ui.value + years;
                        $(this).find('.calculate__range-value').val(val);
                    } else {
                        $(this).find('.calculate__range-value').val(ui.value);
                    }

                    if (a >= b) {
                        rangeValue.css({
                            left: a + 'px',
                        });
                    }
                    else if ((a + b) < sliderWidthVal) {
                        rangeValue.css({
                            left: rvPosition,
                            transform: 'translateX(-50%)',
                        });
                    }
                    else {
                        rangeValue.css('left', 'calc(100% - ' + a + 'px)');
                    }
                }
            });

            let sliderRange = $(elem).find('.ui-slider-range');
            let srLeft = sliderRange.offsetLeft;
            let srWidth = sliderRange.offsetWidth;
            let srRight = srLeft + srWidth;

            let rangeValue = $(elem).find('.calculate__range-wrap');
            let rvLeft = rangeValue.offsetLeft;
            let rvWidth = rangeValue.offsetWidth;
            let rvRight = rvLeft + rvWidth;

            let rangePos = /\d+/.exec(sliderRange.css('width'));

            if ($(elem).hasClass('time-val')) {
                let currentVal = $(elem).slider('option', 'value');
                let years = (currentVal < 2) ? ' год' : (currentVal < 5) ? ' года' : ' лет';
                let value = currentVal + years;
                $(elem).find('.calculate__range-value').val(value);
            }
            else {
                $(elem).find('.calculate__range-value').val($(elem).slider('option', 'value'));
            }

            if (rvLeft <= srLeft) {
                rangeValue.css('left', '0%');
            }
            else if (rvRight >= srRight) {
                rangeValue.css('left', 'auto');
            }
            else {
                rangeValue.css({
                    left: rangePos.input,
                });
            }
        });
        $('.calculate__range-value').on('change', function () {
            let currentValue = e.target.value.replace(/\s/g, '');
            let value = Number(/(\d+)/g.exec(currentValue)[0]);
            $(this).closest('.calculate__range').slider('option', 'value', value);
        });
    }*/

    // Slider range filter
    /*if ($('.filter-range-box__slider').length) {
        let filterRange = document.querySelectorAll('.filter-range-box__slider');
        $.each(filterRange, function (index, elem) {
            let minVal = $(this).data('min');
            let maxVal = $(this).data('max');
            $(elem).slider({
                range: true,
                min: $(this).data('min'),
                max: $(this).data('max'),
                values: [+minVal, +maxVal],
                slide: function (event, ui) {
                    let minValue = ui.values[0];
                    let maxValue = ui.values[1];

                    if (ui.handleIndex === 0) {
                        $(this).find('.filter-range-box__slider-value.value-min').val(minValue);
                    }
                    else {
                        $(this).find('.filter-range-box__slider-value.value-max').val(maxValue);
                    }
                },
                change: function (event, ui) {
                    let minValue = ui.values[0];
                    let maxValue = ui.values[1];

                    if (ui.handleIndex === 0) {
                        $(this).find('.filter-range-box__slider-value.value-min').val(minValue);
                    }
                    else {
                        $(this).find('.filter-range-box__slider-value.value-max').val(maxValue);
                    }
                }
            });

            $(this).find('.filter-range-box__slider-value.value-min').val($(elem).slider('option', 'min'));
            $(this).find('.filter-range-box__slider-value.value-max').val($(elem).slider('option', 'max'));
        });
        $('.filter-range-box__slider-value').on('change', function () {
            let currentVal = Number($(this).val());
            if ($(this).hasClass('value-min')) {
                let max = $(this).closest('.filter-range-box__slider').slider('option', 'values');
                $(this).closest('.filter-range-box__slider').slider('option', 'values', [currentVal, max[1]]);
            }
            else if ($(this).hasClass('value-max')) {
                let min = $(this).closest('.filter-range-box__slider').slider('option', 'values');
                $(this).closest('.filter-range-box__slider').slider('option', 'values', [min[0], currentVal]);
            }
        });
    }*/

    // Radio-box
    if ($("input[type='radio']").length) {
        $("input[type='radio']").checkboxradio();
    }

    // Input date
    let datepicker = $('input.datepicker');
    datepicker.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        minDate: new Date(),
        showAnim: 'slideDown'
    });
    datepicker.on('keydown keypress paste', function (e) {
        e.preventDefault();
    });

    // Input select
    $('select.input-select').selectmenu();

    // Input mask
    let element = document.querySelectorAll('.mask-phone');
    element.forEach(function (e) {
        let mask = IMask(e, {
            mask: '{+7}(000)000-00-00',
            lazy: false,
            placeholderChar: '_'
        });

        let placeholder = '+7(';
        e.onfocus = function () {
            if (this.value === placeholder || this.value === '') {
                this.value = placeholder
            }
        };
        e.onblur = function () {
            if (this.value === placeholder) {
                this.value = ''
            }
        };
    });

    // Serial switch
    if ($('.filter-serial').length) {
        $('.filter-serial').on('click', function () {
            if (!$(this).hasClass('active')) {
                $('.filter-serial').removeClass('active');
                $(this).addClass('active');
            }
        });
    }

    // Plans switch
    if ($('.plans__button').length) {
        $('.plans__btn-wrap').on('mouseenter mouseleave', '.plans__button', function () {
            let index = Number($(this).data('index'));
            $('.plans__images-wrap picture').eq(index).toggleClass('hide');
        });

        $('.plans__link').on('mouseenter mouseleave', function () {
            $(".plans__link picture").toggleClass("hide");
            $(this).find('picture').removeClass('hide');
        });
    }

    // Lightgallery
    if ($('#gallery').length) {
        $('#gallery').lightGallery({
            download: false,
            thumbnail: true,
            showThumbByDefault: true
        });
    }

    // Calc switch
    if ($('.offers-calc').length > 0) {
        let sectionCalc = $('.calculate-section');

        sectionCalc.slideUp();
        $('.offers-calc').on('click', function (e) {
            sectionCalc.slideToggle();
            if (!sectionCalc.hasClass('visible')) {
                $('html, body').animate({
                    scrollTop: sectionCalc.offset().top - 40
                });
            }
            sectionCalc.toggleClass('visible');
        });
    }

    if ($('.search-plan-section__switch').length) {
        $('.about-house__switch-button').on('click', function () {
            $('.about-house__switch-button').removeClass('active');
            $(this).addClass('active');
        });
    }

    // Create plan
    /*$('.plan-svg-map svg path').each(function (index, elem) {
        $(elem).attr('d', svgPathFirst.path[index].coordinate)
    });*/

    // Plan
    if ($('.plan-svg-map').length) {
        $('.plan-svg-map svg path, .plan-svg-map svg polygon, .plan-svg-map svg rect').each(function (index) {
            const map = $('.plan-svg-map');
            const popup = $('.map-popup');
            const tooltip = $('.map-tooltip');

            $(this).on('click', function (event) {
                event.stopPropagation();
                let dataNumber = $(this).data('number');
                let dataHouse = $(this).data('house');
                let dataArea = $(this).data('area');
                let dataSize = $(this).data('size');
                let dataPrice = $(this).data('price');
                let dataLand = $(this).data('land');
                let dataLandImg = $(this).data('img');  // popup image
                let dataLandTxt = $(this).data('text'); // popup text

                let currentPointY = event.originalEvent.offsetY;
                let currentPointX = event.originalEvent.offsetX;

                let popWidth = popup.innerWidth() + 95;
                let toolWidth = tooltip.innerWidth() + 95;
                let mapLeft = map.position().left,
                    mapWidth = map.innerWidth(),
                    mapRight = Number(mapLeft + mapWidth);

                if (currentPointX - popWidth <= mapLeft) {
                    popup.removeClass('right').addClass('left');
                    popup.css({
                        'top': currentPointY,
                        'left': currentPointX,
                        'right': 'auto'
                    });
                }
                else if (currentPointX + popWidth >= mapRight) {
                    popup.removeClass('left').addClass('right');
                    popup.css({
                        'top': currentPointY,
                        'right': mapWidth - currentPointX,
                        'left': 'auto'
                    });
                }
                else {
                    popup.removeClass('right').addClass('left');
                    popup.css({
                        'top': currentPointY,
                        'left': currentPointX,
                        'right': ''
                    });
                }

                if (dataHouse !== false && dataHouse !== undefined) {
                    tooltip.css('display', 'none');
                    popup.find('.map-popup__number-val').html(dataNumber);
                    popup.find('.map-popup__home').html(dataHouse).css('display', 'block');
                    popup.find('.map-popup__table-area').html(dataArea);
                    popup.find('.map-popup__table-size').html(dataSize);
                    popup.find('.map-popup__table-price').html(dataPrice);

                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        popup.css('display', 'none');
                    }
                    else {
                        $(this).addClass('active');
                        popup.css('display', 'block');
                    }
                }
                else if (dataHouse === false && dataHouse !== undefined) {
                    tooltip.css('display', 'none');
                    popup.find('.map-popup__number-val').html(dataNumber);
                    popup.find('.map-popup__home').css('display', 'none');
                    popup.find('.map-popup__table-area').html(dataArea);
                    popup.find('.map-popup__table-size').html(dataSize);
                    popup.find('.map-popup__table-price').html(dataPrice);

                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        popup.css('display', 'none');
                    }
                    else {
                        $(this).addClass('active');
                        popup.css('display', 'block');
                    }
                }
                else {
                    popup.css('display', 'none');
                }

                if (dataLand !== undefined) {
                    popup.css('display', 'none');

                    tooltip.css({
                        'top': currentPointY,
                        'left': currentPointX,
                    });

                    tooltip.find('.map-tooltip__image').attr('src', dataLandImg);
                    tooltip.find('.map-tooltip__description-name').text(dataLand);
                    tooltip.find('.map-tooltip__description-text').text(dataLandTxt);

                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        tooltip.css('display', 'none');
                    }
                    else {
                        $(this).addClass('active');
                        tooltip.css('display', 'block');

                        if (currentPointX - toolWidth <= mapLeft) {
                            tooltip.removeClass('right').addClass('left');
                            tooltip.css({
                                'top': currentPointY,
                                'left': currentPointX,
                                'right': 'auto'
                            });
                        }
                        else if (currentPointX + toolWidth >= mapRight) {
                            tooltip.removeClass('left').addClass('right');
                            tooltip.css({
                                'top': currentPointY,
                                'right': mapWidth - currentPointX,
                                'left': 'auto'
                            });
                        }
                        else {
                            tooltip.removeClass('right').addClass('left');
                            tooltip.css({
                                'top': currentPointY,
                                'left': currentPointX,
                                'right': ''
                            });
                        }
                    }
                }
                else {
                    tooltip.css('display', 'none');
                }

                $(this).parent().siblings().find('path').removeClass('active');
                $(this).parent().siblings().find('polygon').removeClass('active');
                $(this).parent().siblings().find('rect').removeClass('active');
                $(this).siblings('path').removeClass('active');
                $(this).siblings('polygon').removeClass('active');
                $(this).siblings('rect').removeClass('active');
            });
        });

        $(document).on('click', function (e) {
            e.stopPropagation();
            $('.map-popup').css('display', 'none');
            $('.map-tooltip').css('display', 'none');
            $('.plan-svg-map svg path, .plan-svg-map svg polygon, .plan-svg-map svg rect').removeClass('active');
        });

        $('.map-popup, .map-tooltip').on('click', function (e) {
            e.stopPropagation();
        });
    }

    function PlayerReady() {
        alert("ready");
    }

    // Lazy load
    const imagesAll = document.querySelectorAll('img[data-src]');
    const iframes = document.querySelectorAll('.video-preview');

    let imgObserve = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0 && entry.target.hasAttribute('data-src')) {
                let current = entry.target;
                let source = current.getAttribute('data-src');

                current.setAttribute('src', source);
                current.removeAttribute('data-src');
            }
        });
    });
    let observerFrame = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            /*if (entry.intersectionRatio > 0 && entry.target.hasAttribute('data-src')) {
                let source = entry.target.getAttribute('data-src');

                entry.target.children[0].remove();
                entry.target.removeAttribute('data-src');
                entry.target.classList.remove('video-preview');
                var player = new Playerjs({id:"player", file:'http://sequoia.arttimeweb.com/wp-content/themes/sequoia/video/video-about.mp4', replace:"video", ready:PlayerReady});
                console.log('./' + source);
                console.log(player);
            }*/
            if (entry.intersectionRatio > 0 && entry.target.hasAttribute('data-src')) {
                let newFrame = document.createElement('iframe');
                let source = entry.target.getAttribute('data-src');

                newFrame.setAttribute('src', source);
                newFrame.setAttribute('allowfullscreen', '1');

                newFrame.onload = function () {
                    entry.target.remove();
                };

                entry.target.parentNode.appendChild(newFrame);
            }
        });
    });

    if (imagesAll.length > 0) {
        imagesAll.forEach(function (image) {
            imgObserve.observe(image);
        });
    }
    if (iframes.length > 0) {
        iframes.forEach(function (frame) {
            observerFrame.observe(frame);
        });
    }

    /*const maps = document.querySelectorAll('[id^="map"]');
    let mapObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0 && !entry.target.classList.contains('active')) {
                if ($('#map').length) {
                    $('#map').children('picture').remove();
                    ymaps.load().then(maps => {
                        const myMap = new maps.Map('map', {
                            center: center,
                            zoom: 11
                        }, {
                            searchControlProvider: 'yandex#search'
                        });

                        myMap.behaviors.disable('scrollZoom');
                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                            myMap.behaviors.disable('drag');
                        }

                        // Контейнер для меню.
                        const menu = $('.map-switcher');

                        function setDefaultGroup(item) {
                            let defaultPlacemark = new ymaps.Placemark(item.coordinate, {hintContent: item.itemHint}, item.options);

                            myMap.geoObjects.add(defaultPlacemark);
                        }
                        function setDefaultPlacemark(option, item) {
                            let defPlacemark = new ymaps.Placemark(item.coordinates, {hintContent: item.name}, option);

                            myMap.geoObjects.add(defPlacemark);
                        }
                        function createDefaultGroup() {
                            for (let i = 0; i < defaultGroup.length; i++) {
                                setDefaultGroup(defaultGroup[i]);
                            }
                        }
                        function createDefaultPlacemark() {
                            for (let i = 0; i < groups.length; i++) {
                                setDefaultPlacemark(groups[i].opt, groups[i].items[0]);
                            }
                        }
                        function createMenuGroup(group) {
                            // Пункт меню.
                            const menuItem = $('<li><button type="button" class="map-switcher__button">' + group.name + '</button></li>');

                            // Коллекция для геообъектов группы.
                            const collection = new ymaps.GeoObjectCollection(null, group.opt);

                            // Добавляем коллекцию на карту.
                            /!*myMap.geoObjects.add(collection);*!/

                            // Добавляем пункт в меню.
                            menuItem.appendTo(menu)
                                .find('button')
                                .bind('click', function () {
                                    // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
                                    $('.map-switcher__button').removeClass('active');
                                    if (collection.getParent()) {
                                        myMap.geoObjects.remove(collection);
                                        createDefaultGroup();
                                        createDefaultPlacemark();
                                    } else {
                                        $(this).toggleClass('active');
                                        myMap.geoObjects.removeAll().add(collection);
                                        createDefaultGroup();
                                    }

                                    // Выставляем масштаб карты чтобы были видны все группы.
                                    myMap.setBounds(myMap.geoObjects.getBounds());
                                });

                            for (let j = 0, m = group.items.length; j < m; j++) {
                                createSubMenu(group.opt, group.items[j], collection);
                            }
                        }
                        function createSubMenu(option, item, collection) {
                            // Создаем метку.
                            const placemark = new ymaps.Placemark(item.coordinates, {hintContent: item.name}, option);

                            // Добавляем метку в коллекцию.
                            collection.add(placemark);
                        }

                        // Создаём меню фильтрации
                        for (let i = 0, l = groups.length; i < l; i++) {
                            createMenuGroup(groups[i]);
                        }

                        // Добавляем обязательные элементы
                        createDefaultGroup();
                        createDefaultPlacemark();

                        myMap.setBounds(myMap.geoObjects.getBounds());
                    }).catch(error => console.log('Failed to load Yandex Maps', error));
                }
                else if ($('#map-contact').length) {
                    $('#map-contact').children('picture').remove();

                    ymaps.load().then(maps => {
                        const contactMap = new maps.Map('map-contact', {
                            center: center,
                            zoom: 11
                        }, {
                            searchControlProvider: 'yandex#search'
                        });

                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                            contactMap.behaviors.disable('drag');
                        }
                        else {
                            contactMap.behaviors.disable('scrollZoom');
                        }

                        const myPlacemark = new ymaps.Placemark(contactMap.getCenter(), {
                            hintContent: 'Николино Парк'
                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: './../img/map-logo.svg',
                            iconImageSize: [86, 69],
                            iconImageOffset: [-43, -34]
                        });

                        contactMap.geoObjects.add(myPlacemark);

                    }).catch(error => console.log('Failed to load Yandex Maps', error));
                }

                entry.target.classList.add('active');
            }
        });
    });
    if (maps.length > 0) {
        maps.forEach(function (map) {
            mapObserver.observe(map);
        });
    }
    // maps data
    const center = [45.100975, 39.056494];
    const defaultGroup = [
        {
            coordinate: center,
            itemHint: 'Николино Парк',
            options: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-logo.svg',
                iconImageSize: [86, 69],
                iconImageOffset: [-43, -34]
            }
        },
        {
            coordinate: [45.035470, 38.975313],
            itemHint: 'Краснодар',
            options: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-01.svg',
                iconImageSize: [92, 32],
                iconImageOffset: [-46, -16]
            }
        },
        {
            coordinate: [45.033925, 39.139669],
            itemHint: 'Международный аэропорт Краснодар имени Екатерины II',
            options: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-05.svg',
                iconImageSize: [46, 46],
                iconImageOffset: [-23, -23]
            }
        }
    ];
    const groups = [
        {
            name: 'Магазины и ТЦ',
            opt: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-03.svg',
                iconImageSize: [46, 46],
                iconImageOffset: [-23, -23]
            },
            items: [
                {
                    coordinates: [45.102326, 38.984633],
                    name: 'ТЦ Красная Площадь'
                },
                {
                    coordinates: [45.046877, 38.980056],
                    name: 'Центр города'
                }
            ]
        },
        {
            name: 'Школы',
            opt: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-06.svg',
                iconImageSize: [46, 46],
                iconImageOffset: [-23, -23]
            },
            items: [
                {
                    coordinates: [45.093007, 39.107896],
                    name: 'Школа № 62'
                },
                {
                    coordinates: [45.075232, 39.040248],
                    name: 'МАОУ СОШ № 102'
                },
                {
                    coordinates: [45.064867, 39.005232],
                    name: 'МАОУ СОШ № 71'
                }
            ]
        },
        {
            name: 'Детские сады',
            opt: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-06.svg',
                iconImageSize: [46, 46],
                iconImageOffset: [-23, -23]
            },
            items: [
                {
                    coordinates: [45.070515, 39.009106],
                    name: 'Детский сад Комбинированного Вида № 174 Сказочная Страна'
                },
                {
                    coordinates: [45.067221, 39.039640],
                    name: 'Детский сад № 198 Акварелька'
                }
            ]
        },
        {
            name: 'Медицинские учреждения',
            opt: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-04.svg',
                iconImageSize: [46, 46],
                iconImageOffset: [-23, -23]
            },
            items: [
                {
                    coordinates: [45.064085, 39.019790],
                    name: 'Краевая клиническая больница № 1'
                },
                {
                    coordinates: [45.085133, 39.016181],
                    name: 'ГБУЗ поликлиника № 13, Офис врача общей практики'
                }
            ]
        },
        {
            name: 'Спорт и отдых',
            opt: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-02.svg',
                iconImageSize: [46, 46],
                iconImageOffset: [-23, -23]
            },
            items: [
                {
                    coordinates: [45.117417, 38.981204],
                    name: 'Баскет-Холл'
                },
                {
                    coordinates: [45.126327, 39.020100],
                    name: 'Краснодарский ипподром'
                },
                {
                    coordinates: [45.114528, 39.043257],
                    name: 'Аквакомплекс VODAEDA'
                }
            ]
        },
        {
            name: 'Рестораны и кафе',
            opt: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-07.svg',
                iconImageSize: [46, 46],
                iconImageOffset: [-23, -23]
            },
            items: [
                {
                    coordinates: [45.094658, 39.008295],
                    name: 'Golden Villa'
                },
                {
                    coordinates: [45.102817, 38.979449],
                    name: 'Ресторан Nebo'
                }
            ]
        },
        {
            name: 'Фитнес-центры',
            opt: {
                iconLayout: 'default#image',
                iconImageHref: './../img/map-02.svg',
                iconImageSize: [46, 46],
                iconImageOffset: [-23, -23]
            },
            items: [
                {
                    coordinates: [45.079618, 39.012516],
                    name: 'Фитнес-клуб "Digger"'
                },
                {
                    coordinates: [45.106628, 39.012148],
                    name: 'Фитнес-клуб "King Fit"'
                },
                {
                    coordinates: [45.088788, 39.046847],
                    name: 'Спортивный комплекс "LaFitnes"'
                }
            ]
        }
    ];*/
});

/*
$(function () {
    let pathArr = [];

    let elements = document.querySelectorAll('svg path, polygon');

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute('d') !== undefined) {
            let coordinate = elements[i].getAttribute('d');

            let a = {
                "id": i + 1,
                "coordinate": coordinate
            }

            pathArr.push(JSON.stringify(a));
        }
    }

    console.log(pathArr);
});*/
