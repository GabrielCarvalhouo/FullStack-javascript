let opcoes 

do{

    opcoes = prompt("Escolha umas das opcoes\n\n1)\n2)\n3)\n4)\n5): Encerrar")

    switch(opcoes){
        case "1":
            alert("opção 1")
        break
        case "2":
            alert("opção 2")
        break
        case "3":
            alert("opção 3")
        break
        case "4": 
            alert("opção 4")
        break
        case "5":
            alert("Você escolheu encerrar")
            alert("Encerrando....")
        break
        default:
            alert("opção Invalida")
    }
}while(opcoes !== '5')

alert("Você saiu do programa")