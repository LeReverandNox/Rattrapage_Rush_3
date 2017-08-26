/*jslint*/
/*global angular*/

(function () {
    "use strict";

    angular
        .module("wakemon")
        .config(appRun);

    appRun.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

    function appRun($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        getStates().forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
        $urlRouterProvider.otherwise("/");
    }

    function getStates() {
        return [
            {
                state: "index",
                config: {
                    url: "/:pokeName?",
                    templateUrl: "partials/index.html",
                    controller: "Index",
                    controllerAs: "I"
                }
            },
            {
                state: "team",
                config: {
                    url: "/team",
                    templateUrl: "partials/team.html",
                    controller: "Team",
                    controllerAs: "T"
                }
            }
        ];
    }
}());