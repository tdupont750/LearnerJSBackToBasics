(function ($) {

    $.fn.customFadeOut = customFadeOut;

    function customFadeOut() {
        var $self = this,
            duration = $self.attr('data-duration') || 3000;

        if (typeof duration === 'string') {
            duration = parseInt(duration, 10);
        }

        $self.fadeOut(duration);

        return $self;
    }

})(jQuery);