/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .factory("pokeApiService", pokeApiService);

    pokeApiService.$inject = ["$rootScope", "$http"];

    function pokeApiService($rootScope, $http) {
        var service = {
            getPokemonList: getPokemonList
        };

        var apiUrl = "http://pokeapi.co/api/v2/";

        function addIds(pokemons) {
            var i = 0;
            return pokemons.map(function (pokemon) {
                i += 1;
                pokemon.id = i;
                return pokemon;
            });
        };

        function getPokemonList() {
            return $http({
                method: 'GET',
                url: apiUrl + 'pokemon?limit=811'
            }).then(function (data) {
                var pokemons = data.data.results;
                pokemons = addIds(pokemons);

                return pokemons;
            }).catch(function (e) {
                console.log(e);
            });
        }

        return service;
    }
}());