(function () {
    'use strict';

    angular
        .module('app.cuent')
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
         .filter('sumByKey', function () {
    return function (data, key) {
        if (typeof (data) === 'undefined' ) {
            return 0;
        }
        var sum = 0;
        total = 0;
        for (var i = data.length - 1; i >= 0; i--) {
           sum += parseInt(data[i][key]);
            }
        total = sum ;
        return total;
    };
})

        .controller('CuentController', CuentController);

    CuentController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Cuent',
        'TableSettings',
        'CuentForm',
        'MyService',
        '$http'];
    /* @ngInject */
    function CuentController(logger,
        $stateParams,
        $location,
        Cuent,
        TableSettings,
        CuentForm,
        MyService,
        $http) {

        var vm = this;
      
        vm.tableParams = TableSettings.getParams(Cuent);
        vm.cuent = {};
        vm.cuent.extra = MyService.data.name;
        vm.cuent.id_socio = MyService.data.extra;
        vm.cuent.titular = MyService.data.nombres;
        vm.cuent.titularap = MyService.data.apellidos;
        vm.oper={};
        var d = new Date()
       var randomnumber=Math.floor((Math.random() * 9999999) + 99999999);
        vm.cuent.numeroCuenta = randomnumber*parseInt(vm.cuent.id_socio);
        vm.setFormFields = function(disabled) {
            vm.formFields = CuentForm.getFormFields(disabled);
            $http.get('http://192.168.0.102:1337/opcuah/?id_cuenta=' + $stateParams.cuentId).success(function(respuesta3){
            //console.log("res:", respuesta);
            vm.operacionesPorCuenta = respuesta3.results;
        }); 
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
         vm.create2 = function() {
            // Create new Cuent object
            var cuent = new Cuent(vm.cuent);

            // Redirect after save
            cuent.$save(function(response) {
                logger.success('Cuenta Aperturada');
                $location.path('socio/' + vm.cuent.id_socio);
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
                    logger.success('Cuenta borrada');
                    $location.path('/cuent');
                });
            }

        };

        // Update existing Cuent
        vm.update = function() {
            var cuent = vm.cuent;

            cuent.$update(function() {
                logger.success('Cuenta actualizada');
                $location.path('cuent/' + cuent.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewCuent = function() {
            vm.cuent = Cuent.get({cuentId: $stateParams.cuentId});
            
$http.get('http://192.168.0.102:1337/opcuah/?id_cuenta=' + $stateParams.cuentId).success(function(respuesta9){
            //console.log("res:", respuesta);
            vm.oper = respuesta9.results;
 }); 
            vm.setFormFields(true);
             
       
            

        };
        vm.aperturar = function() { 
            MyService.data.extra2 = vm.cuent.id;
            MyService.data.extra = vm.cuent.id_socio;
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
