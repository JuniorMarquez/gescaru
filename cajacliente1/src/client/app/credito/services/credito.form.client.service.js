(function() {
    'use strict';

    angular
        .module('app.credito')
        .factory('CreditoForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'tipoDeCredito',
                    type: 'input',
                    templateOptions: {
                        label: 'Tipo de Credito:',
                        disabled: disabled,
                        required: true
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
                    key: 'fechaDeSolicitud',
                    type: 'input',
                    templateOptions: {
                        label: 'Fecha de solicitud:',
                        disabled: disabled
                    }
                },
                {
                    key: 'fechaDeAprobacion',
                    type: 'input',
                    templateOptions: {
                        label: 'Fecha de Aprobacion:',
                        disabled: disabled
                    }
                },
                {
                    key: 'modalidadDePago',
                    type: 'input',
                    templateOptions: {
                        label: 'Modalidad de pago:',
                        disabled: disabled
                    }
                },
                {
                    key: 'fechaDeVencimiento',
                    type: 'input',
                    templateOptions: {
                        label: 'Fecha de Vancimiento:',
                        disabled: disabled
                    }
                },
                {
                    key: 'proposito',
                    type: 'input',
                    templateOptions: {
                        label: 'Proposito:',
                        disabled: disabled
                    }
                },
                {
                    key: 'id_socioFiador',
                    type: 'input',
                    templateOptions: {
                        label: 'Id Socio fiador:',
                        disabled: disabled
                    }
                },
                {
                    key: 'saldo',
                    type: 'input',
                    templateOptions: {
                        label: 'Saldo:',
                        disabled: disabled
                    }
                },
                {
                    key: 'numeroDeCcp',
                    type: 'input',
                    templateOptions: {
                        label: 'Numero de CCP:',
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
