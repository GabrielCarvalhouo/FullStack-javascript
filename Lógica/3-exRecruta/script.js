let nome = window.prompt("Insira seu nome aqui:")
let sobreNome = window.prompt("Insira seu sobrenome aqui:")
let campoDeEstudo = window.prompt("Insira seu campo:")
let dtNascimento = window.prompt("Insira seu ano de nascimento aqui:")


const dataAtual = new Date()
const anoAtual = dataAtual. getFullYear()
console.log(anoAtual)


let idade = anoAtual - dtNascimento
alert(nome + " " +sobreNome 
+ " estuda: " + campoDeEstudo 
+ " E sua idade é: " + idade)
