const veiculo1Nome = prompt("Digite o nome do primeiro veículo:")
const veiculo1 = Number(prompt("Digite a velocidade do primeiro veículo:"))

const veiculo2Nome = prompt("Digite o nome do segundo veículo:")
const veiculo2 = Number(prompt("Digite a velocidade do segundo veículo:"))

if(veiculo1 > veiculo2){
    alert("O "+ veiculo1Nome + " é mais rapido\nSua velocidade foi de: " + veiculo1 + "km/h")
}
else if (veiculo2 > veiculo1){
    alert("O "+ veiculo2Nome + " é mais rapido\nSua velocidade foi de: " + veiculo2 + "km/h")
}
else if (veiculo1 === veiculo2){
    alert("A velocidado dos carros é igual")
}