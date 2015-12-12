(function() {
    'use strict';

    angular
        .module('app.credito')
        .factory('Credito', Credito);

    Credito.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Credito($resource, API_BASE_URL) {

        var params = {
            creditoId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/credito/:creditoId';

        return $resource(API_URL, params, actions);

    }

})();
