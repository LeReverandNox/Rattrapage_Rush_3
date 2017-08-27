/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("Index", IndexController);

    IndexController.$inject = ["$rootScope", "$stateParams"];

    function IndexController($rootScope, $stateParams) {
        var I = this;

        I.title = "Wakemon";

        function init() {
            var id = $stateParams.pokemonId | 1;
            if (id) {
                setTimeout(function () {
                    $rootScope.$emit("showPokemonProfile", id);
                }, 1000);
            }

        }

        init();
    }
}());