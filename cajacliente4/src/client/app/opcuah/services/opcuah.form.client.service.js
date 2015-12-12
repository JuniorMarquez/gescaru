(function() {
    'use strict';

    angular
        .module('app.opcuah')
        .factory('OpcuahForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
            {
    "key": "tipoOperacion",
    "type": "select",
    "templateOptions": {
      "label": "Tipo de Operacion",
      "options": [
        {
          "name": "Deposito",
          "value": "Deposito"
        },
        {
          "name": "Retiro",
          "value": "Retiro"
        }
      ]
    }
  },
  {
                    key: 'monto',
                    type: 'input',
                    templateOptions: {
                        label: 'Monto:',
                        disabled: disabled,
                        type: "number",
                        required: true,
                        min: "0"
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
