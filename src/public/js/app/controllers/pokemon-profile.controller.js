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
        Pp.isReady = false;
        Pp.isLoading = false

        Pp.showPokemonProfile = function (id) {
            Pp.isReady = false;
            Pp.isLoading = true;
            getPokemonProfile(id)
                .then(function (pokemon) {
                    Pp.pokemon = pokemon;
                    Pp.isReady = true;
                    Pp.isLoading = false;
                })
        };

        function getPokemonProfile (id) {
            var pokemon;
            return pokeApiService.getPokemonById(id)
                .then(function (pkmn) {
                    pokemon = pkmn;
                    return pokemon.species.url;
                })
                .then(pokeApiService.getSpecieByURL)
                .then(function (specie) {
                    pokemon.description = specie.flavor_text_entries[0].flavor_text;
                    return specie.evolution_chain.url;
                })
                .then(function (evChainURL) {
                    return pokeApiService.getEvolutionChainByURL(evChainURL, pokemon.id);
                })
                .then(pokeApiService.getEvolutionsSprites)
                .then(function (evolutions) {
                    pokemon.evolutions = evolutions;
                    return pokemon;
                })
                .catch(function (e) {
                    console.log(e);
                });
        };
        $rootScope.$on("showPokemonProfile", function(e, id) {
            Pp.showPokemonProfile(id);
        });
    }
}());