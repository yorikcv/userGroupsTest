(function() {
  'use strict';

  angular
    .module('app.userGroups')
    .controller('UserGroupsController', UserGroupsController);

  UserGroupsController.$inject = ['$q', 'dataservice'];
  /* @ngInject */
  function UserGroupsController($q, dataservice) {
    var vm = this;
    
    vm.news = {
      title: 'testApp',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };

    vm.people = [];
    vm.title = 'Dashboard';

    //activate();

    function activate() {
      var promises = [getPeople()];
      return $q.all(promises).then(function() {
        console.info('Activated Dashboard View');
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }
  }
})();
