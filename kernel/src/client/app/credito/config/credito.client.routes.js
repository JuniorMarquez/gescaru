(function() {
    'use strict';

    angular
        .module('app.credito')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
       {
                state: 'listCredito',
                config: {
                    url: '/credito',
                    templateUrl: 'app/credito/views/list.html',
                    controller: 'CreditoController',
                    controllerAs: 'vm',
                    title: 'List Creditos',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Creditos'
                    }
                }
            },
            {
                state: 'createCredito',
                config: {
                    url: '/credito/create2',
                    templateUrl: 'app/credito/views/create2.html',
                    controller: 'CreditoController',
                    controllerAs: 'vm',
                    title: 'Create Credito'
                }
            },
            {
                state: 'viewCredito',
                config: {
                    url: '/credito/:creditoId',
                    templateUrl: 'app/credito/views/view.html',
                    controller: 'CreditoController',
                    controllerAs: 'vm',
                    title: 'View Credito'
                }
            },
            {
                state: 'editCredito',
                config: {
                    url: '/credito/:creditoId/edit',
                    templateUrl: 'app/credito/views/edit.html',
                    controller: 'CreditoController',
                    controllerAs: 'vm',
                    title: 'Edit Credito'
                }
            }
        ];
    }
})();
