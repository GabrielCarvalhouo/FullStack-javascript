// let qtdeInicial = 0,
//   opcoes,
//   adicionar,
//   remover;

// qtdeInicial = Number(prompt("Digite a quantidade inicial de dinheiro:"));
// do {
//   opcoes = prompt(
//     `Você possui ${qtdeInicial} deseja
//\n1) adicionar dinheiro
//\n2) remover dinheiro
//\n3) encerrar o programa`
//   );

//   if (opcoes === "1") {
//     adicionar = Number(prompt("Quanto deseja adicionar?"));
//     qtdeInicial += adicionar;
//   } else if (opcoes === "2") {
//     remover = Number(prompt("Quanto deseja remover?"));
//     qtdeInicial -= remover;
//   }
// } while (opcoes !== "3");
// alert("Você encerrou o programa");

//versão com switch / case

let qtdeInicial = 0,
  opcoes,
  adicionar,
  remover;

qtdeInicial = Number(prompt("Digite a quantidade inicial de dinheiro:"));
do {
  opcoes = prompt(
    `Você possui ${qtdeInicial}R$ o que deseja?
    \n1) adicionar dinheiro
    \n2) remover dinheiro
    \n3) encerrar o programa`
  );

  switch(opcoes){
    case "1":
      adicionar = Number(prompt("Quanto deseja adicionar?"));
      qtdeInicial += adicionar;
      break
    case "2":
      remover = Number(prompt("Quanto deseja remover?"));
      qtdeInicial -= remover;
      break
    case "3":
      alert("saindo...")
      break
    default:
      alert("Opção Invalida!")
  }
} while (opcoes !== "3");
alert("Você encerrou o programa");
