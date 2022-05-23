const id = document.getElementById("idProdt");
const valor = document.getElementById("valorProdt");
const quantidade = document.getElementById("quantProdt");
const quantMin = document.getElementById("quantMinProdt");
const quantMax = document.getElementById("quantMaxProdt");
const btnEnviar = document.getElementById("btn");

function resposta (){

    //Valor total;
    const valorTotal = parseFloat(valor.value) * parseFloat(quantidade.value);
    console.log('Valor total: ' + valorTotal);

    //ID: No mínimo 4 caracteres;
    //DEU ERRADO
    const tamanhoId = id.length;
    if (tamanhoId >= 4){
        console.log('Código do Produto: ' + id.value);
    }else{
        alert("ID precisa ter pelo menos quatro caracteres!")
    }

    //MÍNIMO E MÁXIMO: A quantidade míima de peças não pode ser maior que a quantidade máxima;
    //DEU ERRADO
    if(quantMin > quantMax){
        alert('Quantidade não permtida!')
    }else{
        const estoqueMedio = (parseFloat(quantMin.value) + parseFloat(quantMax.value))/2;
        console.log('Estoque Médio: ' + estoqueMedio);
    }

}
btnEnviar.onclick = resposta;

// //VALOR: Apenas valores númericos;

// function onlynumber(evt) {
//     var theEvent = evt || window.event;
//     var key = theEvent.keyCode || theEvent.which;
//     key = String.fromCharCode( key );
//     //var regex = /^[0-9.,]+$/;
//     var regex = /^[0-9.]+$/;
//     if( !regex.test(key) ) {
//        theEvent.returnValue = false;
//        if(theEvent.preventDefault) theEvent.preventDefault();
//     }
//  }