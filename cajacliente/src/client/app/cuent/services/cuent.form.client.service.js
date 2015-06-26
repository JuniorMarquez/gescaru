(function() {
    'use strict';

    angular
        .module('app.cuent')
        .factory('CuentForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'titular',
                    type: 'input',
                    templateOptions: {
                        label: 'Titular:',
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
