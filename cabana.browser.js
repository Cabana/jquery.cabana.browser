/*
*   jquery browser utility
*   v0.1
*/

; (function ($) {
    if (!$.Cabana) {
        $.Cabana = {};
    };

    $.Cabana.browser = function (el, myFunctionParam, options) {

        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("Cabana.browser", base);

        base.browser.init = function () {
            base.browser.options = $.extend({}, $.Cabana.browser.defaultOptions, options);
            //init code
        };

        base.browser.init();
    };


    // STATIC METHODS

    $.Cabana.browser.check = function () {

        var _vendor = '';

        if (String(navigator.userAgent.toLowerCase()).indexOf("android") > -1) {
            _vendor = 'android';
        }

        if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/) != null) {
            _vendor = 'iOS';
        }

        if (navigator.userAgent.match(/Windows Phone/i) != null || navigator.userAgent.match(/ZuneWP7/i) != null) {
            _vendor = 'WP';
        }

        if (OperaMobile = navigator.userAgent.match(/Opera Mobi/i) != null) {
            _vendor = 'OperaMobile';
        }

        // IE
        if (eval("/*@cc_on!@*/!1")) {
            _vendor = 'MSIE';
        }

        if (navigator.userAgent.indexOf('AppleWebKit/') > -1) {
            _vendor = 'webkit';
        }

        return _vendor;

    };

    $.Cabana.browser.addHTMLClasses = function () {

        if (navigator.userAgent.indexOf("Firefox") !== -1) {
            $('html').addClass("moz");
        } else {
            $('html').addClass("no-moz");
        }
        if (navigator.userAgent.indexOf("AppleWebKit") !== -1) {
            $('html').addClass("webkit");
        } else {
            $('html').addClass("no-webkit");
        }
        if (navigator.userAgent.indexOf("Android") !== -1) {
            $('html').addClass("android");
        } else {
            $('html').addClass("no-android");
        }
        if (navigator.userAgent.indexOf("iPhone") !== -1) {
            $('html').addClass("iphone");
        } else {
            $('html').addClass("no-iphone");
        }
        if (navigator.userAgent.indexOf("iPad") !== -1) {
            $('html').addClass("ipad");
        } else {
            $('html').addClass("no-ipad");
        }
        if (navigator.userAgent.indexOf("iPad") !== -1 || navigator.userAgent.indexOf("iPhone") !== -1) {
            $('html').addClass("ios");
        } else {
            $('html').addClass("no-ios");
        }
        if (navigator.userAgent.indexOf("Opera") !== -1) {
            $('html').addClass("opera");
        } else {
            $('html').addClass("no-opera");
        }
        if (navigator.userAgent.indexOf("MSIE") !== -1) {
          $('html').addClass("msie");
          if (navigator.userAgent.indexOf("MSIE 9.0") !== -1) {
              $('html').addClass("msie-9");
          } else if (navigator.userAgent.indexOf("MSIE 8.0") !== -1) {
              $('html').addClass("msie-8");
          }
        } else {
          $('html').addClass("no-msie");
        }

    };

    $.fn.Cabana_browser = function 
        (myFunctionParam, options) {
        return this.each(function () {
            (new $.Cabana.browser(this, myFunctionParam, options));
        });
    };

})(jQuery);

/*
Calling it from customer-specific js:
$.Cabana.browser.addHTMLClasses(); // adds browser vendor classnames to html elem
$.Cabana.browser.check(); // checks for the browser. returns string
*/
