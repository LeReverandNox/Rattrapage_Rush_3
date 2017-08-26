/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("Index", IndexController);

    IndexController.$inject = ["$rootScope"];

    function IndexController($rootScope) {
        var I = this;

        I.title = "Wakemon";
    }
}());