/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("PokemonList", PokemonListController);

    PokemonListController.$inject = ["$rootScope", "$scope", "pokeApiService"];

    function PokemonListController($rootScope, $scope, pokeApiService) {
        var P = this;
        var I = $scope.I;

        P.title = "Pokemon List";
        P.pokemons = [];

        P.showPokemon = function (id) {
            $rootScope.$emit("showPokemom", id);
        };

        init();

        function init () {
            getPokemonList();
        }

        function getPokemonList () {
            pokeApiService.getPokemonList()
                .then(function (pokemons) {
                    P.pokemons = pokemons;
                    console.log(P.pokemons);
                });
        }
    }
}());