(function($) {
    var dataKey = 'initalized-behaviors';

    $.behaviors = globalBehaviors;

    $.fn.behaviors = elementBehaviors;

    $(globalBehaviors);

    function globalBehaviors() {
        var $els = $('[data-behavior]');
        $els.behaviors();
    }

    function elementBehaviors() {
        for (var i = 0; i < this.length; i++) {
            var el = this[i];
            singleElementBehaviors(el);
        }
        return this;
    }

    function singleElementBehaviors(el) {
        var $el = $(el),
            behaviorAttr = $el.attr('data-behavior') || '',
            behaviorList = behaviorAttr.split(',');

        for (var i = 0; i < behaviorList.length; i++) {
            var behaviorName = behaviorList[i].trim(),
                initalizedBehaviors = $el.data(dataKey) || [];

            if (typeof $el[behaviorName] !== 'function') {
                tryLog('Behavior not found: ' + behaviorName);
                continue;
            }

            if (initalizedBehaviors.indexOf(behaviorName) !== -1) {
                continue;
            }

            initalizedBehaviors.push(behaviorName);
            $el.data(dataKey, initalizedBehaviors);

            $el[behaviorName]();
        }
    }

    function tryLog(message) {
        if (console && typeof console.log === 'function') {
            console.log(message);
        }
    }

})(jQuery);
