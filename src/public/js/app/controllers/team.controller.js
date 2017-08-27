/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("Team", TeamController);

    TeamController.$inject = ["$rootScope", "teamService", "$state"];

    function TeamController($rootScope, teamService, $state) {
        var T = this;
        T.pokemons = [];

        T.removePokemonFromTeam = function (pokemon) {
            teamService.removePokemonFromTeam(pokemon);
            getTeam();
        };

        function getTeam() {
            T.pokemons = teamService.getTeam();
        }

        getTeam();
    }
}());