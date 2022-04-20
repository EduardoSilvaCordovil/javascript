let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`Oprimeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(0)
if (pos == -1) {
    console.log('[ERRO] Valor não encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

/*
num[3]=6
num.push(7)
num.legth
num.sort()
*/