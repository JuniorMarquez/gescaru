(function () {
    'use strict';

    angular
        .module('app.socio')
        .controller('SocioController', SocioController);

    SocioController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Socio',
        'TableSettings',
        'SocioForm',
        'MyService'];
       
    /* @ngInject */
    function SocioController(logger,
        $stateParams,
        $location,
        Socio,
        TableSettings,
        SocioForm,
        MyService
        ) {

        var vm = this;
        
        vm.tableParams = TableSettings.getParams(Socio);
        vm.socio = {};
       
            
        
        vm.setFormFields = function(disabled) {
            vm.formFields = SocioForm.getFormFields(disabled);
            
        };

        vm.create = function() {
            // Create new Socio object
            var socio = new Socio(vm.socio);

            // Redirect after save
            socio.$save(function(response) {
                logger.success('Socio created');
                $location.path('socio/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Socio
        vm.remove = function(socio) {

            if (socio) {
                socio = Socio.get({socioId:socio.id}, function() {
                    socio.$remove(function() {
                        logger.success('Socio deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.socio.$remove(function() {
                    logger.success('Socio deleted');
                    $location.path('/socio');
                });
            }

        };

        // Update existing Socio
        vm.update = function() {
            var socio = vm.socio;

            socio.$update(function() {
                logger.success('Socio updated');
                $location.path('socio/' + socio.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewSocio = function() {
            vm.socio = Socio.get({socioId: $stateParams.socioId});
            vm.setFormFields(true);

        };

        vm.aperturar = function() {
            MyService.data.name = vm.socio.createdAt ;
        };


        vm.toEditSocio = function() {
            
            vm.socio = Socio.get({socioId: $stateParams.socioId});
            vm.setFormFields(false);


        };

        activate();

        function activate() {
            //logger.info('Activated Socio View');
        }
    }

})();
