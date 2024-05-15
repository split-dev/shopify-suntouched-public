'use strict';

var body = document.body;
var burger = document.querySelector('[data-menu-toggle]');
var mobMenu = document.querySelector('[data-mob-menu]');

document.addEventListener('DOMContentLoaded', function () {

    //header dropdown
    if ($('body').innerWidth() >= 991) {
        $('.list-menu details').on('mouseover', function () {
            $(this).attr('open', 'open');
        });
        $('.list-menu details').on('mouseleave', function () {
            $(this).removeAttr('open');
        });
    }

    //toogle dropdown
    $('body').on('click', '.menu-drawer__inner-subnav strong', function (e) {
        var _this = this;

        $(this).toggleClass('open');
        $(this).next().slideToggle();
        setTimeout(function () {
            $(_this).next().toggleClass('show');
        }, 400);
    });

    //ajax cart add
    $('body').on('click', 'button[name="add"], cart-remove-button', function () {
        setTimeout(function () {
            $.ajax({
                type: 'GET',
                url: 'https://sanaliment.myshopify.com/cart.json',
                dataType: 'json',
                success: function success(data) {
                    var item_count = data.item_count;

                    console.log(item_count);

                    if (item_count > 0) {
                        $('.header__cart .cart-count-bubble').addClass('show');
                        $('.header__cart .count').text(item_count);
                    } else {
                        $('.header__cart .cart-count-bubble').removeClass('show');
                        $('.header__cart .count').text(item_count);
                    }
                }
            });
        }, 300);
    });

    //ajax cart remove
    $('body').on('change', '.quantity__input', function () {
        setTimeout(function () {
            $.ajax({
                type: 'GET',
                url: 'https://sanaliment.myshopify.com/cart.json',
                dataType: 'json',
                success: function success(data) {
                    var item_count = data.item_count;

                    console.log(item_count);

                    if (item_count > 0) {
                        $('.header__cart .cart-count-bubble').addClass('show');
                        $('.header__cart .count').text(item_count);
                    } else {
                        $('.header__cart .cart-count-bubble').removeClass('show');
                        $('.header__cart .count').text(item_count);
                    }
                }
            });
        }, 1000);
    });
});

$('.marquee').marquee({
    pauseOnHover: false,
    allowCss3Support: false,
    duration: 45000,
    css3easing: false,
    startVisible: true
});

// eslint-disable-next-line
var homeReviews = new Swiper('.home-reviews-slider-init', {
    slidesPerView: 1.2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 15,
    pagination: {
        el: ".reviews-swiper-pagination",
        clickable: true
    },
    breakpoints: {
        575: {
            slidesPerView: 1.5,
            spaceBetween: 28,
            centeredSlides: true
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 28,
            centeredSlides: true
        }
    }
});
$(document).ready(function () {
    $('.select2-sort').select2({
        allowClear: true,
        dropdownParent: $('.custom-sort__sort'),
        minimumResultsForSearch: -1,
        escapeMarkup: function escapeMarkup(markup) {
            return markup;
        }

    });
    $('.select2-sort').on('select2:select', function (e) {
        document.querySelector('.select2-sort').dispatchEvent(new Event('change'));
    });
});
$(document).ready(function () {
    $('.select2-collection').select2({
        allowClear: true,
        dropdownParent: $('.custom-sort__mob-nav'),
        minimumResultsForSearch: -1,
        escapeMarkup: function escapeMarkup(markup) {
            return markup;
        }
    });
});

// eslint-disable-next-line
var productReviews = new Swiper('.product-reviews-slider-init', {
    slidesPerView: 1.2,
    spaceBetween: 15,
    pagination: {
        el: ".product-reviews-swiper-pagination",
        clickable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 1.2,
            spaceBetween: 21
        },
        991: {
            slidesPerView: 1.5,
            spaceBetween: 21
        }
    }
});

//sliders
// eslint-disable-next-line
var salesSliderGallery = new Swiper('.gallery-init', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 8,
    preventClicksPropagation: false,
    breakpoints: {
        991: {
            direction: 'vertical',
            slidesPerView: 4,
            spaceBetween: 12
        }
    },
    navigation: {
        nextEl: ".swiper-gallery-button-next",
        prevEl: ".swiper-gallery-button-prev"
    }
});

function openTestimonial(evt, TestimonialName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(TestimonialName).style.display = "flex";
    evt.currentTarget.className += " active";
}

// eslint-disable-next-line
var productTabs = new Swiper('.product-tabs-slider-init', {
    slidesPerView: 2.3,
    spaceBetween: 20,
    preventClicksPropagation: false,
    breakpoints: {
        575: {
            slidesPerView: 3.5,
            spaceBetween: 26,
            preventClicksPropagation: true
        },
        767: {
            slidesPerView: 3.5,
            spaceBetween: 40,
            preventClicksPropagation: true
        },
        991: {
            slidesPerView: 6,
            spaceBetween: 30,
            preventClicksPropagation: false
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 70,
            preventClicksPropagation: false
        }
    }
});

// Map driving-status button
$('.product__result-button').click(function () {
    $('.product__result-img').slideToggle();
    $('.product__result-button').toggleClass('button-active');
});