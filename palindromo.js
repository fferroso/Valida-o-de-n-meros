 const readline = require('readline')

//CRIA UMA INTERFACE DE ENTRADA E SAÍDA
 const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout})

//PERGUNTA AO USUÁRIO E ESPERA A RESPOSTA
 rl.question('Digite seu NOME: ', (resposta)=>{
    console.log('Seu NOMe é: ' +resposta)

    //FECHA A INTERFACE
    rl.close()

})
