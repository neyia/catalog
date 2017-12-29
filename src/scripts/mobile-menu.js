(function ($) {
    $(function () {
        var VISIBLE = 'visible';
        var $sidebar = $('.menu');
        var $screen = $('.screen');
        var $menu = $('.sidebar');
        var $closeBtn = $('.sidebar-close__item');

        $('.mobile-menu').on('click', '#mobile_menu', function (e) {
            e.preventDefault();
            function close() {
                $screen.removeClass(VISIBLE);
                $menu.removeClass(VISIBLE);
            }
            $menu.addClass(VISIBLE).find($closeBtn).on('click', function (e) {
                close();
            });
            $screen.addClass(VISIBLE).on('click', function (e) {
                close();
            });
        });

    });
})(jQuery);
