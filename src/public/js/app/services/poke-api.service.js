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
            getPokemonList: getPokemonList,
            getPokemonById: getPokemonById,
            getSpecieByURL: getSpecieByURL,
            getEvolutionChainByURL: getEvolutionChainByURL,
            getEvolutionsSprites: getEvolutionsSprites
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

        function getPokemonById(id) {
            return $http({
                method: 'GET',
                url: apiUrl + 'pokemon/' + id
            }).then(function (data) {
                return data.data;
            })
            .catch(function (e) {
                console.log(e);
            });
        }

        function getSpecieByURL(specieURL) {
            return $http({
                method: 'GET',
                url: specieURL
            }).then(function (response) {
                var specie = response.data;

                specie.flavor_text_entries = specie.flavor_text_entries.filter(function (text) {
                    return text.language.name === 'en';
                });

                return specie;
            }).catch(function (e) {
                console.log(e);
            });
        };

        function getEvolutionChainByURL (evChainURL, id) {
            return $http({
                method: 'GET',
                url: evChainURL
            }).then(function (response) {
                var allEvolutions = [];
                var evolutions = {};
                var chain = response.data.chain;

                findEvolutions(chain, allEvolutions);
                findPrevNext(id, allEvolutions, evolutions);

                return evolutions;
            });
        };

        function getEvolutionsSprites(evolutions) {
            var promises = [];
            Object.keys(evolutions).map(function (key) {
                evolutions[key].map(function (ev) {
                    promises.push($http({
                        method: 'GET',
                        url: ev.url
                    }).then(function (response) {
                        ev.sprite = response.data.sprites.front_default;
                    }));
                })
            });

            return new Promise(function (resolve, reject) {
                Promise.all(promises)
                    .then(function () {
                        resolve(evolutions);
                    })
                    .catch(reject);
            });
        }


        function findEvolutions(chain, allEvolutions) {
            chain.species.url = chain.species.url.replace('-species', '');
            chain.species.id = chain.species.url.match(/\/([0-9]+)\//)[1];
            allEvolutions.push([chain.species]);

            if (chain.hasOwnProperty('evolves_to')) {
                if (chain.evolves_to.length === 1) {
                    findEvolutions(chain.evolves_to[0], allEvolutions);
                } else if (chain.evolves_to.length > 1) {
                    var multi = [];
                    chain.evolves_to.forEach(function (evolve) {
                        evolve.species.url = evolve.species.url.replace('-species', '');
                        evolve.species.id = evolve.species.url.match(/\/([0-9]+)\//)[1];
                        multi.push(evolve.species);
                    });
                    allEvolutions.push(multi);
                }
            }
        };

        function findPrevNext(id, allEvolutions, evolutions) {
            allEvolutions.forEach(function (evolution, index) {
                evolution.forEach(function (pokemon) {
                    if (pokemon.id === id.toString()) {
                        if (allEvolutions[index - 1] !== undefined) {
                            evolutions.previouses = allEvolutions[index - 1];
                        }
                        if (allEvolutions[index + 1] !== undefined) {
                            evolutions.nexts = allEvolutions[index + 1];
                        }
                    }
                });
            });
        };

        return service;
    }
}());