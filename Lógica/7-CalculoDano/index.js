const nomePersonagem1 = prompt("Digite o nome do seu personagem de ataque:")
const poder = Number(prompt("Digite o poder de ataque dele:"))

const nomePersonagem2 = prompt("Digite o nome do seu personagem de defesa:")
const vidaInicial = Number(prompt("Digite a quantidade de vida dele:"))
const defesa = Number(prompt("Digite o poder de defesa dele:"))

const escudo = prompt("Sua defesa possui um escudo S / N:").toUpperCase

let dano = 0
let vidaAtual = 0

if(poder > defesa && escudo === "N"){
    dano += poder - defesa
    console.log(dano)
    vidaAtual += vidaInicial - dano
    alert(`Os jogadores possuem os seguintes atributos:\n\nAtaque\nNome: ${nomePersonagem1}\nPoder de ataque: ${poder}\n\nDefensor\nNome: ${nomePersonagem2}\nDano Sofrido: ${dano}\nVida Atual: ${vidaAtual}`)
}
else if(poder > defesa && escudo === "S"){
    dano += (poder - defesa) / 2 
    console.log(dano)
}
else if(poder <= defesa){
    dano = 0
    console.log("o dano é igual a zero")
}
