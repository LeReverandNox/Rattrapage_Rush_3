/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .directive("team", teamDirective);

    function teamDirective() {
        var directive = {
            restrict: "EA",
            link: link,
            templateUrl: "/partials/team.html",
            controller: "Team",
            controllerAs: "T",
            bindToController: true
        };

        return directive;

        function link(scope, element, attr) {
        }
    }
}());