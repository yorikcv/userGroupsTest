(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('moment', moment)
        .constant('generalConst', generalConst);

    function generalConst() {
        return {
            appTitle: 'User Groups App'
        }
    }
})();
