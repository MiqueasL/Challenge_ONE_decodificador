let textoEntrada = document.querySelector('.entrada');
let textoSaida = document.querySelector('.container__saida');

function criptografar(){
    let textoCriptografado = textoEntrada.value;

    let criptografia =textoCriptografado.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.querySelector('.container__saida').innerHTML = '<textarea readonly class="entrada">' + criptografia + '</textarea>' + '<button onclick="copiar()" class="container__saida__botao__copiar">Copiar</button>';

    document.querySelector('.container__saida__botao__copiar').style.display = 'block';
}

function descriptografar(){
    let textoCriptografado = textoEntrada.value;

    let descriptografia =textoCriptografado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.querySelector('.container__saida').innerHTML = '<textarea readonly class="entrada">' + descriptografia + '</textarea>' + '<button onclick="copiar()" class="container__saida__botao__copiar">Copiar</button>';

    document.querySelector('.container__saida__botao__copiar').style.display = 'block';
}

function copiar(){
    let textoCopiar = document.querySelector('.container__saida textarea');

    textoCopiar.select();
    document.execCommand('copy');
    alert('Texto Copiado')
}
