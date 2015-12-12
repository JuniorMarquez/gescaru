(function() {
    'use strict';

    angular
        .module('app.pago')
        .factory('PagoForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'fecha',
                    type: 'input',
                    templateOptions: {
                        label: 'Fecha:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'id_credito',
                    type: 'input',
                    templateOptions: {
                        label: 'Id Credito:',
                        disabled: disabled
                    }
                },
                {
                    key: 'monto',
                    type: 'input',
                    templateOptions: {
                        label: 'Monto:',
                        disabled: disabled
                        
                    }
                },
                {
                    key: 'id_socio',
                    type: 'input',
                    templateOptions: {
                        label: 'Id Socio:',
                        disabled: disabled
                        
                    }
                },
                {
                    key: 'id_usuario',
                    type: 'input',
                    templateOptions: {
                        label: 'Id Usuario:',
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
