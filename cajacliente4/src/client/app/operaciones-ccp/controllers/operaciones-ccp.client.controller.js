(function () {
    'use strict';

    angular
        .module('app.operacionesCcp')
        .filter('sumByKey2', function () {
    return function (data, key, key2) {
        if (typeof (data) === 'undefined' ) {
            return 0;
        }
        var sum = 0;
        var sum2 = 0;
        var total=0;
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i][key]=="compra") {sum += parseInt(data[i][key2]);}
            if (data[i][key]=="traspaso+") {sum += parseInt(data[i][key2]);}
            if (data[i][key]=="traspaso-") {sum2 += parseInt(data[i][key2]);}           
        }
        total = sum - sum2;
        return total;
    };
})
        .controller('OperacionesCcpController', OperacionesCcpController);

    OperacionesCcpController.$inject = ['logger',
        '$stateParams',
        '$location',
        'OperacionesCcp',
        'TableSettings',
        'OperacionesCcpForm',
        'MyService',
        '$http'];
    /* @ngInject */
    function OperacionesCcpController(logger,
        $stateParams,
        $location,
        OperacionesCcp,
        TableSettings,
        OperacionesCcpForm,
        MyService,
        $http) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(OperacionesCcp);
        vm.operacionesCcp = {};
        vm.operacionesCcp2 = {};
        vm.operacionesCcp.extra = MyService.data.name;
        vm.operacionesCcp.id_socio = vm.operacionesCcp.extra ;
        vm.operacionesCcp.tipoOperacion = MyService.data.tipoOperacion;
      $http.get('http://192.168.0.102:1337/operacionesCcp/?id_socio=' + vm.operacionesCcp.id_socio).success(function(respuesta2){
            //console.log("res:", respuesta);
            vm.operaciones = respuesta2.results;

        }); 
        vm.setFormFields = function(disabled) {
            $http.get('http://192.168.0.102:1337/config/55a95c87ebe973e1080ff5f0').success(function(respuesta3){
            //console.log("res:", respuesta);
            vm.configuracion = respuesta3;
            vm.operacionesCcp.precioCcp = vm.configuracion.precioCcp;

        });
            vm.formFields = OperacionesCcpForm.getFormFields(disabled);
        };

vm.create = function() {
            // Create new OperacionesCcp object//
    //linea agregada por mi // 
            vm.operacionesCcp.monto= (parseInt(vm.operacionesCcp.cantidad)*parseInt(vm.configuracion.precioCcp));
            var operacionesCcp = new OperacionesCcp(vm.operacionesCcp);

            
    //ag// 
            
            // Redirect after save
            operacionesCcp.$save(function(response) {
                logger.success('compra de CCP Registrada con exito');
                $location.path('socio/'+vm.operacionesCcp.extra/* response.id*/);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
           
            
           



        };
        vm.create2 = function() {
            // Create new OperacionesCcp object//
    //linea agregada por mi // 
    
            vm.operacionesCcp.monto= -1*(parseInt(vm.operacionesCcp.cantidad)*vm.configuracion.precioCcp);
            var operacionesCcp = new OperacionesCcp(vm.operacionesCcp);

            
    //ag// 
            
            // Redirect after save
            operacionesCcp.$save(function(response) {
                logger.success('Traspaso Registrado');
                $location.path('/socio/'+vm.operacionesCcp.extra);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
            vm.operacionesCcp.monto=(vm.operacionesCcp.monto*-1);
            vm.operacionesCcp.tipoOperacion="traspaso+"
            vm.operacionesCcp.id_socio=vm.operacionesCcp.id_socio2;
            var operacionesCcp = new OperacionesCcp(vm.operacionesCcp);
            operacionesCcp.$save(function(response) {
               
                
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });



        };

        // Remove existing OperacionesCcp
        vm.remove = function(operacionesCcp) {

            if (operacionesCcp) {
                operacionesCcp = OperacionesCcp.get({operacionesCcpId:operacionesCcp.id}, function() {
                    operacionesCcp.$remove(function() {
                        logger.success('OperacionesCcp deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.operacionesCcp.$remove(function() {
                    logger.success('OperacionesCcp deleted');
                    $location.path('/operaciones-ccp');
                });
            }

        };
        vm.cedula=''
        vm.info=[];
          vm.buscar = function() {
          if (vm.cedula==''){
 alert("ingrese una cedula");

          }else{


                      
                      
 $http.get("http://192.168.0.102:1337/socio?cedula=" + vm.cedula).success(function(respuesta){
            //console.log("res:", respuesta);
            var bandera="no";
            var dato="";
            vm.info = respuesta.results;
            if (vm.info[0].id===undefined){
 alert("Cedula no encontrada");

          }
        if  (vm.info[0].id !== undefined){
            vm.operacionesCcp.id_socio2=vm.info[0].id;}
            /*if (vm.cedula!=vm.info[0].id){ alert("Cedula no registrada");}
           */
           
    /*       
      
*/
            /*

            if (vm.info[0].cedula==vm.cedula)
            {
                dato= vm.info[0].id;
            };
            /if (vm.info[0].cedula == vm.cedula) 
                {
                bandera="si";
                }; 
            if (bandera=="si") 
                {

                dato= vm.info[0].id;
                }; /*/
            
            });
}
 
        };
        
        // Update existing OperacionesCcp
        vm.update = function() {
            var operacionesCcp = vm.operacionesCcp;

            operacionesCcp.$update(function() {
                logger.success('OperacionesCcp updated');
                $location.path('operaciones-ccp/' + operacionesCcp.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewOperacionesCcp = function() {
            vm.operacionesCcp = OperacionesCcp.get({operacionesCcpId: $stateParams.operacionesCcpId});
            vm.setFormFields(true);
        };


        activate();

        function activate() {
            //logger.info('Activated OperacionesCcp View');
        }
    }

})();
