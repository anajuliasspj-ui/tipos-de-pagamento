import {Pagamento }from './Pagamento.js';
export class PagamentoPix extends Pagamento{
  constructor(valor, chavePix){
    super(valor)
    this.chavePix = chavePix
  } 
