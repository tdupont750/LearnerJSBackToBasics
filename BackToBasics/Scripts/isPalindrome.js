(function($) {

    $.isPalindrome = isPalindrome;

    function isPalindrome(input) {
        if (typeof input !== 'string') {
            return false;
        }

        if (input.length < 1) {
            return false;
        }

        var half = Math.floor(input.length / 2);
        for (var i = 0; i < half; i++) {
            if (input[i] !== input[input.length - i - 1]) {
                return false;
            }
        }

        return true;
    }

})(jQuery);