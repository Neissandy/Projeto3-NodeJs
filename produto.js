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

    function resposta (){
        const estoqueMedio = (quantMin * quantMax)/2;
        const valorTotal = valor * quantidade;

        let text = "valor total: " + valorTotal + "\n" + "Código do produto: " + id + "\n" + "Estoque médio de peças: " + estoqueMedio;
    }
    

// console.log("valor total: " + valorTotal + "\n" + "Código do produto: " + id);
// console.log("Estoque médio de peças: " + estoqueMedio );