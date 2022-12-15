const turista = prompt("Digite o seu nome:")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade: sim/não").toUpperCase()

while(continuar === 'SIM'){
    let cidade = prompt("Qual é o nome da cidade")
    cidades += "-" + cidade + "\n"
    contagem++
    let continuar = prompt("Você visitou alguma outra cidade: sim/não").toUpperCase()

}
alert(
"Turista: " + turista+
"\nQuanidade de cidades visitadas: " + contagem +
"\nCidades Visitadas:\n" + cidades)
