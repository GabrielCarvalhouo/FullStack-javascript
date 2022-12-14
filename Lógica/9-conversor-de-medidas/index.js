const recebeMetros = Number(
  prompt("Digite o valor que deseja converter, em metros:")
);
const unidade = prompt(
  "Escolha uma opção de conversão\n\n1) mm\n2) cm\n3) dm\n4) dam\n5) hm\n6) km"
);
let resultado = 0;

switch ( unidade ) {
  case "1":
    resultado += recebeMetros * 1000;
    alert(
      `O resultado da conversão de metros para milímetros é:\n ${resultado}mm`
    );
    break;
  case "2":
    resultado += recebeMetros * 100;
    alert(
      `O resultado da conversão de metros para centimetros é:\n ${resultado}cm`
    );
    break;
  case "3":
    resultado += recebeMetros * 10;
    alert(
      `O resultado da conversão de metros para decimetros é:\n ${resultado}dm`
    );
    break;
  case "4":
    resultado += recebeMetros / 10;
    alert(
      `O resultado da conversão de metros para decâmetros é:\n ${resultado}dam`
    );
    break;
  case "5":
    resultado += recebeMetros / 100;
    alert(
      `O resultado da conversão de metros para hectômetros é:\n ${resultado}hm`
    );
    break;
  case "6":
    resultado += recebeMetros / 1000;
    alert(
      `O resultado da conversão de metros para quilômetros é:\n ${resultado}km`
    );
    break;
  default:
    alert("Opção invalida!");
}
