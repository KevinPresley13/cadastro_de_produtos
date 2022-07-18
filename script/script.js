
class Produto {
    constructor() {
        this.id = idGenerator();
        this.name = nameProduto;
        this.valor = 0;
    }

    salvar(){
        console.log(produto.name)
        console.log(produto.id)
    }

    excluir(){

    }
}
function idGenerator(){
    let id= Math.floor(Math.random()*1000)
    return id
 }
let produto = new Produto();