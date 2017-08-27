/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("TeamIndex", TeamIndexController);

    TeamIndexController.$inject = ["$rootScope"];

    function TeamIndexController($rootScope) {
        var Ti = this;

        Ti.title = "My Team";
    }
}());