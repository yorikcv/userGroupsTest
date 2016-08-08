(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q'];
  /* @ngInject */
  function dataservice($http, $q) {
    var service = {
      getPeople: getPeople
    };

    return service;

    function getPeople() {
      return $http.get('/api/people')
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
