(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(configure);
    core.run(run);

    configure.$inject = ['$routeProvider'];

    function configure($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/userGroups/user-groups.html',
                controller: 'UserGroupsController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
    

    run.$inject = ['$rootScope'];

    function run($rootScope) {
        function routeChangeStart(event, next, current) {
            $rootScope.showLoading = true;
        }

        function routeChangeSuccess(event, next, current) {
            $rootScope.showLoading = false;
        }

        function routeChangeError(event, next, current) {
            $rootScope.showLoading = false;
            alert("Something wrong(");
        }

        $rootScope.$on("$routeChangeStart", routeChangeStart);
        $rootScope.$on("$routeChangeSuccess", routeChangeSuccess);
        $rootScope.$on("$routeChangeError", routeChangeError);

    }

})();
