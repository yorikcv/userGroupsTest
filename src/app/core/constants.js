(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('moment', moment)
        .constant('underscore', _)
        .constant('generalConst', generalConst);

    function generalConst() {
        return {
            appTitle: 'User Groups App'
        }
    }
})();
