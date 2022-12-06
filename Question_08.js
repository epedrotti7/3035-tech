// Faça um programa, usando SWITCH, que receba dois números e execute as operações listadas a seguir, de acordo com a escolha.
// Operações com SWITCH:
// a) Operação 1: A soma de dois números
// b) Operação 2: A subtração de dois números
// c) Operação 3: A multiplicação de dois números
// d) Operação 4: A divisão de dois números
// Se a opção digitada for inválida, mostre uma mensagem de erro e termine a execução do programa.

const readline = require('readline');

function switchOperations() {
    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = `
    
    Qual comando você deseja executar?
    
    a) Operação 1: A soma de dois números
    b) Operação 2: A subtração de dois números
    c) Operação 3: A multiplicação de dois números
    d) Operação 4: A divisão de dois números
    
    `

    reader.question(question, (comand) => {

        const readNumbers = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question1 = `Digite dois números, exemplo.: 1,2 => `

        switch (Number(comand)) {
            case 1:
                readNumbers.question(question1, (numbers) => {
                    const number1 = numbers.split(',')[0];
                    const number2 = numbers.split(',')[1];
                    console.log(`A soma dos numeros ${number1} + ${number2} é ${number1 + number2}`);
                    reader.close();
                });
            case 2:
                readNumbers.question(question1, (numbers) => {
                    const number1 = numbers.split(',')[0];
                    const number2 = numbers.split(',')[1];
                    console.log(`A subtração dos numeros ${number1} + ${number2} é ${number1 - number2}`);
                    reader.close();
                });
                break;
            case 3:
                readNumbers.question(question1, (numbers) => {
                    const number1 = numbers.split(',')[0];
                    const number2 = numbers.split(',')[1];
                    console.log(`A multiplicação dos numeros ${number1} + ${number2} é ${number1 * number2}`);
                    reader.close();
                });
                break;
            case 4:
                readNumbers.question(question1, (numbers) => {
                    const number1 = numbers.split(',')[0];
                    const number2 = numbers.split(',')[1];
                    console.log(`A divisão dos numeros ${number1} + ${number2} é ${number1 / number2}`);
                    reader.close();
                });
                break;
            default:
                console.log(`Comando ${comand} inválido.`)
                reader.close();
                break;
        }
    });
}

switchOperations();