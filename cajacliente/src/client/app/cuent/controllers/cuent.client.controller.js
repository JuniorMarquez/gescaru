(function () {
    'use strict';

    angular
        .module('app.cuent')
        .controller('CuentController', CuentController);

    CuentController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Cuent',
        'TableSettings',
        'CuentForm',
        'MyService'];
    /* @ngInject */
    function CuentController(logger,
        $stateParams,
        $location,
        Cuent,
        TableSettings,
        CuentForm,
        MyService
        
        ) {

        var vm = this;
      
        vm.tableParams = TableSettings.getParams(Cuent);
        vm.cuent = {};
        vm.cuent.titular = MyService.data.name;

        vm.setFormFields = function(disabled) {
            vm.formFields = CuentForm.getFormFields(disabled);
            
        };

        vm.create = function() {
            // Create new Cuent object
            var cuent = new Cuent(vm.cuent);

            // Redirect after save
            cuent.$save(function(response) {
                logger.success('Cuent created');
                $location.path('cuent/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Cuent
        vm.remove = function(cuent) {

            if (cuent) {
                cuent = Cuent.get({cuentId:cuent.id}, function() {
                    cuent.$remove(function() {
                        logger.success('Cuent deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.cuent.$remove(function() {
                    logger.success('Cuent deleted');
                    $location.path('/cuent');
                });
            }

        };

        // Update existing Cuent
        vm.update = function() {
            var cuent = vm.cuent;

            cuent.$update(function() {
                logger.success('Cuent updated');
                $location.path('cuent/' + cuent.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewCuent = function() {
            vm.cuent = Cuent.get({cuentId: $stateParams.cuentId});
            vm.setFormFields(true);
        };

        vm.toEditCuent = function() {
            vm.cuent = Cuent.get({cuentId: $stateParams.cuentId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Cuent View');
        }
    }

})();
