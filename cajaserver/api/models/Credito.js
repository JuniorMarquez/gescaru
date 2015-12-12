/**
* Credito.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
tipoDeCredito: 'string',
monto:'integer',
fechaDeSolicitud: 'string',
fechaDeAprobacion: 'string',
modalidadDePago:'string',
fechaDeVencimiento:'string',
proposito:'string',
id_socioFiador: 'string',
id_socio: 'string',
id_usuario:'string',
saldo:'string',
numeroDeCcp:'integer',
tasaInteres: 'integer',
numeroMeses: 'integer',
montoInteres:'string',
interes: 'string',
numero: 'string'
  }
};

