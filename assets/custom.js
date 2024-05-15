'use strict';

$(document).ready(function () {
    $('.select2-widget').select2({
        allowClear: true,
        minimumResultsForSearch: -1,
        dropdownParent: $('#select-mob'),
        escapeMarkup: function escapeMarkup(markup) {
            return markup;
        }
    });

    if ($('.copy_link').length) {
        new Clipboard('.copy_link', {
            text: function text() {
                return document.location.href;
            }
        });
    }

    $(".list-article__item").mouseenter(function () {
        var self = $(this);
        self.find('.list-article__item__heading').addClass('active-title');
        self.find('.button__article').addClass('btn-active');
    }).mouseleave(function () {
        var self = $(this);
        self.find('.list-article__item__heading').removeClass('active-title');
        self.find('.button__article').removeClass('btn-active');
    });

    [].forEach.call(document.getElementsByClassName('iframe-lightbox-custom'), function (el) {
        // eslint-disable-next-line
        el.lightbox = new IframeLightbox(el);
    });

    //BEGIN
    $(".accordion__title").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("accordion-active")) {
            $(".accordion__content").slideUp(400);
            $(".accordion__title").removeClass("accordion-active");
            $('.accordion__arrow').removeClass('accordion__rotate');
        }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
        $('.accordion__arrow', this).toggleClass('accordion__rotate');
    });

    function receiveMessage(event) {
        try {
            if (event.type == 'message') {
                var data = JSON.parse(event.data);
                if (data.message == "AskWhaiCartResponse") {
                    window.SLIDECART_UPDATE();
                    window.SLIDECART_OPEN();
                }
            }
        } catch (e) {
            console.log('error', e);
        }
    }

    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event) {
        try {
            if (event.type == 'message') {
                var data = JSON.parse(event.data);
                if (data.message == "AskWhaiCartResponse") {
                    window.SLIDECART_UPDATE();
                    window.SLIDECART_OPEN();
                }
            }
        } catch (e) {
            console.log('error', e);
        }
    }

    window.addEventListener("message", receiveMessage, false);
});