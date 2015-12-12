(function () {
    'use strict';

    angular
        .module('app.credito').filter("toUpper", function(){
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
        .filter('sumByKey2', function () {
    return function (data, key, key2) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined' || typeof (key2) === 'undefined') {
            return 0;
        }
        var sum = 0;
        var sum2 = 0;
        var total=0;
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i][key]=="compra") {sum += parseInt(data[i][key2]);}
            if (data[i][key]=="traspaso+") {sum += parseInt(data[i][key2]);}
            if (data[i][key]=="traspaso-") {sum2 +=  sum2 += parseInt(data[i][key2]);}           
        }
        total = sum - sum2;
        return total;
    };

})
         .filter('resByKey', function () {
    return function (data, key, key2) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined' || typeof (key2) === 'undefined') {
            return 0;
        }
        var sum = 0;
        var sum2 = 0;
        var total=0;
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i][key]=="compra") {sum += parseInt(data[i][key2]);}
            if (data[i][key]=="traspaso+") {sum += parseInt(data[i][key2]);}
            if (data[i][key]=="traspaso-") {sum2 +=  sum2 += parseInt(data[i][key2]);}           
        }
        total = sum - sum2;
        return total;
    };

})
        .filter('sumByKey3', function () {
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
        .controller('CreditoController', CreditoController);

    CreditoController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Credito',
        'TableSettings',
        'CreditoForm',
        'MyService',
        '$http'];
    /* @ngInject */
    function CreditoController(logger,
        $stateParams,
        $location,
        Credito,
        TableSettings,
        CreditoForm,
        MyService,
        $http) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Credito);
        vm.credito = {};
        vm.credito.extra = MyService.data.name;
        vm.credito.id_socio = vm.credito.extra ;
        vm.operaciones = {};
       
 $http.get('http://192.168.0.102:1337/operacionesCcp/?id_socio=' + vm.credito.extra).success(function(respu){
            //console.log("res:", respuesta);



            vm.operaciones = respu.results;
            var sum = 0;
        var sum2 = 0;
        var total=0;

        
       
        });
 

$http.get('http://192.168.0.102:1337/config/55a95c87ebe973e1080ff5f0').success(function(respuesta3){
            //console.log("res:", respuesta);
            vm.configuracion = respuesta3; 
            vm.credito.tasaInteres = vm.configuracion.interesCreditoInterno;


        });
   



         $http.get('http://192.168.0.102:1337/socio/' + vm.credito.extra).success(function(respuesta4){
            //console.log("res:", respuesta);
            vm.informacion = respuesta4;

        }); 

        vm.setFormFields = function(disabled) {
 
$http.get('http://192.168.0.102:1337/pago/?id_credito=' + $stateParams.creditoId).success(function(respuesta3){
            //console.log("res:", respuesta);
            vm.pagos = respuesta3.results;
        }); 

            vm.formFields = CreditoForm.getFormFields(disabled);


        };

        vm.create = function() {


 $http.get('http://192.168.0.102:1337/config/55a95c87ebe973e1080ff5f0').success(function(respuesta3){
            //console.log("res:", respuesta);
            vm.configuracion = respuesta3; });
   

   
   var a = document.getElementById("numeroDeCcp");  
    var b = vm.configuracion.eqCcp;  
    
    var f = vm.configuracion.interesCreditoInterno; 
    var g = vm.configuracion.numeroMeses;
     
   // aqui puedes hacer validaciones para asegurarte que los valores de A y B sean numeros, etc  
   var c = a.value * b; 
   vm.credito.monto = c /*+ (c * d/100)*/;
   var d = c + ((c * ((f/360)*(30*g))));
   vm.credito.eqCcp = vm.configuracion.eqCcp; 
   vm.credito.montoInteres = ((c * ((f/360)*(30*g))))/100;
   vm.credito.interes = ((vm.credito.tasaInteres / 360)*(30*vm.credito.numeroMeses)) 
* (vm.credito.numeroDeCcp * vm.configuracion.eqCcp)/100;

  



            // Create new Credito object
            var credito = new Credito(vm.credito);

            // Redirect after save
            credito.$save(function(response) {
                logger.success('Solicitud creada');
                $location.path('/socio/'+ vm.credito.id_socio );
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });

            MyService.data.extra2 = vm.credito.id;
            MyService.data.extra = vm.credito.id_socio;
            MyService.data.extra3 = parseInt( vm.credito.montoInteres);
        };
vm.buscar = function() {
         


                      
                      
 $http.get("http://192.168.0.102:1337/socio?cedula=" + vm.cedula).success(function(respuesta){
            //console.log("res:", respuesta);
            var bandera="no";
            var dato="";
            vm.info = respuesta.results;
            if (vm.info[0].id==""){
 alert("Cedula no encontrada");

          }
        if  (vm.info[0].id !== undefined){
            vm.credito.id_socioFiador=vm.info[0].id;}
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

 
        };

vm.calculo = function(credito) {

     
   $http.get('http://192.168.0.102:1337/config/55a95c87ebe973e1080ff5f0').success(function(respuesta3){
            //console.log("res:", respuesta);
            vm.configuracion = respuesta3; });
   
   var a = document.getElementById("numeroDeCcp");  
    var b = vm.configuracion.eqCcp; 
    var f = vm.configuracion.interesCreditoInterno; 
     var g = vm.configuracion.numeroMeses;
   // aqui puedes hacer validaciones para asegurarte que los valores de A y B sean numeros, etc  
   var c = a.value * b; 
   var d = c + ((c * f)/100);
   vm.credito.monto = c;
   vm.credito.eqCcp = vm.configuracion.eqCcp; 
 vm.credito.montoInteres = (c * ((f/360)*(30*g)))/100;
};    
        // Remove existing Credito
        vm.remove = function(credito) {

            if (credito) {
                credito = Credito.get({creditoId:credito.id}, function() {
                    credito.$remove(function() {
                        logger.success('Credito deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.credito.$remove(function() {
                    logger.success('Credito deleted');
                    $location.path('/credito');
                });
            }

        };
vm.aperturar = function() { 
            MyService.data.extra2 = vm.credito.id;
            MyService.data.extra = vm.credito.id_socio;
            MyService.data.extra5 = vm.credito.montoInteres;
            MyService.data.x = "si";
        };
vm.aperturar2 = function() { 
            MyService.data.extra2 = vm.credito.id;
            MyService.data.extra = vm.credito.id_socio;
            MyService.data.x = "no";
            MyService.data.dato= vm.credito.monto;
            
        };
        // Update existing Credito
        vm.update = function() {
            var credito = vm.credito;

            credito.$update(function() {
                logger.success('Credito updated');
                $location.path('credito/' + credito.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewCredito = function() {
            vm.credito = Credito.get({creditoId: $stateParams.creditoId});
            vm.setFormFields(true);
        


        };

        vm.toEditCredito = function() {
            vm.credito = Credito.get({creditoId: $stateParams.creditoId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {

            //logger.info('Activated Credito View');
        }
    }

})();
