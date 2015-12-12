(function () {
    'use strict';
angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);
    DashboardController.$inject = [       
    'MyService',
    '$http',
    '$window'];
    function DashboardController(
    MyService,
    $http,
    $window) 
    {
        var vm = this;
        vm.paises={};
        vm.login = {};
        vm.dato={};
        vm.tipoUsuario = {};
        vm.login = function() 
        {
            $http.get('http://192.168.0.102:1337/socio/?usuario=' + vm.login.usuario).success(function(respuesta){
                if (vm.paises === 'undefined'){vm.login.mensaje="usuario no registrado"}
                     if (vm.dato !== vm.login.usuario){vm.login.mensaje="usuario no registrado"}
                vm.paises = respuesta.results;
                vm.dato = vm.paises[0].usuario;
                vm.tipoUsuario= vm.paises[0].tipoUsuario;
                vm.identificador=vm.paises[0].id;
                vm.dato2= vm.paises[0].pass;
                if (vm.login.usuario == vm.dato && vm.login.pass == vm.dato2)
                {
                if (vm.tipoUsuario==="1"){$window.location.href = 'http://192.168.0.102:3001'};
                if (vm.tipoUsuario==="2"){$window.location.href = 'http://192.168.0.102:3002'};
                if (vm.tipoUsuario==="3"){$window.location.href = 'http://192.168.0.102:3003'};
                if (vm.tipoUsuario==="4"){$window.location.href = 'http://192.168.0.102:3004'};
                if (vm.tipoUsuario==="5"){$window.location.href = 'http://192.168.0.102:3005'};

                if (vm.tipoUsuario==="6"){$window.location.href = 'http://192.168.0.102:3006/socio/'+ vm.identificador};
                
                }  else
                {
                    vm.login.mensaje= "por favor verifique los datos y vuelva a intentarlo"
                }
            });
           
        };      
        function activate() 
            {
            }
        activate();
    }
})();














/*
<!--


       
        function activate() {
             var promises = [getPeople(),login()];
            return $q.all(promises).then(function() {
                //logger.info('Activated Dashboard View');
            });
            
            //logger.info('Activated Pago View');
        }
        /*function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                //logger.info('Activated Dashboard View');
            });
        }*//*
        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.socios = data;
                return vm.socios;
                var msg = 'Socios cargados';
                logger.success(msg);
            });
        }
 var vm = this;
      vm.login function() 
        {
       
        return vm.login.mensaje;         
        }
        
    }
})();
--> */