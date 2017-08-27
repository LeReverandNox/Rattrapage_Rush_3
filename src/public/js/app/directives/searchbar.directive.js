/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .directive("searchbar", searchbarDirective);

    function searchbarDirective() {
        var directive = {
            restrict: "EA",
            link: link,
            templateUrl: "/partials/searchbar.html",
            controller: "Searchbar",
            controllerAs: "S",
            bindToController: true
        };

        return directive;

        function link(scope, element, attr) {
        }
    }
}());