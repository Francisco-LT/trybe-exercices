#!/bin/bash

#primeiramente criamos uma variável que recebe um parâmetro 

#em seguida dentro do if, verificamos se esse parâmetro é um  diretório

#se não for dará aresposta do else

#se for ele dará  a resposta do if, falando que tem determinados arquivos, usando a fórmula com o pipe.



  DIRECTORY=$1
  if [ -d "$DIRECTORY" ]
    then
      FILES=`ls -l $DIRECTORY | wc -l`
      echo "O $DIRECTORY tem $FILES arquivos."
  else
      echo "O argumento $DIRECTORY não é um diretório!"
  fi
