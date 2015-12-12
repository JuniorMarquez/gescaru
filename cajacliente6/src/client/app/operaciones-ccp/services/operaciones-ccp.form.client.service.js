(function() {
    'use strict';

    angular
        .module('app.operacionesCcp')
        .factory('OperacionesCcpForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'tipoOperacion',
                    type: 'input',
                    templateOptions: {
                        label: 'Tipo de Operacion:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'monto',
                    type: 'input',
                    templateOptions: {
                        label: 'Monto:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'createdAt',
                    type: 'input',
                    templateOptions: {
                        label: 'Fecha:',
                        disabled: disabled
                    }
                },
                {
                    key: 'cantidad',
                    type: 'input',
                    templateOptions: {
                        label: 'Cantidad:',
                        disabled: disabled,
                        required: true
                    }
                },
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
                    key: 'id_usuario',
                    type: 'input',
                    templateOptions: {
                        label: 'Id Usuario:',
                        disabled: disabled,
                        required: true
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
