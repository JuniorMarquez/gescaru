(function() {
    'use strict';

    angular
        .module('app.socio')
        .factory('SocioForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'nombre',
                    type: 'input',
                    templateOptions: {
                        label: 'Nombre:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'apellido',
                    type: 'input',
                    templateOptions: {
                        label: 'Apellido:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'cedula',
                    type: 'input',
                    templateOptions: {
                        label: 'Cedula:',
                        
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
