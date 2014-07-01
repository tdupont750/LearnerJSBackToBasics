(function ($) {

    $.fn.customFade = customFade;

    function customFade() {
        var $self = this,
            duration = $self.attr('data-duration') || 3000,
            opacity = $self.attr('data-opacity') || 0;

        if (typeof duration === 'string') {
            duration = parseInt(duration);
        }

        if (typeof opacity === 'string') {
            opacity = parseFloat(opacity);
        }

        $self.fadeTo(duration, opacity);

        return $self;
    }

})(jQuery);
