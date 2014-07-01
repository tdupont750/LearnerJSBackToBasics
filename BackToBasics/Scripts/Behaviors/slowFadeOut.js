(function ($) {

    $.fn.slowFadeOut = slowFadeOut;

    function slowFadeOut() {
        var $self = this;

        $self.fadeOut(3000);

        return $self;
    }

})(jQuery);
