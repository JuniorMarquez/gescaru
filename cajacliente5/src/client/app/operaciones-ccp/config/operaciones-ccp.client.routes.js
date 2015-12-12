(function() {
    'use strict';

    angular
        .module('app.operacionesCcp')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listOperacionesCcp',
                config: {
                    url: '/operaciones-ccp',
                    templateUrl: 'app/operaciones-ccp/views/list.html',
                    controller: 'OperacionesCcpController',
                    controllerAs: 'vm',
                    title: 'List OperacionesCcps',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-cc"></i> Op. de C.C.P.'
                    }
                }
            },
            {
                state: 'createOperacionesCcp',
                config: {
                    url: '/operaciones-ccp/create',
                    templateUrl: 'app/operaciones-ccp/views/create.html',
                    controller: 'OperacionesCcpController',
                    controllerAs: 'vm',
                    title: 'Create OperacionesCcp'
                }
            },
            {
                state: 'createOperacionesCcp2',
                config: {
                    url: '/operaciones-ccp/create2',
                    templateUrl: 'app/operaciones-ccp/views/create2.html',
                    controller: 'OperacionesCcpController',
                    controllerAs: 'vm',
                    title: 'Create OperacionesCcp2'
                }
            },
            {
                state: 'viewOperacionesCcp',
                config: {
                    url: '/operaciones-ccp/:operacionesCcpId',
                    templateUrl: 'app/operaciones-ccp/views/view.html',
                    controller: 'OperacionesCcpController',
                    controllerAs: 'vm',
                    title: 'View OperacionesCcp'
                }
            },
            {
                state: 'editOperacionesCcp',
                config: {
                    url: '/operaciones-ccp/:operacionesCcpId/edit',
                    templateUrl: 'app/operaciones-ccp/views/edit.html',
                    controller: 'OperacionesCcpController',
                    controllerAs: 'vm',
                    title: 'Edit OperacionesCcp'
                }
            }
        ];
    }
})();
