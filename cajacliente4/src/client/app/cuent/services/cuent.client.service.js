(function() {
    'use strict';

    angular
        .module('app.cuent')
        .factory('Cuent', Cuent);

    Cuent.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Cuent($resource, API_BASE_URL) {

        var params = {
            cuentId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/cuent/:cuentId';

        return $resource(API_URL, params, actions);

    }

})();
