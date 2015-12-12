(function() {
    'use strict';

    angular
        .module('app.socio')
        .factory('SocioForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'nombres',
                    type: 'input',
                    templateOptions: {
                        label: 'Nombres:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'apellidos',
                    type: 'input',
                    templateOptions: {
                        label: 'Apellidos:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'cedula',
                    type: 'input',
                    templateOptions: {
                        label: 'Cedula:',
                        disabled: disabled,
                        required: true
                    }
                },


// ========================================================== //
{
    "key": "nacionalidad",
    "type": "select",
    "templateOptions": {
      "label": "Nacionalidad",
      "options": [
        {
          "name": "Venezolano(a)",
          "value": "V"
        },
        {
          "name": "Estranjero(a)",
          "value": "E"
        }
      ]
    }
  },



{
    "key": "estadoCivil",
    "type": "select",
    "templateOptions": {
      "label": "Estado Civil",
      "options": [
       {
          "name": "Soltero(a)",
          "value": "Soltero(a)"
        },
        {
          "name": "Casado(a)",
          "value": "casado(a)"
        },
        {
          "name": "Divorciado(a)",
          "value": "Divorciado(a)"
        }
      ]
    }
  },

                

               {
                    key: 'direccion',
                    type: 'input',
                    templateOptions: {
                        label: 'Direccion:',
                        disabled: disabled,
                        required: true
                    }
                },


                 {
                    key: 'telefono',
                    type: 'input',
                    templateOptions: {
                        label: 'Telefono:',
                        disabled: disabled,
                        required: true
                    }
                },


                 {
                    key: 'correo',
                    type: 'input',
                    templateOptions: {
                        label: 'Correo:',
                        disabled: disabled,
                        required: true
                    }
                },


                 {
                    key: 'ingresoMensual',
                    type: 'input',
                    templateOptions: {
                        label: 'Ingreso Mensual:',
                        disabled: disabled,
                        required: true
                    }
                },


                 {
                    key: 'profesion',
                    type: 'input',
                    templateOptions: {
                        label: 'Profesion:',
                        disabled: disabled,
                        required: true
                    }
                },


                 {
                    key: 'gradoDeInstruccion',
                    type: 'input',
                    templateOptions: {
                        label: 'Grado de Instruccion:',
                        disabled: disabled,
                        required: true
                    }
                },
                 {
                    key: 'ocupacion',
                    type: 'input',
                    templateOptions: {
                        label: 'Ocupacion:',
                        disabled: disabled,
                        required: true
                    }
                },
                 {
                    key: 'origenDeIngresos',
                    type: 'input',
                    templateOptions: {
                        label: 'Origen de Ingresos:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'usuario',
                    type: 'input',
                    templateOptions: {
                        label: 'Usuario:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'pass',
                    type: 'input',
                    templateOptions: {
                        label: 'Contraseña',
                        disabled: disabled,
                        required: true
                    }
                }
              








// ========================================================== //




               
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
