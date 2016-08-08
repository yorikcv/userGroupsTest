(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(configure);

    configure.$inject = ['$routeProvider'];

    function configure($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/userGroups/user-groups.html',
                controller: 'UserGroupsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    };

})();
