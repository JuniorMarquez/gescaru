(function() {
    'use strict';

    angular
        .module('app.pago')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listPago',
                config: {
                    url: '/pago',
                    templateUrl: 'app/pago/views/list.html',
                    controller: 'PagoController',
                    controllerAs: 'vm',
                    title: 'List Pagos',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-credit-card"></i> Pagos'
                    }
                }
            },
            {
                state: 'createPago',
                config: {
                    url: '/pago/create',
                    templateUrl: 'app/pago/views/create.html',
                    controller: 'PagoController',
                    controllerAs: 'vm',
                    title: 'Create Pago'
                }
            },
             {
                state: 'createPago3',
                config: {
                    url: '/pago/create3',
                    templateUrl: 'app/pago/views/create3.html',
                    controller: 'PagoController',
                    controllerAs: 'vm',
                    title: 'Create Pago'
                }
            },
            {
                state: 'createPago4',
                config: {
                    url: '/pago/create4',
                    templateUrl: 'app/pago/views/create4.html',
                    controller: 'PagoController',
                    controllerAs: 'vm',
                    title: 'Create Pago'
                }
            },
            {
                state: 'createPago5',
                config: {
                    url: '/pago/create5',
                    templateUrl: 'app/pago/views/create5.html',
                    controller: 'PagoController',
                    controllerAs: 'vm',
                    title: 'Create Pago'
                }
            },
            {
                state: 'createPago2',
                config: {
                    url: '/pago/create2',
                    templateUrl: 'app/pago/views/create2.html',
                    controller: 'PagoController',
                    controllerAs: 'vm',
                    title: 'Create Pago'
                }
            },
            {
                state: 'viewPago',
                config: {
                    url: '/pago/:pagoId',
                    templateUrl: 'app/pago/views/view.html',
                    controller: 'PagoController',
                    controllerAs: 'vm',
                    title: 'View Pago'
                }
            },
            {
                state: 'editPago',
                config: {
                    url: '/pago/:pagoId/edit',
                    templateUrl: 'app/pago/views/edit.html',
                    controller: 'PagoController',
                    controllerAs: 'vm',
                    title: 'Edit Pago'
                }
            }
        ];
    }
})();
