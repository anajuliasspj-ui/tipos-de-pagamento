import { Pagamento } from './Pagamento.js';
export class PagamentoBoleto extends Pagamento{
  processar(){
    this.status = "Aguardando compensação"
    console.log("Boleto gerado. Linha digitável: 1234.5678... ")
  }
}
