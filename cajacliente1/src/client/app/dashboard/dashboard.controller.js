(function () {
    'use strict';

    angular
        .module('app.dashboard')

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
         .filter('verificador', function () {
    return function (data, key, key2) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined' || typeof (key2) === 'undefined') {
            return 0;
        }
        var sum = 0;
       
       
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i][key] == "compra"){sum += parseInt(data[i][key2]);}
        }
        return sum;
    };
})
        .controller('DashboardController', DashboardController);


    DashboardController.$inject = ['$q', 'dataservice', 'logger','$http'];
 
    function DashboardController($q, dataservice, logger, $http ) {
        var vm = this;
        vm.news = {
            title: 'cajacliente',
            description: 'Gestro de Cajas Rurales ' +
                          'Solucion Cloud Computing'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.ccp = [];
        vm.configuracion =[];
        vm.title = 'Dashboard';
        $http.get('http://192.168.0.102:1337/operacionesCcp').success(function(respuesta4){
            //console.log("res:", respuesta);
            vm.totalccpq = respuesta4.results;

        }); 
       
        activate();

        function activate() {
            
            var promises = [getMessageCount(), getPeople(),getConfig() ,getCuentas(),getCcp()];
            return $q.all(promises).then(function() {
                //logger.info('Activated Dashboard View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
        function getCcp() {
            return dataservice.getCcp().then(function (data) {
                vm.ccp = data;
                return vm.ccp;
            });
        }
        function getConfig() {
            return dataservice.getConfig().then(function (data) {
                vm.configuracion = data;
                return vm.configuracion;
            });
        }
        function getCuentas() {
            return dataservice.getCuentas().then(function (data) {
                vm.cuentas = data;
                return vm.cuentas;
            });
        }

       
        

      
    }



})();
