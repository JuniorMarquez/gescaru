(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, logger) {
        var service = {
            getPeople: getPeople,
            getCcp: getCcp,
            getCuentas: getCuentas,
            getMessageCount: getMessageCount,
            getConfig: getConfig
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            return $http.get('http://192.168.0.102:1337/socio')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data.results;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }
        }
         function getCcp() {
            return $http.get('http://192.168.0.102:1337/operacionesccp')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data.results;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }
        }
        function getConfig() {
            return $http.get('http://192.168.0.102:1337/config')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data.results;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }
        }
         function getCuentas() {
            return $http.get('http://192.168.0.102:1337/cuent')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data.results;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }
        }
    }
})();
