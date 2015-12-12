(function () {
    'use strict';

    angular
        .module('app.pago')
        .filter("toUpper", function(){
    return function(text){
        if(text != null){
            return text.toUpperCase();
        }
    }
 })       
        .filter('sumByKey', function () {
    return function (data, key) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
            return 0;
        }
        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            sum += parseInt(data[i][key]);
        }
        return sum;
    };
})
       
        .controller('PagoController', PagoController);

    PagoController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Pago',
        'TableSettings',
        'PagoForm',
        'MyService',
        '$http'];
    /* @ngInject */
    function PagoController(logger,
        $stateParams,
        $location,
        Pago,
        TableSettings,
        PagoForm,
        MyService,
        $http) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Pago);
        vm.pago = {};
        vm.pago.extra = MyService.data.extra;
        vm.pago.id_socio = vm.pago.extra;
        vm.pago.id_credito = MyService.data.extra2;

        if (MyService.data.x == "si"){
            vm.pago.monto = parseInt(MyService.data.extra5);
        }
         if (MyService.data.x == "no"){vm.pago.monto = 0;
            vm.dato= MyService.data.dato;};

        $http.get('http://192.168.0.102:1337/pago/?id_credito=' + vm.pago.id_credito).success(function(respuesta2){
            //console.log("res:", respuesta);
            vm.pagos = respuesta2.results;

        }); 

    
        vm.setFormFields = function(disabled) {
            vm.formFields = PagoForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Pago object
            var pago = new Pago(vm.pago);

            // Redirect after save
            pago.$save(function(response) {
                logger.success('Pago created');
                $location.path('pago/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };
vm.create5= function() {
            // Create new Pago object
            vm.pago.monto = MyService.data.extra3;
            vm.pago.descripcion = "pago de intereses"
            var pago = new Pago(vm.pago);

            // Redirect after save
            pago.$save(function(response) {
                logger.success('Pago created');
                $location.path('socio/' + vm.pago.extra);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };
vm.create2= function() {
            // Create new Pago object
            vm.pago.descripcion = "abono";
            var pago = new Pago(vm.pago);

            // Redirect after save
            pago.$save(function(response) {
                logger.success('Pago created');
                $location.path('socio/' + vm.pago.extra);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };
        

        // Remove existing Pago
        vm.remove = function(pago) {

            if (pago) {
                pago = Pago.get({pagoId:pago.id}, function() {
                    pago.$remove(function() {
                        logger.success('Pago deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.pago.$remove(function() {
                    logger.success('Pago deleted');
                    $location.path('/pago');
                });
            }

        };

        // Update existing Pago
        vm.update = function() {
            var pago = vm.pago;

            pago.$update(function() {
                logger.success('Pago updated');
                $location.path('pago/' + pago.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewPago = function() {
            vm.pago = Pago.get({pagoId: $stateParams.pagoId});
            vm.setFormFields(true);
        };

        vm.toEditPago = function() {
            vm.pago = Pago.get({pagoId: $stateParams.pagoId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Pago View');
        }
    }

})();
