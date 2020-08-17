#!/bin/bash

#lembrando que neste exercíco foi necessário do outro lao usar o comando pwd, para entender ocaminho exato do meu arquivo.
#nele estamos primeiramente criando a variavel FILE, que recebe o caminho do arquivo .sh que crei
#em seguida usamos o if, que dentro tem o comando -e que verifica se o arquivo existe.
#depois temos o if, mas usando também o else, priemiro ele verifica se  o arquivo tem permissão de escrita com o -w
#por último ele manda uma mensagem caso você tenha a permissão de escrita eou outra caso você não tenha a permissão.



 FILE="/home/francisco/Desktop/Exercicios/caminho.sh"
  if [ -e "$FILE" ]
    then
       echo "O caminho $FILE está habilitado!"
  fi
  if [ -w "$FILE" ]
    then
      echo "Você tem permissão para editar $FILE"
    else
      echo "Você NÃO foi autorizado a editar $FILE"
  fi
