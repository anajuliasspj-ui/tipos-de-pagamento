class Personagem{
    constructor(nome, vida){
        this.nome = nome
        this.vida - vida
    }

    receberDano(quantidade){
        this.vida -= quantidade
        console.log(`${this.nome} recebeu dano. Vida restante: ${this.vida}`)
    }
}

const andre = new Personagem("Andre", 100000)
const lucas = new Personagem("Lucas", 100000)
andre.receberDano(500000)
lucas.receberDano(1)
