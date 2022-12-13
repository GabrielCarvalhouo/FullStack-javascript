const idade = prompt("informe sua idade: ")
if (idade >= 18){
    alert("Maior de idade")
}
else if(idade >= 14 && idade < 18){
    alert("Vai pro cantinho da criança")
}
else{
    alert("É realmente não pode entrar")
}

// Operador Ternario

const resultado = (6 === 6) ? "True" : "False";
console.log(resultado)