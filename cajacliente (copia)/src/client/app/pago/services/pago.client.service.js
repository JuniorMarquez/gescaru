(function() {
    'use strict';

    angular
        .module('app.pago')
        .factory('Pago', Pago);

    Pago.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Pago($resource, API_BASE_URL) {

        var params = {
            pagoId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/pago/:pagoId';

        return $resource(API_URL, params, actions);

    }

})();
