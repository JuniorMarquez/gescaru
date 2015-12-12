(function() {
    'use strict';

    angular
        .module('app.opcuah')
        .factory('Opcuah', Opcuah);

    Opcuah.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Opcuah($resource, API_BASE_URL) {

        var params = {
            opcuahId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/opcuah/:opcuahId';

        return $resource(API_URL, params, actions);

    }

})();
