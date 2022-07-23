
class Produto {
    constructor() {
        this.arrayProduto = [];
    }

    salvar(){
        this.id = this.idGenerator();
        let produto =  this.lerDados();
        if(this.validaCampos(produto)){
        this.addProduto(produto);
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
        array.forEach(produto =>{
            tr += `<td>${produto.id}</td>
                   <td>${produto.nameProduto}</td>
                   <td>${produto.valor}</td>
                   <td>
                        <img id-data=${produto.id} onclick="produto.edit(this)" src="./images/edit.svg" alt="editar">
                        <img id-data=${produto.id} onclick="produto.delete(this)" src="./images/delet.svg" alt="excluir">
                   </td>`;
            tr += '</tr>'
        })
        
        tbody.innerHTML = tr;
        document.querySelector('#produto').value = '';
        document.querySelector('#preço').value = '';
    }
    idGenerator(){
        let id= Math.floor(Math.random()*1000)
        return id
     }
    cancelar(){
        document.querySelector('#produto').value = '';
        document.querySelector('#preço').value = '';
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