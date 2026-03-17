export class Pagamento{
  constructor(valor){
    this.valor = valor
    this.status = "Pendente"
  }

 exibirRecibo(){
   return 'Valor: R${this.valor} | Status: ${this.status}`
 }
}
