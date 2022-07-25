
class Produto {
    constructor() {
        this.arrayProduto = [];
        this.editId = null;
    }

    salvar(){
        this.id = this.idGenerator();
        let produto =  this.lerDados();
        if(this.validaCampos(produto)){
            if(this.editId == null){
                this.addProduto(produto);
            }else{
                this.atualizar(this.editId,produto)
            }
        }
        this.updateTabela();
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
    updateTabela(){
        let tbody = document.getElementById('tbody');
        let tr = '<tr>'
        let array = this.arrayProduto;
        for(let i=0;i<array.length;i++){
            tr += `<td>${this.arrayProduto[i].id}</td>
            <td>${this.arrayProduto[i].nameProduto}</td>
            <td>${this.arrayProduto[i].valor}</td>
            <td>
                 <img id-data=${this.arrayProduto[i].id} onclick='produto.edit(${JSON.stringify(this.arrayProduto[i])})'src="./images/edit.svg" alt="editar">
                 <img id-data=${this.arrayProduto[i].id} onclick="produto.delete(this)" src="./images/delet.svg" alt="excluir">
            </td>`;
            tr += '</tr>'
        }
        
        tbody.innerHTML = tr;
        this.cancelar();
    }
    idGenerator(){
        let id= Math.floor(Math.random()*1000)
        return id
     }
    cancelar(){
        document.querySelector('#produto').value = '';
        document.querySelector('#preço').value = '';
        document.querySelector('#salvar').innerText = 'Salvar';
        this.editId = null;
    }
    atualizar(id,produto){
        for(let i = 0; i<this.arrayProduto.length; i++){
            if(this.arrayProduto[i].id == id){
                this.arrayProduto[i].nameProduto = produto.nameProduto;
                this.arrayProduto[i].valor = produto.valor;
            };
        }
    }
    edit(dados){
        this.editId = dados.id;
        document.querySelector('#produto').value = dados.nameProduto;
        document.querySelector('#preço').value = dados.valor;
        document.querySelector('#salvar').innerText = 'Atualizar';
    }
    delete(id){
        this.arrayProduto = this.arrayProduto.filter(produto=>produto.id != id.getAttribute('id-data'))
        this.updateTabela();
    }
}
function idGenerator(){
    let id= Math.floor(Math.random()*1000)
    return id
 }
let produto = new Produto();