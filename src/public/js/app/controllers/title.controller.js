/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("Title", TitleController);

    TitleController.$inject = ["$rootScope"];

    function TitleController($rootScope) {
        var T = this;

        T.appTitle = "Wakemon";
    }
}());