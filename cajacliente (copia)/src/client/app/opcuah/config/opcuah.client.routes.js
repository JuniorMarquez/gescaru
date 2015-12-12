(function() {
    'use strict';

    angular
        .module('app.opcuah')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listOpcuah',
                config: {
                    url: '/opcuah',
                    templateUrl: 'app/opcuah/views/list.html',
                    controller: 'OpcuahController',
                    controllerAs: 'vm',
                    title: 'List Opcuahs',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-exchange"></i> Op. Cuenta de ahorro'
                    }
                }
            },
            {
                state: 'createOpcuah',
                config: {
                    url: '/opcuah/create',
                    templateUrl: 'app/opcuah/views/create.html',
                    controller: 'OpcuahController',
                    controllerAs: 'vm',
                    title: 'Create Opcuah'
                }
            },
            {
                state: 'createOpcuah1',
                config: {
                    url: '/opcuah/create1',
                    templateUrl: 'app/opcuah/views/create1.html',
                    controller: 'OpcuahController',
                    controllerAs: 'vm',
                    title: 'Create Opcuah'
                }
            },
            {
                state: 'createOpcuah2',
                config: {
                    url: '/opcuah/create2',
                    templateUrl: 'app/opcuah/views/create2.html',
                    controller: 'OpcuahController',
                    controllerAs: 'vm',
                    title: 'Create Opcuah'
                }
            },

            {
                state: 'viewOpcuah',
                config: {
                    url: '/opcuah/:opcuahId',
                    templateUrl: 'app/opcuah/views/view.html',
                    controller: 'OpcuahController',
                    controllerAs: 'vm',
                    title: 'View Opcuah'
                }
            },
            {
                state: 'editOpcuah',
                config: {
                    url: '/opcuah/:opcuahId/edit',
                    templateUrl: 'app/opcuah/views/edit.html',
                    controller: 'OpcuahController',
                    controllerAs: 'vm',
                    title: 'Edit Opcuah'
                }
            }
        ];
    }
})();
