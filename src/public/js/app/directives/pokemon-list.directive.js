/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .directive("pokemonList", pokemonListDirective);

    function pokemonListDirective() {
        var directive = {
            restrict: "EA",
            link: link,
            templateUrl: "/partials/pokemon-list.html",
            controller: "PokemonList",
            controllerAs: "P",
            bindToController: true
        };

        return directive;

        function link(scope, element, attr) {
        }
    }
}());