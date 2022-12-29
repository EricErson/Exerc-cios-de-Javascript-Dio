/*
2) O IMC – Índice de Massa Corporal é um sugerido pela Organização Mundial de Saúde para dar uma indicação sobre a 
condição de peso de uma pessoa adulta. 

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18,5 Abaixo do peso;
- Entre 18,5 e 25 Pesos normais;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

const peso = 120.90;
const altura = 1.77;
const imc = peso / Math.pow( altura, 2)
    console.log(imc);

    if(imc < 18.5){
        console.log( 'Abaixo do peso');

    } else if ( imc >= 18.5 && imc <= 25) {
        console.log('Pesos normais');
    } else if ( imc >= 25 && imc <= 30){
        console.log('Acima do peso');
    } else if ( imc >= 30 && imc <= 40){
        console.log('Obeso');
    } if (imc > 40) {
        console.log('Obesidade morbida');
    }
