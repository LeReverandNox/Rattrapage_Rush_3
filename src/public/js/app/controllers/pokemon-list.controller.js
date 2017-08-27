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
        Pl.allPokemons = [];
        Pl.pokemons = [];
        Pl.isReady = false;

        Pl.showPokemonProfile = function (id) {
            $rootScope.$emit("showPokemonProfile", id);
        };

        $rootScope.$on("filterPokemonList", function (e, string) {
            filterPokemonList(string);
        });

        init();

        function init () {
            getPokemonList();
        }

        function getPokemonList () {
            Pl.isReady = false;
            pokeApiService.getPokemonList()
                .then(function (pokemons) {
                    Pl.allPokemons = pokemons;
                    Pl.pokemons = pokemons;
                    Pl.isReady = true;
                });
        }

        function filterPokemonList(string) {
            var pokemons = Pl.allPokemons.filter(function (pokemon) {
                if (pokemon.name.substr(0, string.length) === string || pokemon.id.toString().substr(0, string.length) === string) {
                    return pokemon
                }
            });
            Pl.pokemons = pokemons;
        };
    }
}());