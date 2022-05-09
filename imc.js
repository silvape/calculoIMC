const masculino = document.getElementById('masculino');
const feminino = document.getElementById('feminino');
const calcular = document.getElementById('calcular');
 

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado'); 
    
    if (nome !== '' && altura !== '' && peso !== ''){

        const valorImc = (peso / (altura*altura)).toFixed(1);
        
        let classificacao = '';
        if (valorImc < 18.5){
            classificacao = 'Abaixo do pesso.';

        }else if (valorImc < 25){
            classificacao ='peso ideal!!!!! Parabéns.';
        }else if (valorImc < 30){
            classificacao ='Levemente acima do peso.';
            
        }else if (valorImc < 35){
            classificacao ='obesidade grau I.';
        }else if (valorImc < 40){
            classificacao='obsidade grau II.';
        }else{
            classificacao ='obesidade grau III... OBESIDADE MORBIDA!!!!!!';
        }

        resultado.textContent = (`${nome} seu IMC é ${valorImc} e você está ${classificacao}`)
       


    }else{
        
        resultado.textContent = ('Preencher todos os campos')
    }

}

calcular.addEventListener('click', imc);
