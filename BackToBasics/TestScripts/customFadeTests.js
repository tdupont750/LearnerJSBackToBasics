/// <reference path="~/Scripts/jquery-1.10.2.js" />
/// <reference path="~/Scripts/Behaviors/customFade.js" />

test('Custom Fade Out', function () {
    var el = $.parseHTML('<h2 data-opacity="0" data-duration="0">Title</h2>'),
        $el = $(el),
        opacity;

    opacity = $el.css('opacity');
    QUnit.equal(opacity, "1");

    $el.customFade();

    opacity = $el.css('opacity');
    QUnit.equal(opacity, "0");
});

test('Custom Fade In', function () {
    var el = $.parseHTML('<h2 style="opacity: 0;" data-opacity="1" data-duration="0">Title</h2>'),
        $el = $(el),
        opacity;

    opacity = $el.css('opacity');
    QUnit.equal(opacity, "0");

    $el.customFade();

    opacity = $el.css('opacity');
    QUnit.equal(opacity, "1");
});