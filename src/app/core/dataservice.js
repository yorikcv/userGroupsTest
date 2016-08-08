(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q'];
    /* @ngInject */
    function dataservice($http, $q) {
        var service = {
            getUsers: getUsers
        };

        return service;

        function getUsers() {
            return $http.get('app/core/data.json')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return false;
            }
        }
    }
})();
