let arrayMinor = [22,43,78,15,5,9,3,776,8]

//preciso de um número para comparar o maior e o menos, nesse caso, ultilizarei o primeiro nnúmero
//da array, o 2, mas poderia ser qualquer outro, que funcionaria de qualquer jeito.
let menorArray = arrayMinor[0]//índice zero da array que é o 22
let maiorArray = arrayMinor[0]//índice zero da array que é o 22


for(i=0; i<arrayMinor.length; i++){//usarei o loop para percorrer todos os números da array.
    
    if(arrayMinor[i]<menorArray){//depois que percorry, usarei o IF para comparar os todos os números da array com o primeiro, que é o 22
        menorArray = arrayMinor[i]//
}   if(arrayMinor[i]>maiorArray){
        maiorArray = arrayMinor[i]





}}
console.log(maiorArray)
console.log(menorArray)
