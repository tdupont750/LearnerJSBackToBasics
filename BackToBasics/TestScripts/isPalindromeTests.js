/// <reference path="~/Scripts/jquery-1.10.2.js" />
/// <reference path="~/Scripts/isPalindrome.js" />

test('isPalindrome', function () {
    QUnit.equal($.isPalindrome("a"), true);
    QUnit.equal($.isPalindrome("aa"), true);
    QUnit.equal($.isPalindrome("aba"), true);
    QUnit.equal($.isPalindrome("aabaa"), true);

    QUnit.equal($.isPalindrome(null), false);
    QUnit.equal($.isPalindrome(false), false);
    QUnit.equal($.isPalindrome(""), false);
    QUnit.equal($.isPalindrome("aaba"), false);
    QUnit.equal($.isPalindrome("abaa"), false);
});