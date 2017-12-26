(function ($) {
    $(function () {
        var VISIBLE = 'visible';
        var $sidebar = $('.menu');
        var $screen = $('.screen');

        $('.mobile-menu').on('click', '#mobile_menu', function (e) {
            e.preventDefault();
            $screen.addClass(VISIBLE).on('click', function (e) {
                $(this).removeClass(VISIBLE);
            });
        });

    });
})(jQuery);
