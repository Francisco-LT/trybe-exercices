let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };
  info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };
// nesse for/in inicialmente ele analiza o primeiro info[proprieties] que no caso seria "Margarida", como não cabe no primeir if, ele vai até o else, e assim por diante...
  for (let properties in info) {
      if (
          info[properties] == info.recorrente &&
          info[properties] == "Sim" &&
          info2[properties] == "Sim"
      ) {
    console.log("Ambos recorrentes")
} else {
    console.log(info[properties] + " e " + info2[properties]);
}
}