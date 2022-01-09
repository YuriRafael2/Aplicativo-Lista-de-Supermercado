var items = [];

document.querySelector("input[type=submit]").addEventListener('click', ()=>{

    var nomeProduto = document.querySelector("input[name=nome_produto]");
    var valorProduto = document.querySelector("input[name=valor_produto]");
    
    if(valorProduto.value == "" || nomeProduto.value == ""){
        alert("insira o nome e valor do item")
    } else{
        items.push({
            nome: nomeProduto.value,
            valor: valorProduto.value,
        })
    }
    

    let listaProdutos = document.querySelector(".lista-produtos")
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map(function(val){

        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+=
        `
        <div class="lista-produtos-single">
            <h3>`+val.nome+`</h3>
            <h3 class="preco-produto"><span>`+val.valor+`</span></h3>
        </div>
        `;

    })

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    valorProduto.value = "";

    let elementoSoma = document.querySelector(".soma-produto h2");
    
    elementoSoma.innerHTML = "R$"+soma;

})

document.querySelector("button[name=limpar]").addEventListener('click', ()=>{

    items = [];

    document.querySelector(".lista-produtos").innerHTML = "";

    document.querySelector(".soma-produto h2").innerHTML = "R$0,00";

});