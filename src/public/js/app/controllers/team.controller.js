/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .controller("Team", TeamController);

    TeamController.$inject = ["$rootScope", "teamService"];

    function TeamController($rootScope, teamService) {
        var T = this;
        console.log("Team controller");
    }
}());