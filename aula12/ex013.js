var agora = new Date()
var diaSem = agora.getDay()

/*Dommingo; Segunda; Terça; Quarta; Quinta; Sexta e Sábado*/

//console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log(`DOMINGO`)
        break
    case 1:
        console.log(`SEGUNDA-FEIRA`)
        break
    case 2:
        console.log(`TERÇA-FEIRA`)
        break
    case 3:
        console.log(`QUARTA-FEIRA`)
        break
    case 4:
        console.log(`QUINTA-FEIRA`)
        break
    case 5:
        console.log(`SEXTA-FEIRA`)
        break
    case 6:
        console.log(`SÁBADO`)
        break
    default: 
    console.log(`[ERRO] DIA INVÁLIDO`)
    break
}