#!/bin/bash

#primeiramente criamos duas cariáveis recebendo parâmetros, uma referente a pastas e a outra referente a arquivo

#em seguida criamos uam variável para receber a data

#depois usamos o comando cd para procurar  o diretório que foi digitado para o parâmetro 1

#o for é usado para que os arquivos que digitamos a terminaçõa, no caso jpg sejam procurados dentro da pasta e modificados



DIRECTORY=$1

EXTENSION=$2

  DAY=$(date +%F)

  cd $DIRECTORY

  for FILE in `ls *.$EXTENSION`
  
 do

      echo "Renomeando $FILE para ${DAY}-${FILE}"

      mv $FILE ${DAY}-${FILE}
   done
