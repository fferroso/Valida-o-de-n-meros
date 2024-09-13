const readline = require('readline');

// Cria uma interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário e espera a resposta
rl.question('Digite algo: ', (resposta) => {
    console.log(`Você digitou: ${resposta}`);
    
    // Fecha a interface
    rl.close();
});
