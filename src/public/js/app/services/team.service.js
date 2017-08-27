/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .factory("teamService", teamService);

    teamService.$inject = ["$rootScope", "$http"];

    function teamService($rootScope, $http) {
        var service = {
            loadTeam: loadTeam,
            getTeam: getTeam,
            saveTeam: saveTeam,
            isTeamFull: isTeamFull,
            isPokemonInTeam: isPokemonInTeam,
            addPokemonToTeam: addPokemonToTeam,
            removePokemonFromTeam: removePokemonFromTeam
        };


        var team = [];

        function loadTeam() {
            team = localStorage.getItem('wakemon_team') !== null
                ? JSON.parse(localStorage.getItem('wakemon_team'))
                : [];
        };


        function getTeam() {
            return team;
        }

        function saveTeam () {
            localStorage.setItem('wakemon_team', JSON.stringify(team));
        }

        function isPokemonInTeam (id) {
            var isInTeam = team.find(function (pokemon) {
                return pokemon.id === id;
            });

            return (typeof isInTeam !== "undefined") ? true : false;
        }

        function addPokemonToTeam (pokemon) {
            var id = pokemon.id;
            if (!this.isPokemonInTeam(id) && !this.isTeamFull()) {
                team.push(pokemon);
            }

            this.saveTeam();
        }

        function removePokemonFromTeam (pokemon) {
            var id = pokemon.id;
            if (this.isPokemonInTeam(id)) {
                team = team.filter(function (pokemon) {
                    return pokemon.id !== id;
                });
            }

            this.saveTeam();
        }

        function isTeamFull () {
            if (team.length >= 6) {
                return true;
            } else {
                return false;
            }
        }

        loadTeam();

        return service;
    }
}());