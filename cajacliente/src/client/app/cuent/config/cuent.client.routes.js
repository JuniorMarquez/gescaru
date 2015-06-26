(function() {
    'use strict';

    angular
        .module('app.cuent')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listCuent',
                config: {
                    url: '/cuent',
                    templateUrl: 'app/cuent/views/list.html',
                    controller: 'CuentController',
                    controllerAs: 'vm',
                    title: 'List Cuents',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Cuents'
                    }
                }
            },
            {
                state: 'createCuent',
                config: {
                    url: '/cuent/create',
                    templateUrl: 'app/cuent/views/create.html',
                    controller: 'CuentController',
                    controllerAs: 'vm',
                    title: 'Create Cuent'
                }
            },
            {
                state: 'viewCuent',
                config: {
                    url: '/cuent/:cuentId',
                    templateUrl: 'app/cuent/views/view.html',
                    controller: 'CuentController',
                    controllerAs: 'vm',
                    title: 'View Cuent'
                }
            },
            {
                state: 'editCuent',
                config: {
                    url: '/cuent/:cuentId/edit',
                    templateUrl: 'app/cuent/views/edit.html',
                    controller: 'CuentController',
                    controllerAs: 'vm',
                    title: 'Edit Cuent'
                }
            }
        ];
    }
})();
