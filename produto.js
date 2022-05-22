// const id = '001';
// const valor = '10';
// const quantidade = '3';
// const quantMin = '1';
// const quantMax = '10'


const id = document.getElementById("idProdt");
const valor = document.getElementById("valorProdt");
const quantidade = document.getElementById("quantProdt");
const quantMin = document.getElementById("quantMinProdt");
const quantMax = document.getElementById("quantMaxProdt");
const btnEnviar = document.getElementById("btn");

    function resposta (){
        const estoqueMedio = (parseFloat(quantMin.value) + parseFloat(quantMax.value))/2;
        const valorTotal = parseFloat(valor.value) * parseFloat(quantidade.value);

        console.log('Código do Produto: ' + id.value);
        console.log('Valor total: ' + valorTotal);
        console.log('Estoque Médio: ' + estoqueMedio);
}
btnEnviar.onclick = resposta;


// console.log("valor total: " + valorTotal + "\n" + "Código do produto: " + id);
// console.log("Estoque médio de peças: " + estoqueMedio );

// if (id.lenght < 4){
//     console.log("O ID precisa ter pelo menos quatro caracteres.")
// }else{
//     console.log('Código do Produto: ' + id.value);
// }