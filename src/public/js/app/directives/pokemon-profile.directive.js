/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .directive("pokemonProfile", pokemonProfileDirective);

    function pokemonProfileDirective() {
        var directive = {
            restrict: "EA",
            link: link,
            templateUrl: "/partials/pokemon-profile.html",
            controller: "PokemonProfile",
            controllerAs: "Pp",
            bindToController: true
        };

        return directive;

        function link(scope, element, attr) {
        }
    }
}());