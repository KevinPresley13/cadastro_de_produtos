
class Produto {
    constructor() {
        this.id = '';
        this.arrayProduto = [];
    }

    salvar(){
        this.id = this.idGenerator();
        let produto =  this.lerDados();
        if(this.validaCampos(produto)){
        this.addProduto(produto);
       }
       
       console.log(this.arrayProduto)
    }
    lerDados(){
        let produto = {}
        produto.id = this.id;
        produto.nameProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('preço').value;
        return produto;
    }
    validaCampos(produto){
        let msg='';
        if(produto.nameProduto ==''){
            msg += `Digite um produto!!`
        }
        if(produto.valor ==''){
            msg += `Digite um preço!!`
        }
        if(msg != ''){
            alert(msg)
            return false;
        }
        return true;
    }
    addProduto(produto){
        this.arrayProduto.push(produto);
    }
    idGenerator(){
        let id= Math.floor(Math.random()*1000)
        return id
     }
    cancelar(){

    }
}
function idGenerator(){
    let id= Math.floor(Math.random()*1000)
    return id
 }
let produto = new Produto();