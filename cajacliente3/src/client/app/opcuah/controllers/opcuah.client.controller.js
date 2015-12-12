(function () {
    'use strict';

    angular
        .module('app.opcuah')
        .filter('sumByKey4', function () {
    return function (data, key, key2) {
        if (typeof (data) === 'undefined' ) {
            return 0;
        }
        var sum = 0;
        var sum2 = 0;
        var total=0;
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i][key]=='Deposito') {sum += parseInt(data[i][key2]);}
            if (data[i][key]=='Retiro') {sum2 +=  parseInt(data[i][key2]);}           
        }
        total = parseInt(sum - sum2);
        return total;
    };
})
        .controller('OpcuahController', OpcuahController);


    OpcuahController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Opcuah',
        'TableSettings',
        'OpcuahForm',
        'MyService',
        '$http'];
    /* @ngInject */
    function OpcuahController(logger,
        $stateParams,
        $location,
        Opcuah,
        TableSettings,
        OpcuahForm,
        MyService,
        $http) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Opcuah);
        vm.opcuah = {};

        vm.opcuah.extra = MyService.data.extra;
        vm.opcuah.id_socio = vm.opcuah.extra;
        vm.opcuah.id_cuenta= MyService.data.extra2;
        $http.get('http://192.168.0.102:1337/opcuah/?id_cuenta=' + vm.opcuah.id_cuenta).success(function(respuesta9){
            //console.log("res:", respuesta);
            vm.oper = respuesta9.results;
 });

        vm.setFormFields = function(disabled) {
            vm.formFields = OpcuahForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Opcuah object
            var opcuah = new Opcuah(vm.opcuah);

            // Redirect after save
            opcuah.$save(function(response) {
                logger.success('Opcuah created');
                $location.path('opcuah/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };
        vm.create2 = function() {
            vm.opcuah.tipoOperacion="Retiro";
            // Create new Opcuah object
            var opcuah = new Opcuah(vm.opcuah);

            // Redirect after save
            opcuah.$save(function(response) {
                logger.success('Opcuah created');
                $location.path('cuent/' + vm.opcuah.id_cuenta);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };
        vm.create1 = function() {
            vm.opcuah.tipoOperacion="Deposito";
            // Create new Opcuah object
            var opcuah = new Opcuah(vm.opcuah);
            // Redirect after save
        
            opcuah.$save(function(response) {
                logger.success('Opcuah created');
                $location.path('/cuent/' + vm.opcuah.id_cuenta);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Opcuah
        vm.remove = function(opcuah) {

            if (opcuah) {
                opcuah = Opcuah.get({opcuahId:opcuah.id}, function() {
                    opcuah.$remove(function() {
                        logger.success('Opcuah deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.opcuah.$remove(function() {
                    logger.success('Opcuah deleted');
                    $location.path('/opcuah');
                });
            }

        };

        // Update existing Opcuah
        vm.update = function() {
            var opcuah = vm.opcuah;

            opcuah.$update(function() {
                logger.success('Opcuah updated');
                $location.path('opcuah/' + opcuah.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewOpcuah = function() {
            vm.opcuah = Opcuah.get({opcuahId: $stateParams.opcuahId});
            vm.setFormFields(true);
        };

        vm.toEditOpcuah = function() {
            vm.opcuah = Opcuah.get({opcuahId: $stateParams.opcuahId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Opcuah View');
        }
    }

})();
