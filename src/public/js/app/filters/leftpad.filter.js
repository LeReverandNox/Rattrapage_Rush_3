/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .filter("leftpad", leftpadFilter);

    function leftpadFilter() {
        return function (number, length) {
            if (!number) {
                return number;
            }

            number = '' + number;
            while (number.length < length) {
                number = '0' + number;
            }
            return number;
        };
    }
}());