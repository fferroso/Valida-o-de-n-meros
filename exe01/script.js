let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){ //se o número digitado já estiver na lista, vai retornar falso
        return true
    }else{
        return false
    }

}

function add(){
    //se o que foi digitado for um número e não estiver na lista   
    if(isNumber(num.value) && !inLista(num.value, valores)){
        let item = document.createElement('option')//criou a tag <option>
        valores.push(Number(num.value))//adicionou o numero digitado na array valores
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)//adicinou o <option> na tag <select> com id='flista'
        res.innerHTML = ''
        num.value = ''
        num.focus()
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
        
}
function finalizar(){
    if(valores.length == 0){ //se o vetor estiver vazio
        alert('adicione valores antes de finalizar')

    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( let pos in valores){
            soma += valores[pos]
            if(valores[pos]>maior)
                maior = valores[pos]
            
            if(valores[pos]<menor)
                menor = valores[pos] 
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML +=`<p>O total de números adicionados é ${tot}</p>`
        res.innerHTML += `<p> O menor valor é ${menor}</p>`
        res.innerHTML += `<p> O maior valor é ${maior}</p>`   
        res.innerHTML += `<p> A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p> A média dos valores  digitados é ${media}</p>`
    }
}