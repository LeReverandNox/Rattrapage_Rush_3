/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("PokemonProfile", PokemonProfileController);

    PokemonProfileController.$inject = ["$rootScope", "$scope", "pokeApiService"];

    function PokemonProfileController($rootScope, $scope, pokeApiService) {
        var Pp = this;

        $rootScope.$on("showPokemonProfile", function(e, id) {
            console.log(id);
        });
    }
}());