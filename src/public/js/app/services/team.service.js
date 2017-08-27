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
        };
        console.log("Team service");

        return service;
    }
}());