(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$rootScope', '$timeout', 'generalConst'];
    /* @ngInject */
    function ShellController($rootScope, $timeout, generalConst) {
        var vm = this;

        vm.navline = {
            title: generalConst.appTitle
        };

        activate();

        function activate() {

        }

    }
})();
