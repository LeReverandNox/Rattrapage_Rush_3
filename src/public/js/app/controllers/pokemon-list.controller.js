/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("PokemonList", PokemonListController);

    PokemonListController.$inject = ["$rootScope", "$scope", "pokeApiService"];

    function PokemonListController($rootScope, $scope, pokeApiService) {
        var Pl = this;

        Pl.title = "Pokemon List";
        Pl.pokemons = [];

        Pl.showPokemonProfile = function (id) {
            $rootScope.$emit("showPokemonProfile", id);
        };

        init();

        function init () {
            getPokemonList();
        }

        function getPokemonList () {
            pokeApiService.getPokemonList()
                .then(function (pokemons) {
                    Pl.pokemons = pokemons;
                });
        }
    }
}());