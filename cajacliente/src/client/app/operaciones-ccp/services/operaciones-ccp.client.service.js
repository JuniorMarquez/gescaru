(function() {
    'use strict';

    angular
        .module('app.operacionesCcp')
        .factory('OperacionesCcp', OperacionesCcp);

    OperacionesCcp.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function OperacionesCcp($resource, API_BASE_URL) {

        var params = {
            operacionesCcpId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/operacionesCcp/:operacionesCcpId';

        return $resource(API_URL, params, actions);

    }

})();
