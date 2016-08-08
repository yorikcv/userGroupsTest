(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', '$timeout', 'generalConst'];
  /* @ngInject */
  function ShellController($rootScope, $timeout, generalConst) {
    var vm = this;
    
    $rootScope.showLoading = true;

    vm.navline = {
      title: generalConst.appTitle
    };

    activate();

    function activate() {
      hideSplash();
    }

    function hideSplash() {
      //Force a 1 second delay so we can see the splash.
      $timeout(function() {
        $rootScope.showLoading = false;
      }, 1000);
    }
  }
})();
