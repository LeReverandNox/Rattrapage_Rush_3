/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .config(materialConfig);

    materialConfig.$inject = ["$mdThemingProvider"];

    function materialConfig($mdThemingProvider) {
        $mdThemingProvider.theme("default")
            .primaryPalette("red")
            .backgroundPalette("grey");
    }
}());