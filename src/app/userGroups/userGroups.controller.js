(function() {
    'use strict';

    angular
        .module('app.userGroups')
        .controller('UserGroupsController', UserGroupsController);

    UserGroupsController.$inject = ['$rootScope', '$scope', '$q', 'underscore', 'dataservice'];
    /* @ngInject */
    function UserGroupsController($rootScope, $scope, $q, underscore, dataservice) {
        var vm = this;

        vm.groups = [];
        vm.registeredUsers = [];
        vm.title = 'User Groups';
        vm.counterOfMemebers = 0;

        vm.getCountOfMembers = getCountOfMembers;
        vm.addGroup = addGroup;
        vm.removeGroup = removeGroup;

        $scope.$watch('vm.groups', getCountOfMembers, true);

        activate();

        function activate() {
            $rootScope.showLoading = true;
            var promises = [getUsers()];
            return $q.all(promises).then(function() {
                $rootScope.showLoading = false;
            });
        }

        function addGroup() {
            var group = {
                title: 'Group ' + (vm.groups.length + 1),
                users: []
            }

            vm.groups.push(group);
        }

        function removeGroup(index) {
            vm.registeredUsers = underscore.union(vm.registeredUsers, vm.groups[index].users);

            vm.groups.splice(index, 1);
        }

        function getCountOfMembers(newVal, oldVal) {
            var counter = 0;
            if (newVal && !angular.equals(newVal, oldVal)) {
                angular.forEach(vm.groups, function(value, index) {
                    counter += value.users.length;
                })

                vm.counterOfMemebers = counter;
            }
        }

        function getUsers() {
            return dataservice.getUsers().then(function(data) {
                vm.groups = data.groups;
                vm.registeredUsers = data.registeredUsers;
            });
        }

    }
})();
