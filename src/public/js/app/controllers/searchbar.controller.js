/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("Searchbar", SearchbarController);

    SearchbarController.$inject = ["$rootScope", "$scope"];

    function SearchbarController($rootScope, $scope) {
        var S = this;
        S.searchstring = "";

        S.filter = function () {
            $rootScope.$emit("filterPokemonList", S.searchstring);
        }
    }
}());