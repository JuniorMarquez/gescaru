(function() {
    'use strict';

    angular
        .module('app.cuent')
        .factory('CuentForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'id_socio',
                    type: 'input',
                    templateOptions: {
                        label: 'Id Socio:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'numeroCuenta',
                    type: 'input',
                    templateOptions: {
                        label: 'Numero de Cuenta:',
                        disabled: disabled
                    }
                },
                 {
                    key: 'createdAt',
                    type: 'input',
                    templateOptions: {
                        label: 'Fecha de Creacion:',
                        disabled: disabled
                    }
                }
            ];
            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
