const numero = Number(prompt("Digite o número que deseja multiplicar:"))
let resultado = ""

for(i=1; i<=20; i++){
    resultado += " => " + numero + " * " + i + " = " + (numero * i) + "\n"

}
alert("Resultado da tabuada de " + numero + "\n\n" + resultado)
